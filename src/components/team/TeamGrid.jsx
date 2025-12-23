import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';

export default function TeamGrid({ members }) {
  // GUARD CLAUSE: Si members no es un array, mostramos un error amigable o nada
  if (!Array.isArray(members)) {
    console.error("TeamGrid: 'members' prop must be an array", members);
    return null;
  }

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
              {/* ... resto del código del componente ... */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-1">{member.name}</h3>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-600 mb-6 line-clamp-4 leading-relaxed">{member.fullBio || member.bio}</p>
                <div className="pt-6 border-t border-slate-100 mt-auto">
                   <button onClick={() => setSelectedMember(member)} className="text-blue-600 font-bold text-sm hover:underline">Read Bio</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ... Modal Logic ... */}
    </section>
  );
}