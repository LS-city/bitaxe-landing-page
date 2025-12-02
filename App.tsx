import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import ComparisonSection from './components/ComparisonSection';
import EmailCapture from './components/EmailCapture';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Button from './components/Button';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-[#FF6B00] selection:text-white">
      
      {/* Sticky Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">
            BIT<span className="text-[#FF6B00]">AXE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-semibold hover:text-[#FF6B00] transition-colors">How It Works</a>
            <a href="#specs" className="text-sm font-semibold hover:text-[#FF6B00] transition-colors">Specs</a>
            <Button text="Get Yours" className="py-2 px-6 text-sm" />
          </div>

          <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
                  {mobileMenuOpen ? <X /> : <Menu />}
              </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-slate-700 absolute w-full left-0 px-4 py-6 shadow-xl flex flex-col gap-4">
                 <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold block py-2">How It Works</a>
                 <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold block py-2">Specs</a>
                 <Button text="Get Yours Now" fullWidth />
            </div>
        )}
      </nav>

      <main>
        <Hero />
        <ProblemSolution />
        <div id="specs"><ComparisonSection /></div>
        <HowItWorks />
        <EmailCapture />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;