import { AdoptionProvider, useAdoption } from "./context/AdoptionContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import PetDetail from "./pages/PetDetail";
import NotFound from "./pages/NotFound";

function RouterContent() {
  const { currentRoute } = useAdoption();

  let pageComponent = <NotFound />;

  if (currentRoute === "#/" || currentRoute === "") {
    pageComponent = <Home />;
  } else if (currentRoute === "#/favorites") {
    pageComponent = <Favorites />;
  } else if (currentRoute.startsWith("#/pet/")) {
    const petId = currentRoute.replace("#/pet/", "");
    pageComponent = <PetDetail petId={petId} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <Header />
      <main className="flex-1">{pageComponent}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AdoptionProvider>
      <RouterContent />
    </AdoptionProvider>
  );
}
