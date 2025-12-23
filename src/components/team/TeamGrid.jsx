import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';

export default function TeamGrid({ members }) {
  // Validación de seguridad para evitar errores de renderizado
  if (!members || !Array.isArray(members)) {
    return (
      <div className="text-center py-20 text-slate-400">
        <p>No team data available at the moment.</p>
      </div>
    );
  }

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
              
              {/* Vista previa con imagen en la grid principal */}
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
                
                {/* Biografía corta */}
                <p className="text-slate-600 mb-6 line-clamp-4 leading-relaxed">
                   {member.fullBio || member.bio}
                </p>

                <div className="pt-6 border-t border-slate-100 mt-auto">
                   <button 
                     onClick={() => setSelectedMember(member)} 
                     className="text-blue-600 font-bold text-sm hover:underline"
                   >
                     Read Bio
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DE BIOGRAFÍA (Sin imagen, solo información) */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Contenedor de información a pantalla completa en el modal */}
            <div className="p-8 md:p-12 relative overflow-y-auto max-h-[85vh]">
              <button 
                onClick={() => setSelectedMember(null)} 
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h3 className="text-4xl font-bold text-slate-900 font-serif mb-2">{selectedMember.name}</h3>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">{selectedMember.role}</p>
              </div>

              {/* Texto de biografía detallada */}
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg whitespace-pre-line border-t border-slate-100 pt-8">
                {selectedMember.fullBio || selectedMember.bio}
              </div>

              {/* Contacto si está disponible */}
              {selectedMember.email && (
                <div className="mt-10 pt-6 border-t border-slate-100">
                  <a 
                    href={`mailto:${selectedMember.email}`} 
                    className="inline-flex items-center gap-3 text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    <Mail size={20} className="text-blue-600" />
                    {selectedMember.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}