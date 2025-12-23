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
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 }
      }}
      className="pb-16"
    >
      {testimonials.map((t, index) => (
        <SwiperSlide key={index}>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full flex flex-col shadow-sm">
            <Quote className="text-blue-600/20 w-12 h-12 mb-4" />
            <p className="text-slate-700 italic leading-relaxed mb-8 flex-grow">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                {t.author[0]}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{t.author}</h4>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}