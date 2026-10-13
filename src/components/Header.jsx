import { useAdoption } from "../context/AdoptionContext";

export default function Header() {
  const { favorites, theme, toggleTheme, currentRoute, navigate } =
    useAdoption();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer font-bold text-lg text-amber-600 dark:text-amber-400">
          <span>🐾 Paws & Claws</span>
        </div>

        <nav className="flex items-center gap-6">
          <button
            onClick={() => navigate("/")}
            className={`text-sm font-medium transition-colors ${currentRoute === "#/" ? "text-amber-600 dark:text-amber-400" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"}`}>
            All Pets
          </button>

          <button
            onClick={() => navigate("/favorites")}
            className={`relative text-sm font-medium transition-colors flex items-center gap-1.5 ${currentRoute === "#/favorites" ? "text-amber-600 dark:text-amber-400" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"}`}>
            Favorites
            {favorites.length > 0 && (
              <span className="bg-amber-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                {favorites.length}
              </span>
            )}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm"
            aria-label="Toggle Theme">
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>
      </div>
    </header>
  );
}
