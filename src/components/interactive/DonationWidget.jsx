import React, { useState } from 'react';
import { Heart, CreditCard } from 'lucide-react';

export default function DonationWidget() {
  const [amount, setAmount] = useState(50);
  const presets = [10, 25, 50, 100, 200];

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg mx-auto border border-slate-100">
      <div className="flex items-center gap-3 mb-6 text-blue-600">
        <Heart className="fill-current" />
        <h3 className="text-2xl font-bold text-slate-900 font-serif">Siembra una semilla</h3>
      </div>
      
      <p className="text-slate-600 mb-6">Tu contribución nos ayuda a llevar comida, recursos y el mensaje a quienes más lo necesitan.</p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {presets.map((val) => (
          <button
            key={val}
            onClick={() => setAmount(val)}
            className={`py-3 px-4 rounded-xl font-semibold transition-all ${
              amount === val 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105' 
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ${val}
          </button>
        ))}
        <input 
            type="number" 
            placeholder="Otro"
            className="col-span-1 py-3 px-4 rounded-xl bg-slate-50 border border-slate-200 text-center focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <div className="bg-slate-50 p-4 rounded-xl mb-6 flex justify-between items-center border border-slate-200">
        <span className="text-slate-500">Total a donar:</span>
        <span className="text-3xl font-bold text-slate-900">${amount}</span>
      </div>

      <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2 group">
        <CreditCard className="w-5 h-5 group-hover:scale-110 transition" />
        Procesar Donación Segura
      </button>
      
      <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
        🔒 SSL Encriptado & Seguro
      </p>
    </div>
  );
}