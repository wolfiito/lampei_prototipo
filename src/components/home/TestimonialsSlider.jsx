import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote, X } from 'lucide-react'; // Importamos X para cerrar el modal
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSlider({ data }) {
  const testimonials = data || [];
  
  // Estado para saber qué testimonio está abierto (null = ninguno)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <div className="py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12 [&_.swiper-wrapper]:items-stretch"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col relative group hover:shadow-xl transition-shadow duration-300">
              
              <div className="absolute top-6 right-8 text-blue-50 group-hover:text-blue-100 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="relative z-10 flex-grow">
                {/* Texto truncado a 6 líneas */}
                <p className="text-slate-600 italic mb-2 leading-relaxed text-lg line-clamp-6">
                  "{item.quote}"
                </p>
                
                {/* Botón Leer Más (Solo aparece si el texto es largo, o siempre para consistencia) */}
                <button 
                    onClick={() => setSelectedTestimonial(item)}
                    className="text-blue-600 font-bold text-sm hover:underline focus:outline-none flex items-center gap-1 mt-2"
                >
                    Read more
                </button>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* MODAL / POPUP PARA LEER COMPLETO */}
      {selectedTestimonial && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedTestimonial(null)} // Cierra al hacer click fuera
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click dentro
            >
                {/* Botón Cerrar */}
                <button 
                    onClick={() => setSelectedTestimonial(null)}
                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Contenido Completo */}
                <div className="flex flex-col items-center text-center mb-8">
                    <Quote size={40} className="text-blue-600 mb-4 fill-current opacity-20" />
                    <img 
                        src={selectedTestimonial.image} 
                        alt={selectedTestimonial.author} 
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-slate-900 font-serif">{selectedTestimonial.author}</h3>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        {selectedTestimonial.role} • {selectedTestimonial.location}
                    </p>
                </div>

                <div className="prose prose-lg mx-auto text-slate-600 italic text-center">
                    <p>"{selectedTestimonial.quote}"</p>
                </div>
            </div>
        </div>
      )}

      <style>{`
        .swiper-pagination-bullet-active {
          background-color: #2563eb !important;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}