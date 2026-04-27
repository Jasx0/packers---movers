import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, Award, History, Target, Users } from "lucide-react";
import { BUSINESS_INFO } from "../constants";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn more about Gandhi Packers & Movers, the most trusted shifting company in Chennai with 5+ years of experience."
      />

      {/* Hero */}
      <section className="bg-[#0A3D62] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Your Trusted Relocation Partner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-xl max-w-2xl mx-auto"
          >
            We don't just move boxes; we move memories and businesses with care, precision, and a promise of safety.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F39C12] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                alt="Shifting staff at work" 
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#F39C12] rounded-3xl -z-0"></div>
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <span className="block text-4xl font-bold text-[#0A3D62]">{BUSINESS_INFO.experience}</span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Industry Excellence</span>
              </div>
            </div>

            <div>
              <span className="text-[#F39C12] font-bold uppercase tracking-widest text-sm">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62] mt-4 mb-8">Established in Chennai, Serving with Heart</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded with a vision to revolutionize the shifting industry in Chennai, Gandhi Packers & Movers started as a small team dedicated to safe transportation. Today, we handle over 500+ relocations every year, ranging from small studio apartments to massive multi-national office complexes.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our success is built on the expertise of our staff, the quality of our packing materials, and our unwavering commitment to on-time delivery. We understand that every item we carry has a value beyond just money, and that's why we treat your belongings as our own.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Professional trained staff",
                  "Verified and secure transit",
                  "Transparent billing system",
                  "24/7 dedicated support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#F39C12]" />
                    <span className="font-bold text-[#0A3D62]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 text-[#0A3D62] rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide top-tier, reliable, and affordable relocation services across India, leveraging modern technology and traditional values of care and trust.
              </p>
            </div>
            <div className="bg-[#0A3D62] p-12 rounded-3xl text-white shadow-xl shadow-blue-900/20">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Award size={32} className="text-[#F39C12]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To become the most preferred and trusted shifting partner in India by setting new standards in customer satisfaction and logistics efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Houses Shifted", value: "2500+", icon: History },
              { label: "Cities Covered", value: "50+", icon: Target },
              { label: "Happy Clients", value: "2400+", icon: Users },
              { label: "Professional Staff", value: "25+", icon: Award }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 text-[#F39C12] mb-4"><stat.icon size={48} strokeWidth={1.5} /></div>
                <span className="text-4xl font-bold text-[#0A3D62] mb-2 tracking-tight">{stat.value}</span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Details */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 md:p-16">
              <h3 className="text-3xl font-bold text-[#0A3D62] mb-8">Company Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#F39C12] uppercase font-black text-xs tracking-widest mb-1">Business Name</h4>
                  <p className="text-2xl font-bold text-[#0A3D62]">{BUSINESS_INFO.name}</p>
                </div>
                <div>
                  <h4 className="text-[#F39C12] uppercase font-black text-xs tracking-widest mb-1">Location</h4>
                  <p className="text-lg font-bold text-[#0A3D62]">{BUSINESS_INFO.location}</p>
                </div>
                <div>
                  <h4 className="text-[#F39C12] uppercase font-black text-xs tracking-widest mb-1">Corporate Office</h4>
                  <p className="text-lg font-bold text-[#0A3D62] leading-relaxed">{BUSINESS_INFO.address}, Chennai.</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
