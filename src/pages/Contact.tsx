import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Youtube, MessageSquare, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../constants";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Gandhi Packers & Movers in Chennai. Phone, WhatsApp, and Address details for premium shifting services."
      />

      <section className="bg-[#0A3D62] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            We are here to answer any questions you have about your upcoming relocation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Info Cards */}
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-blue-100 text-[#0A3D62] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0A3D62] group-hover:text-white transition-colors">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4 uppercase tracking-widest text-[#F39C12]">Phone Support</h3>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-bold text-[#0A3D62] hover:text-[#F39C12] transition-colors">{BUSINESS_INFO.phone}</a>
                <p className="text-gray-500 mt-4 text-sm font-medium flex items-center gap-2">
                  <Clock size={16} /> Available 24/7
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-orange-100 text-[#F39C12] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F39C12] group-hover:text-white transition-colors">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4 uppercase tracking-widest text-[#F39C12]">WhatsApp Us</h3>
                <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-[#0A3D62] hover:text-[#25D366] transition-colors">Chat Instantly</a>
                <p className="text-gray-500 mt-4 text-sm font-medium">Quick responses guaranteed.</p>
              </div>

              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-blue-100 text-[#0A3D62] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0A3D62] group-hover:text-white transition-colors">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4 uppercase tracking-widest text-[#F39C12]">Email</h3>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xl font-bold text-[#0A3D62] hover:text-[#F39C12] transition-colors break-words">{BUSINESS_INFO.email}</a>
              </div>
            </div>

            {/* Map & Address */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[3rem] p-4 shadow-2xl border border-gray-100 h-full overflow-hidden flex flex-col">
                <div className="flex-grow rounded-[2.5rem] overflow-hidden min-h-[400px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.922437633633!2d80.0890632386762!3d13.064098935408983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52610738090955%3A0xe54d8583492ed697!2sPoonamallee%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714210000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
                <div className="p-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex gap-6 items-start">
                    <div className="bg-[#0A3D62] text-white p-4 rounded-2xl shadow-xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-widest text-[#F39C12] mb-2">Our Base</h4>
                      <p className="text-xl font-bold text-[#0A3D62] leading-tight">{BUSINESS_INFO.address}, Poonamallee, Chennai.</p>
                      <a href={BUSINESS_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[#0A3D62] font-bold border-b-2 border-[#F39C12] pb-1 hover:text-[#F39C12] transition-colors">
                        View On Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 rounded-2xl text-[#0A3D62] hover:bg-orange-50 hover:text-[#F39C12] transition-all">
                      <Instagram size={24} />
                    </a>
                    <a href={BUSINESS_INFO.youtube} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 rounded-2xl text-[#0A3D62] hover:bg-orange-50 hover:text-[#F39C12] transition-all">
                      <Youtube size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
