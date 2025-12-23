import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';

export default function TestimonialsSlider({ testimonials }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 }
      }}
      className="pb-16"
    >
      {testimonials.map((t, index) => (
        <SwiperSlide key={index}>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full flex flex-col shadow-sm group">
            <Quote className="text-blue-600/20 w-12 h-12 mb-4 group-hover:text-blue-600/40 transition-colors" />
            
            <p className="text-slate-700 italic leading-relaxed mb-8 flex-grow">
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4 border-t border-slate-200/60 pt-6">
              {/* Contenedor de Imagen o Inicial */}
              <div className="w-14 h-14 rounded-full overflow-hidden bg-blue-100 border-2 border-white shadow-md shrink-0">
                {t.image ? (
                  <img 
                    src={t.image} 
                    alt={t.author} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-bold text-blue-600 text-xl">
                    {t.author[0]}
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-bold text-slate-900 leading-tight">{t.author}</h4>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{t.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}