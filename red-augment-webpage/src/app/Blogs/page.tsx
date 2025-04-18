import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import SearchBar from "../components/SearchBar";
import { Edit } from "lucide-react";

const Blogs = () => {
  const blogPosts = Array(16)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: "Architectural Design",
      category: "TECHNOLOGY",
      date: "12/08/2024",
      icon: (
        <Edit
          size={24}
          strokeWidth={1}
          className="text-white font-Montserrat"
        />
      ),
    }));

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full font-Montserrat px-4">
        {/* Heading Section */}
        <div className="text-center mb-10 max-w-4xl px-2">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-6">
            <span className="font-normal">Discover Blogs With</span> <br />
            the Best Lorem
          </h1>
          <SearchBar />
        </div>

        {/* Blog Section */}
        <div className="w-full bg-gray-950 text-white border-t border-gray-700">
          <div className="border-b border-gray-800 p-4 sm:p-6">
            <h2 className="text-2xl sm:text-3xl font-medium">Blogs & Case Studies</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] border-l border-gray-700">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group relative border-b border-r border-gray-800 p-4 sm:p-6 bg-transparent transition-all duration-300 ease-in-out cursor-pointer overflow-hidden aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-violet-400 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-16 sm:mb-20">
                    <div className="border border-gray-700 rounded p-2 group-hover:border-gray-300 transition-colors duration-300">
                      {post.icon}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      {post.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-amber-100 mb-2 block transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 origin-left">
                      {post.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 origin-left">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
