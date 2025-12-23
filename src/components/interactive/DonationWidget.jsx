import React, { useState } from 'react';
import { Heart, Globe, ShieldCheck } from 'lucide-react';

const amounts = [25, 50, 100, 250, 500];

export default function DonationWidget() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const handleDonation = () => {
    // Tithe.ly usa una clase global o un método para abrir el modal
    // Configuramos el enlace con tu formId específico
    const tithelyUrl = `https://give.tithe.ly/?formId=cfc0b5b7-6865-11ee-90fc-1260ab546d11&amount=${customAmount || selectedAmount}`;
    
    // Abrimos en una ventana emergente controlada o usamos su método .open()
    window.open(tithelyUrl, 'TithelyDonate', 'width=600,height=700');
  };
  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 max-w-2xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="bg-blue-50 p-4 rounded-2xl">
          <Heart className="w-8 h-8 text-blue-600 fill-blue-600" />
        </div>
      </div>

      <h3 className="text-3xl font-bold text-center text-slate-900 mb-2 font-serif">Make a Difference</h3>
      <p className="text-slate-500 text-center mb-10">Your support fuels church planting and leadership training worldwide.</p>

      {/* Selector de Frecuencia */}
      <div className="flex p-1 bg-slate-100 rounded-full mb-8">
        {['one-time', 'monthly'].map((type) => (
          <button
            key={type}
            onClick={() => setFrequency(type)}
            className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${
              frequency === type ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {type === 'one-time' ? 'Give Once' : 'Give Monthly'}
          </button>
        ))}
      </div>

      {/* Grid de Montos */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
            className={`py-4 rounded-2xl border-2 font-bold transition-all ${
              selectedAmount === amount && !customAmount 
              ? 'border-blue-600 bg-blue-50 text-blue-600' 
              : 'border-slate-100 hover:border-blue-200 text-slate-600'
            }`}
          >
            ${amount}
          </button>
        ))}
        <div className="relative col-span-3">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
          <input
            type="number"
            placeholder="Custom Amount"
            value={customAmount}
            onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0); }}
            className="w-full pl-8 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-600 outline-none transition-all font-bold"
          />
        </div>
      </div>

      <button 
      onClick={handleDonation}
      className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 transition-all transform hover:scale-[1.02]"
    >
      Continue to Secure Donation
    </button>

      <div className="flex items-center justify-center gap-6 text-slate-400">
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure SSL
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Globe className="w-4 h-4 text-blue-400" /> International Impact
        </div>
      </div>
    </div>
  );
}