import { createContext, useContext, useState, useEffect } from "react";
import { petsData } from "../data/pets";

const AdoptionContext = createContext();

export function AdoptionProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("pet_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("pet_theme");
    return saved ? saved : "light";
  });

  const [currentRoute, setCurrentRoute] = useState(
    window.location.hash || "#/",
  );

  useEffect(() => {
    localStorage.setItem("pet_favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("pet_theme", theme);
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || "#/");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleFavorite = (petId) => {
    setFavorites((prev) =>
      prev.includes(petId)
        ? prev.filter((id) => id !== petId)
        : [...prev, petId],
    );
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navigate = (path) => {
    window.location.hash = path;
  };

  const value = {
    pets: petsData,
    favorites,
    toggleFavorite,
    theme,
    toggleTheme,
    currentRoute,
    navigate,
  };

  return (
    <AdoptionContext.Provider value={value}>
      {children}
    </AdoptionContext.Provider>
  );
}

export function useAdoption() {
  return useContext(AdoptionContext);
}
