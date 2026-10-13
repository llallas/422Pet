import { useAdoption } from "../context/AdoptionContext";

export default function NotFound() {
  const { navigate } = useAdoption();

  return (
    <div className="max-w-md mx-auto px-4 py-28 text-center">
      <h1 className="text-6xl font-black text-amber-600 dark:text-amber-400 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
        Page not found
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
        Looks like you wandered off the trail! The page you're looking for
        doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors">
        Back to Home
      </button>
    </div>
  );
}
