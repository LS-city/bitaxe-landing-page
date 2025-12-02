import React from 'react';
import Button from './Button';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Mining in Minutes</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">No coding required. If you can connect a phone to WiFi, you can set up a Bitaxe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-[#FF6B00] transition-colors relative group">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-slate-800">1</div>
            <h3 className="text-xl font-bold text-white mt-6 mb-4">Plug & Connect</h3>
            <p className="text-slate-400">Power up your Bitaxe using a standard 5V/4A power supply. Connect to the 'Bitaxe' WiFi hotspot on your phone.</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-[#FF6B00] transition-colors relative group">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-slate-800">2</div>
            <h3 className="text-xl font-bold text-white mt-6 mb-4">Configure Pool</h3>
            <p className="text-slate-400">Enter your home WiFi credentials and your Bitcoin address. Point it to a solo pool like <em>public-pool.io</em> or <em>ckpool</em>.</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-[#FF6B00] transition-colors relative group">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-slate-800">3</div>
            <h3 className="text-xl font-bold text-white mt-6 mb-4">Run & Forget</h3>
            <p className="text-slate-400">The Bitaxe will restart and begin hashing immediately. Monitor your hashrate on the built-in screen or web dashboard.</p>
          </div>
        </div>

        <Button text="Start Mining Today" />
      </div>
    </section>
  );
};

export default HowItWorks;