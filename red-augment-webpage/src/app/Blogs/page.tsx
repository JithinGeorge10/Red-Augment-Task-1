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
    <Navbar></Navbar>
    <div className="flex flex-col max-h-full max-w-full left-0 right-0 items-center font-Montserrat">
      <div className="text-center mb-6 max-w-4xl">
        <h1 className="text-6xl font-light text-white font-Montserrat mb-6">
          <span className="font-normal">Discover Blogs With</span> <br />
          the Best Lorem
        </h1>
        <SearchBar />
      </div>

      <div className="w-full bg-gray-950 text-white font-Montserrat border-t-[0.5px] border-gray-700">
        <div className="border-b border-gray-800 p-6">
          <h2 className="text-3xl font-medium font-Montserrat">
            Blogs & Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 border-l-1 ml-20 border-gray-700 mb-16">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative border-b border-r border-gray-800 p-6 bg-transparent transition-all duration-300 ease-in-out cursor-pointer overflow-hidden aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-blue-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-20">
                  <div className="border border-gray-700 rounded p-2 group-hover:border-gray-300 transition-colors duration-300">
                    {post.icon}
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    {post.date}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-medium text-amber-100 mb-2 block transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 origin-left">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 origin-left">
                    {post.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Blogs;