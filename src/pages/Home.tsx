import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck, Clock, Award, Star } from "lucide-react";
import { BUSINESS_INFO, SERVICES, TESTIMONIALS } from "../constants";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO 
        title="Best Packers and Movers in Chennai" 
        description="Providing safe, fast, and affordable house shifting and office relocation services in Chennai. 5+ years of experience, safe packing, and on-time delivery."
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0A3D62] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" 
            alt="Moving truck hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62] to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-[#F39C12] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Premium Relocation Partner
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best <span className="text-[#F39C12]">Packers and Movers</span> in Chennai
              </h1>
              <p className="text-lg text-blue-50 mb-10 leading-relaxed">
                Affordable, safe and reliable relocation services. We handle your belongings with care and precision, ensuring a stress-free shifting experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/quote" 
                  className="bg-[#F39C12] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group"
                >
                  Get Free Quote
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="bg-white text-[#0A3D62] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div className="flex flex-col text-white">
                  <span className="text-2xl font-bold flex items-center gap-1">
                    <Award className="text-[#F39C12]" size={24} /> 5+
                  </span>
                  <span className="text-xs text-blue-200">Years Experience</span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-2xl font-bold flex items-center gap-1">
                    <ShieldCheck className="text-[#F39C12]" size={24} /> Safe
                  </span>
                  <span className="text-xs text-blue-200">Packing Ensured</span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-2xl font-bold flex items-center gap-1">
                    <Clock className="text-[#F39C12]" size={24} /> 100%
                  </span>
                  <span className="text-xs text-blue-200">On-time Delivery</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62] mb-4">Our Professional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a wide range of shifting and relocation solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-blue-50 text-[#0A3D62] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A3D62] group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={`/services/${service.slug}`} 
                  className="text-[#F39C12] font-semibold flex items-center gap-2 group/btn"
                >
                  Learn More 
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#F39C12] font-bold uppercase tracking-widest text-sm">Customer Stories</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62] mt-4 mb-6">What Our Happy Clients Say</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Thousands of families and businesses trust us for their relocation. Here is why we are the top-rated packers and movers in Chennai.
              </p>
              <Link to="/testimonials" className="bg-[#0A3D62] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#F39C12] transition-colors inline-block">
                See All Reviews
              </Link>
            </div>
            
            <div className="space-y-6">
              {TESTIMONIALS.slice(0, 2).map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 p-8 rounded-2xl relative shadow-sm border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F39C12" className="text-[#F39C12]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#0A3D62]">{testimonial.name}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">{testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A3D62]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What are your charges for household shifting?", a: "Charges depend on the number of items, distance, and packing quality. Contact us for a free site survey." },
              { q: "Do you provide insurance for the move?", a: "Yes, we facilitate transit insurance to cover any unexpected damages during long-distance moving." },
              { q: "How many days in advance should I book?", a: "We recommend booking at least 2-4 days in advance for local shifting and 1 week for long-distance." }
            ].map((faq, i) => (
              <details key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer group">
                <summary className="font-bold text-[#0A3D62] flex justify-between items-center list-none">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* UPI & Booking CTA */}
      <section className="py-20 bg-[#F39C12] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Move Safely?</h2>
          <p className="text-orange-50 text-xl mb-10 max-w-2xl mx-auto">
            Book your slot today and experience the most reliable shifting service in Chennai. We accept UPI, Bank Transfer, and Cash.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/quote" className="bg-[#0A3D62] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors">
              Book Online Now
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-[#0A3D62] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Talk to Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
