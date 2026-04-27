import { motion } from "motion/react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS, BUSINESS_INFO } from "../constants";
import SEO from "../components/SEO";

const TestimonialsPage = () => {
  return (
    <>
      <SEO 
        title="Client Reviews & Testimonials" 
        description="Read what our satisfied customers say about Gandhi Packers & Movers shifting services in Chennai. 5-star rated packing and moving."
      />

      <section className="bg-[#0A3D62] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            What Our Clients Say
          </motion.h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Honest feedback from people and businesses we've helped move across Chennai and India.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-shadow"
              >
                <Quote className="absolute top-8 right-10 text-gray-100" size={64} />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, starI) => (
                      <Star key={starI} size={20} fill="#F39C12" className="text-[#F39C12]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0A3D62] text-white rounded-full flex items-center justify-center font-bold text-xl uppercase">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#0A3D62]">{testimonial.name}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest font-bold font-mono">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-white rounded-3xl border border-gray-100 text-center">
            <h3 className="text-3xl font-bold text-[#0A3D62] mb-6">Are you a satisfied customer?</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">We value your feedback! Share your experience with us and help others find the best shifting service in Chennai.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-[#0A3D62] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2">
                <CheckCircle2 size={18} />
                Leave a Review
              </a>
              <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2">
                Share Feedback on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
