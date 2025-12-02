import React, { useState } from 'react';

const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#FF6B00] to-orange-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't Miss the Next Block</h2>
        <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
          Join 5,000+ home miners. Get the ultimate setup guide, efficiency tweaks, and alerts when Bitaxe batches drop.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 border border-white/20 p-6 rounded-lg inline-block animate-fade-in">
            <p className="text-white font-bold text-xl">🎉 Welcome to the resistance! Check your inbox soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-orange-900/20 shadow-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-xl uppercase tracking-wider"
            >
              Get Guide
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-200 mt-2 font-semibold">Please enter a valid email address.</p>}
        <p className="text-orange-200/60 text-xs mt-4">We respect your privacy. No spam, just hash.</p>
      </div>
    </section>
  );
};

export default EmailCapture;