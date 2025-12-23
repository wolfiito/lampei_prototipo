import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function VideoPlayer({ id, title, poster }) {
  return (
    <div className="w-full h-full rounded-none md:rounded-l-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
        <LiteYouTubeEmbed 
            id={id}
            title={title}
            poster="maxresdefault" // Usa la mejor calidad de miniatura
            webp // Usa formato webp para velocidad
            // Opcional: Si quieres usar tu propia imagen de portada en vez de la de youtube:
            thumbnail={poster} 
        />
    </div>
  );
}