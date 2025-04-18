import { ArrowRight } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md md:max-w-2xl mx-4">
  <input
    type="text"
    placeholder="Search ..."
    className="w-full px-4 py-3 md:px-6 md:py-4 text-sm md:text-base rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 placeholder:text-sm md:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
    <ArrowRight className="h-5 w-5 text-white" />
  </button>
</div>
  );
};

export default SearchBar;