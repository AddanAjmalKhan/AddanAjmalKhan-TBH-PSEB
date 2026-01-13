import React from "react";
import blog1 from "../../assets/blog/blog-1.jpg";
import blog2 from "../../assets/blog/blog-2.jpg";

const blogs = [
  {
    id: 1,
    title: "First-Time Donor? Don’t Let Fear (or Misinformation) Hold You Back",
    date: "Oct 25, 2023",
    description:
      "First-Time Donor? Don’t Let Fear (or Misinformation) Hold You Back Donating blood for the first time can feel intimidating...",
    image: blog1,
  },
  {
    id: 2,
    title: "Blood Donation Myths Busted: Separating Fact from Fiction",
    date: "Nov 27, 2023",
    description:
      "Blood Donation Myths Busted: Separating Fact from Fiction Donating blood is a generous act that...",
    image: blog2,
  },
];

const BlogSection = () => {
  return (
    <section className="w-full bg-[#FFF1F2] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Latest Blogs
        </h2>

        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="flex-1 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-1">
                  {blog.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-2">{blog.date}</p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {blog.description}
                </p>
                <button className="mt-3 text-red-600 font-semibold hover:underline text-sm md:text-base">
                  Read More →
                </button>
              </div>

              <div className="md:w-48 w-full h-40 md:h-auto">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
