import { Reveal } from '../atoms/Reveal';

export function AboutTimeline() {
  return (
    <section className="py-24 bg-muted/50 px-6">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">La Evolución de Amara</h2>
          </div>
        </Reveal>
        
        <div className="relative border-l border-border ml-4 md:ml-[50%]">
          {/* Item 1 */}
          <div className="mb-12 relative">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary"></div>
            <div className="ml-8 md:ml-0 md:-left-[calc(50%+2rem)] md:absolute md:text-right md:w-[calc(50%-2rem)] md:pr-12">
              <Reveal>
                <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">1998</span>
                <h3 className="text-2xl font-bold text-foreground mb-2">El Taller Original</h3>
                <p className="text-sm md:text-base text-muted-foreground">Fundación del primer espacio de trabajo enfocado en encargos a medida locales.</p>
              </Reveal>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="mb-12 relative">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary"></div>
            <div className="ml-8 md:ml-12 md:w-[calc(50%-2rem)]">
              <Reveal>
                <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">2010</span>
                <h3 className="text-2xl font-bold text-foreground mb-2">Expansión Sostenible</h3>
                <p className="text-sm md:text-base text-muted-foreground">Transición completa a madera certificada y prácticas de producción cero residuos.</p>
              </Reveal>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="mb-12 relative">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary"></div>
            <div className="ml-8 md:ml-0 md:-left-[calc(50%+2rem)] md:absolute md:text-right md:w-[calc(50%-2rem)] md:pr-12">
              <Reveal>
                <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">2024</span>
                <h3 className="text-2xl font-bold text-foreground mb-2">Amara Muebles Hoy</h3>
                <p className="text-sm md:text-base text-muted-foreground">Presencia internacional, colaboraciones con estudios de diseño de interiores y la misma esencia artesanal.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
