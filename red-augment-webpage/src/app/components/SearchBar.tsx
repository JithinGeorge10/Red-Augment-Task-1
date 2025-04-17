import { ArrowRight } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search ..."
        className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none  focus:border-transparent"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-700 transition-colors">
        <ArrowRight className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

export default SearchBar;