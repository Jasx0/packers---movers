import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServiceDetails from './pages/ServiceDetails';
import Quote from './pages/Quote';
import TestimonialsPage from './pages/TestimonialsPage';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ServiceAreas from './pages/ServiceAreas';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}
