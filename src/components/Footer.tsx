import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, Instagram, Youtube, Send } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "../constants";

import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0A3D62] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/">
              <Logo textColor="white" iconSize={24} />
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              Safe & Fast Shifting Services in Chennai. Over 5 years of experience in making your relocation stress-free and efficient.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#F39C12] transition-colors">
                <Instagram size={20} />
              </a>
              <a href={BUSINESS_INFO.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#F39C12] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#F39C12]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/quote" className="hover:text-white transition-colors">Get Free Quote</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#F39C12]">Our Services</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#F39C12]">Contact Info</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F39C12] shrink-0" />
                <span>{BUSINESS_INFO.address}, Chennai.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#F39C12] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#F39C12] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white truncate">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>© 2024 Gandhi Packers & Movers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
