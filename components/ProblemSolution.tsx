import React from 'react';
import { FEATURES } from '../constants';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* The Problem */}
        <div className="flex flex-wrap items-center mb-24">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Problem: <span className="text-red-500">Industrial Mining is Broken</span>
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Traditional Bitcoin miners are loud, hot, and expensive power hogs. They sound like jet engines (75dB+), require specialized 240V wiring, and generate enough heat to warm a warehouse.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              For the average hobbyist or Bitcoin maximalist, running an S19 or Whatsminer at home is simply impossible. The network has become centralized in massive data centers.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
             <div className="relative rounded-lg overflow-hidden shadow-2xl border border-red-500/20">
                 {/* Placeholder for loud miner image */}
                <div className="bg-slate-800 h-64 flex items-center justify-center flex-col">
                     <span className="text-6xl mb-4">🔊 🔥 💸</span>
                     <span className="text-slate-500 font-mono">WARNING: HIGH NOISE</span>
                </div>
             </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="flex flex-wrap items-center flex-row-reverse">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Solution: <span className="text-[#FF6B00]">Bitaxe Freedom</span>
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Bitaxe changes the game. It is a purpose-built, open-source Bitcoin ASIC miner that runs on just 15 Watts. It's smaller than a smartphone and completely silent.
            </p>
            <ul className="space-y-4 mb-8">
                {FEATURES.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                        <div className="ml-4">
                            <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                            <p className="text-slate-400">{feature.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
           <div className="w-full md:w-1/2 px-4">
             <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-orange-500/20 border border-[#FF6B00]/30">
                 {/* Placeholder for Bitaxe image */}
                 <img src="https://picsum.photos/600/400?grayscale" alt="Bitaxe Miner" className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity" />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                    <span className="text-[#FF6B00] font-bold tracking-wider">THE REVOLUTION IS SILENT</span>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;