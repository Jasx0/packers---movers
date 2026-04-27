import { motion } from "motion/react";
import { MapPin, ArrowRight, Truck } from "lucide-react";
import { SERVICE_AREAS, BUSINESS_INFO } from "../constants";
import SEO from "../components/SEO";

const ServiceAreas = () => {
  return (
    <>
      <SEO 
        title="Service Areas in Chennai" 
        description="We offer premium packers and movers services in Velachery, Tambaram, T Nagar, Anna Nagar, and all over Chennai."
      />

      <section className="bg-[#0A3D62] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Areas We Serve
          </motion.h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Providing top-rated relocation services across Chennai and all major cities in Tamil Nadu.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 opacity-10">
          <Truck size={400} strokeWidth={1} />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62] mb-6">Serving All of Chennai</h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
              From the heart of the city to the growing industrial corridors, our trucks are moving everywhere to help you relocate comfortably.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SERVICE_AREAS.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-12 h-12 bg-blue-50 text-[#0A3D62] rounded-full flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-[#F39C12] group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <h3 className="font-black text-[#0A3D62] tracking-wide uppercase text-xs">{area}</h3>
                <span className="text-xs text-gray-400 mt-2 font-bold mb-4 font-mono uppercase">Zone Active</span>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="mt-auto text-xs font-black text-[#F39C12] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                >
                  Book Now <ArrowRight size={12} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Regional coverage */}
          <div className="mt-24 bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#F39C12] font-bold uppercase tracking-widest text-sm">Beyond Chennai</span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62] mt-4 mb-8 leading-tight">Inter-City & Interstate Coverage</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  While Chennai is our home, our expertise extends to all major cities in Tamil Nadu including Coimbatore, Madurai, Trichy, and Salem. We also provide seamless interstate relocation to Bangalore, Hyderabad, Mumbai, and Delhi.
                </p>
                <div className="space-y-4">
                  {["Nationwide Network", "Interstate Permits Handled", "Regional Hubs Support"].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 text-[#0A3D62] rounded-full flex items-center justify-center">
                        <ArrowRight size={12} />
                      </div>
                      <span className="font-bold text-[#0A3D62]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Regional Shifting" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F39C12] rounded-full flex flex-col items-center justify-center text-white p-4 text-center transform rotate-12 shadow-xl">
                  <span className="text-2xl font-black">24/7</span>
                  <span className="text-[10px] font-bold uppercase leading-none">Support across Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreas;
