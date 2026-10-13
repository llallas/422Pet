import { useAdoption } from "../context/AdoptionContext";

export default function PetDetail({ petId }) {
  const { pets, favorites, toggleFavorite, navigate } = useAdoption();
  const pet = pets.find((p) => p.id === petId);

  if (!pet) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="text-4xl mb-3">🐾</div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          Pet not found.
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
          The furry friend you are looking for does not exist or has already
          been adopted.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors">
          Back to All Pets
        </button>
      </div>
    );
  }

  const isFav = favorites.includes(pet.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 mb-6 flex items-center gap-1">
        ← Back to list
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <div className="h-80 md:h-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {pet.name}
              </h1>
              <button
                onClick={() => toggleFavorite(pet.id)}
                className={`p-2.5 rounded-xl border text-base transition-colors ${isFav ? "border-amber-500 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400" : "border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}>
                {isFav ? "❤️ Favorited" : "🤍 Add to Favorites"}
              </button>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs px-2.5 py-1 rounded-md font-medium">
                {pet.species}
              </span>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs px-2.5 py-1 rounded-md font-medium">
                {pet.breed}
              </span>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs px-2.5 py-1 rounded-md font-medium">
                {pet.gender}
              </span>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs px-2.5 py-1 rounded-md font-medium">
                {pet.age}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              About {pet.name}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
              {pet.description}
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
            <button
              onClick={() =>
                alert(`Adoption application inquiry started for ${pet.name}!`)
              }
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-xl transition-colors text-sm shadow-sm">
              Adopt {pet.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
