import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-4 bg-slate-800 border-b-2 border-slate-700 text-slate-400 font-semibold uppercase text-sm tracking-wider">Feature</th>
            <th className="p-4 bg-slate-800 border-b-2 border-[#FF6B00] text-[#FF6B00] font-bold text-lg w-1/3">Bitaxe</th>
            <th className="p-4 bg-slate-800 border-b-2 border-slate-700 text-slate-300 font-bold w-1/3">Traditional ASIC (S19)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700 bg-slate-800/50">
          <tr>
            <td className="p-4 font-medium text-slate-300">Noise Level</td>
            <td className="p-4 text-green-400 font-bold">Silent (Whisper quiet)</td>
            <td className="p-4 text-red-400">75dB (Jet Engine)</td>
          </tr>
          <tr>
            <td className="p-4 font-medium text-slate-300">Power Usage</td>
            <td className="p-4 text-green-400 font-bold">~15 Watts</td>
            <td className="p-4 text-red-400">~3000 Watts</td>
          </tr>
          <tr>
            <td className="p-4 font-medium text-slate-300">Form Factor</td>
            <td className="p-4 text-white">Palm-sized</td>
            <td className="p-4 text-slate-400">Industrial Shoebox</td>
          </tr>
          <tr>
            <td className="p-4 font-medium text-slate-300">Price</td>
            <td className="p-4 text-green-400 font-bold">$150 - $200</td>
            <td className="p-4 text-slate-400">$1,000+</td>
          </tr>
          <tr>
            <td className="p-4 font-medium text-slate-300">Decentralization</td>
            <td className="p-4 text-green-400 flex items-center gap-2">
              <Check size={18} /> Open Source
            </td>
            <td className="p-4 text-slate-400 flex items-center gap-2">
              <X size={18} /> Closed Source
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;