import { Reveal } from '../atoms/Reveal';
import { Button } from '../atoms/Button';

export function AboutCTA() {
  const whatsappUrl = 'https://wa.me/59160000000?text=' + encodeURIComponent('Hola, me gustaría agendar una visita al showroom para conocer más sobre sus muebles.');
  
  return (
    <section className="py-24 px-6 text-center max-w-3xl mx-auto">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Lleva la naturaleza a tu hogar</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Descubre cómo nuestras piezas pueden transformar tu espacio en un refugio de serenidad y estilo.
        </p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
          <Button variant="primary" className="px-8 py-4">
            Visitar Showroom
          </Button>
        </a>
      </Reveal>
    </section>
  );
}
