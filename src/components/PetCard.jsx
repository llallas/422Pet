import { useAdoption } from "../context/AdoptionContext";

export default function PetCard({ pet }) {
  const { favorites, toggleFavorite, navigate } = useAdoption();
  const isFav = favorites.includes(pet.id);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
      <div
        onClick={() => navigate(`/pet/${pet.id}`)}
        className="relative h-48 cursor-pointer overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
          {pet.species}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3
              onClick={() => navigate(`/pet/${pet.id}`)}
              className="font-bold text-lg text-zinc-900 dark:text-zinc-100 cursor-pointer hover:text-amber-600 dark:hover:text-amber-400">
              {pet.name}
            </h3>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {pet.age}
            </span>
          </div>
          <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-2">
            {pet.breed}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2 mb-4">
            {pet.description}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <button
            onClick={() => navigate(`/pet/${pet.id}`)}
            className="flex-1 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 py-2 rounded-lg text-sm font-medium transition-colors">
            Meet Me
          </button>
          <button
            onClick={() => toggleFavorite(pet.id)}
            className={`p-2 rounded-lg border text-sm transition-colors ${isFav ? "border-amber-500 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400" : "border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
            aria-label="Favorite">
            {isFav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}
