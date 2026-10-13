import { useAdoption } from "../context/AdoptionContext";
import PetCard from "../components/PetCard";

export default function Home() {
  const { pets } = useAdoption();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 text-center max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-2">
          Find Your New Best Friend
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Browse our wonderful companions looking for a loving home. Heart your
          favorites to compare later!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}
