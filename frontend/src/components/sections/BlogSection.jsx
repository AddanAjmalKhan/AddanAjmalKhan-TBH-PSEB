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
    <section className="w-full bg-[#FFF1F2] py-16">


      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Latest Blogs
        </h2>

        {/* Blog List */}
        <div className="space-y-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Text Content */}
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">{blog.date}</p>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {blog.description}
                </p>

                <button className="mt-4 text-red-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>

              {/* Image */}
              <div className="md:w-64 w-full h-56 md:h-auto">
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
