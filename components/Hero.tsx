import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2940&auto=format&fit=crop')] opacity-10"></div>
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-[#FF6B00] uppercase bg-[#FF6B00]/10 rounded-full border border-[#FF6B00]/20">
              The Future of Home Mining
            </div>
            <h1 className="text-white font-black text-5xl md:text-7xl leading-tight mb-8">
              Mine Bitcoin at Home. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-yellow-500">
                Silently.
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop burning money on loud, industrial ASICs. The <strong>Bitaxe</strong> is the world's first open-source, ultra-low power ASIC miner designed specifically for your desk.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button text="Get Your Bitaxe Now" />
              <Button text="Learn How It Works" variant="secondary" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <div className="mt-12 flex justify-center space-x-8 text-slate-500 text-sm font-semibold uppercase tracking-wider">
              <span>Open Source</span>
              <span>•</span>
              <span>WiFi Enabled</span>
              <span>•</span>
              <span>Standalone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;