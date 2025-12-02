import React from 'react';
import ComparisonTable from './ComparisonTable';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">David vs. Goliath</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Why home miners are switching from industrial hardware to the Bitaxe.</p>
        </div>
        <div className="max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden">
          <ComparisonTable />
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;