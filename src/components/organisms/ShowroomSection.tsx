import { useState } from 'react';
import { Reveal } from '../atoms/Reveal';
import { Lightbox } from '../atoms/Lightbox';

const photos = [
  { src: '/Showcase/LivingRoom.webp', alt: 'Living room amoblado por Amara Muebles' },
  { src: '/Showcase/MueblesDeCocina.webp', alt: 'Muebles de cocina a medida' },
  { src: '/Showcase/MueblesDeTv.webp', alt: 'Mueble de TV artesanal' },
  { src: '/Showcase/Bufetera.webp', alt: 'Bufetera de madera maciza' },
  { src: '/Showcase/Vitrina.webp', alt: 'Vitrina con detalles artesanales' },
  { src: '/Showcase/MueblesDeCocina2.webp', alt: 'Cocina integral en madera' },
  { src: '/Showcase/MueblesDeCocina3.webp', alt: 'Muebles de cocina personalizados' },
  { src: '/Showcase/DetallesDecorativos.webp', alt: 'Detalles decorativos tallados a mano' },
  { src: '/Showcase/MueblesDeCocina4.webp', alt: 'Mobiliario de cocina completo' },
];

export function ShowroomSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-6">

        <Reveal className="mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-cx-rolling-stone mb-3 block">
            Showroom
          </span>
          <h2
            className="font-semibold text-foreground"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
          >
            Proyectos Entregados
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground mt-4 max-w-lg">
            Cada pieza que fabricamos termina en un hogar real. Estos son algunos de
            los proyectos que hemos entregado a nuestros clientes.
          </p>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 80} className="break-inside-avoid">
              <div
                className="overflow-hidden group cursor-pointer"
                onClick={() => setLightbox(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
