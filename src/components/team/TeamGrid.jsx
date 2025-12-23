import React from 'react';
import { Mail, Globe, Instagram } from 'lucide-react';

export default function TeamGrid({ members }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {members.map((member, index) => (
        <div key={index} className="group relative">
          {/* Contenedor de Imagen con Efecto */}
          <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] mb-6 shadow-2xl shadow-slate-200">
            <img 
              src={member.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'} 
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
            
            {/* Overlay de Redes Sociales al Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 gap-4">
              <a href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-600 transition-all">
                <Mail size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-600 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Información del Miembro */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-1 group-hover:text-blue-600 transition-colors">
              {member.name}
            </h3>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-3">
              {member.role}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[250px] mx-auto">
              {member.bio || "Dedicated to serving the nations through biblical leadership."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}