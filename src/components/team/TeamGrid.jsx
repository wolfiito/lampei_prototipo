import React, { useState } from 'react';
import { Mail, X, Linkedin } from 'lucide-react';

export default function TeamGrid({ members }) {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
              
              {/* Imagen con efecto Zoom */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 font-serif mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">{member.role}</p>
                </div>

                {/* Bio truncada */}
                <p className="text-slate-600 mb-6 line-clamp-4 leading-relaxed flex-grow">
                  {member.fullBio || member.bio}
                </p>

                {/* Acciones */}
                <div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-auto">
                    <button 
                        onClick={() => setSelectedMember(member)}
                        className="text-slate-900 font-semibold text-sm hover:text-blue-600 transition-colors underline decoration-slate-300 hover:decoration-blue-600 underline-offset-4"
                    >
                        Read Bio
                    </button>

                    {member.email && (
                        <a 
                            href={`mailto:${member.email}`} 
                            className="p-2 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                            title="Send Email"
                        >
                            <Mail size={18} />
                        </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL DETALLE */}
      {selectedMember && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedMember(null)}
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Imagen en Modal (Lateral o Superior) */}
                <div className="w-full md:w-1/3 h-48 md:h-auto relative bg-slate-100">
                    <img 
                        src={selectedMember.image} 
                        alt={selectedMember.name} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Contenido Modal */}
                <div className="w-full md:w-2/3 p-8 md:p-10 relative overflow-y-auto">
                    <button 
                        onClick={() => setSelectedMember(null)}
                        className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <h3 className="text-3xl font-bold text-slate-900 font-serif mb-1">{selectedMember.name}</h3>
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-6">{selectedMember.role}</p>

                    <div className="prose prose-slate text-slate-600 leading-relaxed whitespace-pre-line">
                        {selectedMember.fullBio || selectedMember.bio}
                    </div>

                    {selectedMember.email && (
                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <a href={`mailto:${selectedMember.email}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors">
                                <Mail size={18} />
                                {selectedMember.email}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
      `}</style>
    </section>
  );
}