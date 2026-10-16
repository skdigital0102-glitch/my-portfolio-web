import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewUrl, setPreviewUrl] = useState(null);

  const Icon = ({ name, className = "w-5 h-5" }) => {
    const Component = Icons[name] || Icons.Sparkles;
    return <Component className={className} />;
  };

  // Mee Mobile & WhatsApp Number
  const PHONE_NUMBER = "919000406087";

  const projects = [
    {
      id: 1,
      title: 'Glamour Brides Studio',
      category: 'beauty',
      categoryLabel: 'Luxury Beauty & Bridal',
      desc: 'Celebrity-grade bridal makeup studio website with rose-gold glassmorphism UI, interactive service packages, and direct WhatsApp date-booking integration.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
      badge: 'Rose Gold Theme',
      liveLink: 'https://new-bridal-makeup.vercel.app/',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'WhatsApp API'],
      status: 'Live Production'
    },
    {
      id: 2,
      title: 'Masala Mahal Restaurant',
      category: 'food',
      categoryLabel: 'Gourmet Dining & Food',
      desc: 'Authentic luxury restaurant and home delivery portal featuring digital food menu, dish category filters, and instant WhatsApp ordering setup.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      badge: 'Saffron Dark Theme',
      liveLink: 'https://masala-mahal-website-jlxg.vercel.app/',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Fast Load'],
      status: 'Live Production'
    },
    {
      id: 3,
      title: 'Roameo Rides & Travels',
      category: 'travel',
      categoryLabel: 'Car Rentals & Travel Agency',
      desc: 'Premium cab booking & travel agency website with hourly fare calculators, luxury car fleet gallery, and one-tap call/booking routing.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      badge: 'Amber Gold Theme',
      liveLink: '#',
      tags: ['React', 'Tailwind CSS', 'Booking UI'],
      status: 'Client Demo Ready'
    },
    {
      id: 4,
      title: 'Homemade Food Delivery Service',
      category: 'food',
      categoryLabel: 'Food Business & Catering',
      desc: 'Clean home-cooked food ordering platform with daily subscription menu, customer review cards, and WhatsApp order confirmation.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
      badge: 'Green Fresh Theme',
      liveLink: '#',
      tags: ['React', 'Tailwind CSS', 'Fast Ordering'],
      status: 'Client Demo Ready'
    },
    {
      id: 5,
      title: 'Fitness & Gym Landing Page',
      category: 'fitness',
      categoryLabel: 'Health & Fitness Studio',
      desc: 'Dark high-energy workout studio site featuring cardio/weightlifting plans, trainer profiles, and membership slot booking.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
      badge: 'Neon Gym Theme',
      liveLink: '#',
      tags: ['React', 'Tailwind CSS', 'Interactive Cards'],
      status: 'Client Demo Ready'
    },
    {
      id: 6,
      title: 'Local Small Business Starter Website',
      category: 'business',
      categoryLabel: 'Retail & Service Business',
      desc: 'Responsive small business starter landing page with quick service highlights, location map integration, and instant inquiry action.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      badge: 'Corporate Blue Theme',
      liveLink: '#',
      tags: ['React', 'Vite', 'Tailwind CSS'],
      status: 'Client Demo Ready'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleWhatsAppContact = (customMsg) => {
    const defaultMsg = "Hello Sunil! Nenu mee Master Portfolio chusi client website development kosam contact chestunnanu.";
    const textToSend = customMsg || defaultMsg;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(textToSend)}`, '_blank');
  };

  const handleDirectCall = () => {
    window.open(`tel:+${PHONE_NUMBER}`, '_self');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-neutral-950 overflow-x-hidden">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-950 via-indigo-900 to-purple-950 text-cyan-300 text-xs py-2 px-4 text-center font-medium tracking-widest uppercase border-b border-cyan-900/40 flex items-center justify-center gap-2">
        <Icon name="Phone" className="w-3.5 h-3.5 text-cyan-400" />
        <span>Call or WhatsApp Directly: +91 90004 06087 | Premium Custom Websites for Local Businesses</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/80 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Icon name="Code2" className="h-6 w-6 text-neutral-950" />
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-white block leading-none">
                  SUNIL <span className="text-cyan-400">DIGITAL</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">High-Performance Web Studio</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-bold">
              <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition">Client Work ({projects.length})</a>
              <a href="#why-choose-us" className="text-slate-300 hover:text-cyan-400 transition">Why Choose Us</a>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleDirectCall}
                  className="border border-neutral-700 hover:border-cyan-400 text-slate-200 px-4 py-2.5 rounded-full font-bold transition flex items-center gap-2"
                >
                  <Icon name="PhoneCall" className="w-4 h-4 text-cyan-400" /> +91 90004 06087
                </button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppContact()}
                  className="bg-gradient-to-r from-cyan-500 to-teal-400 text-neutral-950 px-6 py-2.5 rounded-full font-black transition flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                >
                  <Icon name="MessageSquare" className="w-4 h-4" /> Start Project
                </motion.button>
              </div>
            </div>

            <button className="md:hidden text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-6 pt-4 pb-6 space-y-4 text-sm font-semibold">
            <a href="#projects" className="block text-slate-100 hover:text-cyan-400" onClick={()=>setIsMenuOpen(false)}>Client Work ({projects.length})</a>
            <a href="#why-choose-us" className="block text-slate-100 hover:text-cyan-400" onClick={()=>setIsMenuOpen(false)}>Why Choose Us</a>
            <button 
              onClick={() => { setIsMenuOpen(false); handleDirectCall(); }}
              className="w-full bg-neutral-800 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 border border-neutral-700"
            >
              <Icon name="Phone" className="w-4 h-4 text-cyan-400" /> Call +91 90004 06087
            </button>
            <button 
              onClick={() => { setIsMenuOpen(false); handleWhatsAppContact(); }}
              className="w-full bg-cyan-500 text-neutral-950 py-3 rounded-full font-bold mt-2"
            >
              Contact on WhatsApp
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden text-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-neutral-950 to-neutral-950"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-neutral-900/90 border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-8 shadow-xl shadow-cyan-950/50">
              <Icon name="Sparkles" className="w-4 h-4 text-cyan-400" /> Premium Client Web Design & Direct Lead Capture
            </span>

            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight">
              Grow Your Business With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                High-Converting Websites
              </span>
            </h1>

            <p className="text-slate-400 text-base md:text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
              We design & build ultra-fast, mobile-ready websites for bridal studios, luxury restaurants, travel agencies, and local services with direct WhatsApp order & booking integrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-400 text-neutral-950 font-black px-8 py-4 rounded-full transition shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-3 text-sm tracking-wider uppercase"
              >
                Explore Live Demo Sites <Icon name="ArrowDown" className="w-5 h-5" />
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppContact('Hello Sunil! Nenu naa business website creation gurinchi matladali.')}
                className="w-full sm:w-auto border border-neutral-700 hover:border-cyan-400 text-slate-200 px-8 py-4 rounded-full transition flex items-center justify-center text-sm font-semibold gap-2 bg-neutral-900/50 backdrop-blur-md"
              >
                <Icon name="MessageCircle" className="w-4 h-4 text-cyan-400" /> Chat on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-24 bg-neutral-900/40 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-cyan-400 text-xs font-black uppercase tracking-widest block mb-2">Live Client Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">Live Sites & Demo Work</h2>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Work' },
                { id: 'beauty', label: 'Bridal & Salon' },
                { id: 'food', label: 'Food & Dining' },
                { id: 'travel', label: 'Travels' },
                { id: 'fitness', label: 'Fitness' },
                { id: 'business', label: 'Small Business' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                    activeFilter === tab.id 
                      ? 'bg-cyan-500 text-neutral-950 shadow-md shadow-cyan-500/20' 
                      : 'bg-neutral-900 border border-neutral-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((pro, idx) => (
              <motion.div 
                key={pro.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-neutral-950 border border-neutral-800/80 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between shadow-2xl group relative"
              >
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img src={pro.image} alt={pro.title} className="w-full h-full object-cover group-hover:scale-108 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                      {pro.badge}
                    </span>
                    <span className="absolute top-4 right-4 bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {pro.status}
                    </span>
                  </div>

                  <div className="p-8">
                    <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest">{pro.categoryLabel}</span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-3">{pro.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">{pro.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {pro.tags.map((tag, i) => (
                        <span key={i} className="bg-neutral-900 text-slate-300 text-[10px] px-2.5 py-1 rounded-md border border-neutral-800 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 flex flex-col gap-3">
                  {pro.liveLink !== '#' ? (
                    <div className="grid grid-cols-2 gap-3">
                      <a 
                        href={pro.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-black py-3 rounded-xl transition text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/10"
                      >
                        <span>Open Live</span> <Icon name="ExternalLink" className="w-3.5 h-3.5" />
                      </a>
                      <button 
                        onClick={() => setPreviewUrl(pro.liveLink)}
                        className="bg-neutral-900 border border-neutral-700 hover:border-cyan-400 text-slate-200 font-bold py-3 rounded-xl transition text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                      >
                        <span>Preview</span> <Icon name="Eye" className="w-3.5 h-3.5 text-cyan-400" />
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleWhatsAppContact(`Hello Sunil! Nenu "${pro.title}" website demo kosam inquiry chestunnanu.`)}
                      className="w-full bg-neutral-900 border border-neutral-700 hover:border-cyan-400 text-slate-200 font-bold py-3 rounded-xl transition text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <span>Request Live Demo</span> <Icon name="MessageCircle" className="w-4 h-4 text-cyan-400" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION (POWERFUL & PROFESSIONAL) */}
      <section id="why-choose-us" className="py-24 bg-neutral-950 border-t border-neutral-800 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-black uppercase tracking-widest block mb-2">Unmatched Value For Local Businesses</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Why Businesses Choose Us</h2>
            <p className="text-slate-400 text-sm mt-4">We don't just build pretty pages; we deliver complete digital engines built to get you more calls and customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Zap',
                title: 'Sub-Second Speed',
                desc: 'Built with React and Vite for blazing-fast mobile performance on any mobile network across India.'
              },
              {
                icon: 'MessageSquare',
                title: 'Instant WhatsApp Leads',
                desc: 'Customers can place orders, check dates, and book services directly to your WhatsApp with one tap.'
              },
              {
                icon: 'ShieldCheck',
                title: 'Zero Monthly Maintenance',
                desc: 'Deployed on enterprise-grade cloud servers with free SSL certificates and no hidden monthly fees.'
              },
              {
                icon: 'Smartphone',
                title: 'Mobile-First Perfection',
                desc: 'Optimized layout to ensure 100% smooth user experience on smartphones, tablets, and laptops.'
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl hover:border-cyan-500/40 transition group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition">
                  <Icon name={feature.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Box inside Why Choose Us */}
          <div className="mt-16 bg-gradient-to-r from-neutral-900 via-neutral-900 to-cyan-950/40 border border-neutral-800 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to take your business online?</h3>
              <p className="text-slate-400 text-xs md:text-sm">Get a modern custom website built for your studio, restaurant, or business in just 3 days.</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={handleDirectCall}
                className="bg-neutral-800 border border-neutral-700 hover:border-cyan-400 text-white font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <Icon name="Phone" className="w-4 h-4 text-cyan-400" /> Call Now
              </button>
              <button 
                onClick={() => handleWhatsAppContact('Hello Sunil! Nenu natho website design quote adagadaniki call/message chestunnanu.')}
                className="bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-black px-6 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 w-full md:w-auto shadow-lg shadow-cyan-500/20"
              >
                <Icon name="MessageSquare" className="w-4 h-4" /> WhatsApp Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Preview Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <div className="bg-neutral-900 border border-neutral-800 w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="p-4 bg-neutral-950 border-b border-neutral-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                  <span className="text-xs text-slate-400 font-mono ml-2">{previewUrl}</span>
                </div>
                <button 
                  onClick={() => setPreviewUrl(null)}
                  className="text-slate-400 hover:text-white bg-neutral-900 p-2 rounded-full border border-neutral-800"
                >
                  <Icon name="X" className="w-5 h-5" />
                </button>
              </div>
              <iframe src={previewUrl} title="Live Preview" className="w-full h-full border-none"></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800 py-12 text-center text-slate-500 text-xs">
        <p className="text-white font-bold text-base mb-1">SUNIL DIGITAL WEB SOLUTIONS</p>
        <p className="text-slate-400 text-xs mb-3">Direct Call / WhatsApp: +91 90004 06087</p>
        <p>© 2026 Sunil Digital. All rights reserved. High-Performance Business Websites.</p>
      </footer>

    </div>
  );
}