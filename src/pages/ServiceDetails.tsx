import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "../constants";
import SEO from "../components/SEO";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO 
        title={service.title} 
        description={`Professional ${service.title} services in Chennai. ${service.description}`}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A3D62] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <service.icon size={64} className="mx-auto mb-6 text-[#F39C12]" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600">
                <h2 className="text-3xl font-bold text-[#0A3D62] mb-6 tracking-tight italic">Relocation Excellence Guaranteed</h2>
                <p className="leading-relaxed mb-6">{service.longDescription}</p>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#0A3D62] mb-8">Service Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-green-100 text-green-600 p-1.5 rounded-full h-fit mt-1">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="font-bold text-[#0A3D62]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step by Step Process */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-[#0A3D62]">How It Works</h3>
                <div className="space-y-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-6 items-start relative pb-8 last:pb-0">
                      {i !== service.process.length - 1 && (
                        <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-200"></div>
                      )}
                      <div className="w-12 h-12 bg-[#0A3D62] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0 z-10 shadow-lg">
                        {i + 1}
                      </div>
                      <div className="pt-2">
                        <p className="text-gray-700 text-lg font-medium leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className="space-y-8">
              {/* Quick Quote Sidebar */}
              <div className="bg-[#0A3D62] p-8 rounded-3xl text-white shadow-xl">
                <h4 className="text-2xl font-bold mb-6">Request Callback</h4>
                <p className="text-blue-100 mb-8 font-medium">Interested in {service.title}? Speak with our team for a custom quote.</p>
                <div className="space-y-4">
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full bg-[#F39C12] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors"
                  >
                    <Phone size={20} />
                    Call Experts
                  </a>
                  <a 
                    href={BUSINESS_INFO.whatsapp}
                    className="w-full bg-white text-[#0A3D62] py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
                  >
                    <MessageSquare size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* All Services List */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-[#0A3D62] mb-6">Other Services</h4>
                <div className="space-y-3">
                  {SERVICES.filter(s => s.id !== service.id).map(s => (
                    <Link 
                      key={s.id} 
                      to={`/services/${s.slug}`}
                      className="flex items-center justify-between p-4 rounded-xl font-bold text-[#0A3D62] hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 group"
                    >
                      {s.title}
                      <ArrowRight size={18} className="text-[#F39C12] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Testimonial Snippet */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={14} fill="#F39C12" className="text-[#F39C12]" />)}
                </div>
                <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
                  "Gandhi Packers carried out our {service.title} with amazing speed and safety. Not a single item was damaged. Truly the best in Chennai!"
                </p>
                <div className="font-bold text-[#0A3D62] text-sm">- Verified Customer</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Large CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0A3D62] mb-6">Experience Premium Shifting Today</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-10">
            Join thousands of satisfied customers who have experienced stress-free relocation with us.
          </p>
          <Link to="/quote" className="bg-[#F39C12] text-white px-10 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition-all inline-block hover:-translate-y-1">
            Get Your Free Quote Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
