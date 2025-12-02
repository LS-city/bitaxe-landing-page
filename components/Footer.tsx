import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800 text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
             <span className="text-2xl font-black text-white tracking-tighter">BIT<span className="text-[#FF6B00]">AXE</span></span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bitaxe Promo. Not affiliated with Open Source Hardware manufacturers directly.
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8">
            <h4 className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-2">Risk Disclaimer</h4>
            <p className="text-slate-600 text-xs leading-relaxed max-w-4xl">
                Mining cryptocurrencies involves financial risk. The Bitaxe is a "solo miner" or "lottery miner." This means you are extremely unlikely to mine a block. Income is not guaranteed. You may never earn any Bitcoin. This device is sold primarily as an educational tool and a way to support the decentralization of the Bitcoin network. Past performance is not indicative of future results. Do not spend money you cannot afford to lose.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;