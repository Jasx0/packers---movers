import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "../constants";
import SEO from "../components/SEO";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    houseSize: "1BHK",
    items: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        // Reset form
        setFormData({ name: "", phone: "", pickup: "", drop: "", houseSize: "1BHK", items: "" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback: If API fails, we can still redirect to WhatsApp
      window.open(getWhatsAppLink(), "_blank");
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppLink = () => {
    const text = `Hello Gandhi Packers & Movers, I want a quote for shifting:%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Pickup: ${formData.pickup}%0A
Drop: ${formData.drop}%0A
Size: ${formData.houseSize}%0A
Details: ${formData.items}`;
    return `${BUSINESS_INFO.whatsapp}?text=${text}`;
  };

  return (
    <>
      <SEO 
        title="Get Free Quote" 
        description="Get an instant free quote for your house or office shifting in Chennai. Affordable rates and premium service guaranteed."
      />

      <section className="py-24 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">Request Sent!</h2>
                  <p className="text-gray-600 mb-8">We have received your quote request. Our expert will contact you within 30 minutes.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[#F39C12] font-bold hover:underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-[#0A3D62] mb-2">Request a Free Quote</h2>
                  <p className="text-gray-600 mb-10">Fill the form below and save up to 20% on your shifting costs.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C12] focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="82202-xxxxx"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C12] focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Pickup Location</label>
                        <input
                          type="text"
                          name="pickup"
                          required
                          placeholder="e.g. Velachery"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C12] focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                          value={formData.pickup}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Drop Location</label>
                        <input
                          type="text"
                          name="drop"
                          required
                          placeholder="e.g. Anna Nagar"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C12] focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                          value={formData.drop}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">House / Office Size</label>
                      <select
                        name="houseSize"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C12] focus:ring-2 focus:ring-orange-100 outline-none transition-all bg-white"
                        value={formData.houseSize}
                        onChange={handleChange}
                      >
                        <option>1BHK</option>
                        <option>2BHK</option>
                        <option>3BHK</option>
                        <option>4BHK+</option>
                        <option>Small Office</option>
                        <option>Large Office</option>
                        <option>Villa / Farm House</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Additional Details (Optional)</label>
                      <textarea
                        name="items"
                        rows={3}
                        placeholder="Mention heavy items like Fridge, AC, or specific requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C12] focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                        value={formData.items}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#0A3D62] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#F39C12] transition-colors disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Submit Quote Request"}
                      <Send size={18} />
                    </button>

                    <div className="relative py-4">
                      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                      <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or Fast Connect</span></div>
                    </div>

                    <a 
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1faa53] transition-colors"
                    >
                      Instant Quote on WhatsApp
                      <MessageSquare size={18} />
                    </a>
                  </form>
                </>
              )}
            </motion.div>

            {/* Content Side */}
            <div className="lg:py-12">
              <span className="text-[#F39C12] font-bold uppercase tracking-widest text-sm">Why Choose Us?</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62] mt-4 mb-8">Transparent Pricing, Zero Hidden Costs</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-100 text-[#0A3D62] rounded-2xl flex items-center justify-center shrink-0 border border-blue-50">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3D62] mb-2">Free Site Survey</h4>
                    <p className="text-gray-600">We offer a complimentary visit to your location to provide an accurate estimate of moving costs.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 text-[#F39C12] rounded-2xl flex items-center justify-center shrink-0 border border-orange-50">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3D62] mb-2">Premium Packing</h4>
                    <p className="text-gray-600">Our quotes include high-quality packing materials to ensure your fragile items stay safe.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-100 text-[#0A3D62] rounded-2xl flex items-center justify-center shrink-0 border border-blue-50">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3D62] mb-2">Expert Team</h4>
                    <p className="text-gray-600">Our trained professionals handle loading and unloading with professional techniques.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-[#0A3D62] rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-4">Need immediate help?</h4>
                <p className="text-blue-100 mb-6 font-medium">Speak with our shifting advisor for custom requirements or corporate moves.</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F39C12] rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-blue-300 uppercase tracking-wider font-bold">24/7 Helpline</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-bold hover:text-[#F39C12] transition-colors">{BUSINESS_INFO.phone}</a>
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

export default Quote;
