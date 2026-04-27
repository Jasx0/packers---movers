import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../constants";
import SEO from "../components/SEO";

const Blog = () => {
  return (
    <>
      <SEO 
        title="Moving Tips & Blog" 
        description="Get expert advice, packing tips, and shifting guides for your next move in Chennai. Stay updated with Gandhi Packers and Movers."
      />

      <section className="bg-[#0A3D62] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Insights & Guides
          </motion.h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Expert advice and tips to make your relocation process smooth and efficient.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#F39C12] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Shifting Tips
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-bold mb-4 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User size={14} /> Admin</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-4 hover:text-[#F39C12] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-[#0A3D62] font-black group"
                  >
                    Read Full Story
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-24 p-12 lg:p-20 bg-[#0A3D62] rounded-[3rem] text-white overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay packing-smart!</h2>
                <p className="text-blue-100 text-lg mb-0 max-w-md">Subscribe to our newsletter and get shifting guides delivered to your inbox weekly.</p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-8 py-5 rounded-2xl bg-white/10 border border-white/20 outline-none focus:border-[#F39C12] transition-colors placeholder:text-blue-300 font-bold"
                />
                <button className="bg-[#F39C12] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-colors whitespace-nowrap shadow-xl">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
