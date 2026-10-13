import { useAdoption } from "../context/AdoptionContext";
import PetCard from "../components/PetCard";

export default function Favorites() {
  const { pets, favorites, navigate } = useAdoption();
  const favoritedPets = pets.filter((p) => favorites.includes(p.id));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-1">
          Your Favorite Pets
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Review the animals you've saved.
        </p>
      </div>

      {favoritedPets.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
            No favorites yet.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors">
            Browse Pets
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoritedPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </div>
  );
}
