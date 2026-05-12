import { Reveal } from '../atoms/Reveal';
import { Icon } from '../atoms/Icon';

export function AboutMission() {
  return (
    <section className="py-24 bg-card px-6 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden md:block">
        <img
          alt="Decorative texture"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida/ADBb0ujjrPOIL7yB5AquPZJpoH8ikjofqOoW_WfzcAX6c-xKLuz8jqVS9TNxSS-x5_kc0SjVdfdhFDZjFJfBd1e1DtUQ7hjRFeEJZDL6jfnlfJIwAjv8NrWYQAgn1sv9G5mDibmsp2qPUqIk3iunjIhmJbQU1n8WHey6D0dmJDuD8heDeLj_rvAmrz7yd4Lkqu0FrR0qsw4ZxkBEVMCJwpy4GRZf3hKDjFIiLXvppXaPJCDPCjtt2t9hNmWuduiu"
        />
      </div>
      <div className="max-w-[1200px] mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestra Misión y Valores</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal delay={100}>
            <div className="bg-background p-8 rounded-lg shadow-sm border border-border h-full">
              <span className="text-primary text-4xl mb-6 block">
                <Icon name="check_circle" />
              </span>
              <h3 className="text-xl font-bold text-foreground mb-4">Sustentabilidad</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trabajamos exclusivamente con maderas de origen certificado, garantizando la reforestación y el mínimo impacto ambiental en cada etapa de nuestro proceso.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-background p-8 rounded-lg shadow-sm border border-border h-full">
              <span className="text-primary text-4xl mb-6 block">
                <Icon name="star" />
              </span>
              <h3 className="text-xl font-bold text-foreground mb-4">Artesanía</h3>
              <p className="text-muted-foreground leading-relaxed">
                Preservamos técnicas tradicionales de ebanistería, fusionándolas con precisión moderna para crear ensamblajes que perduran generaciones.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="bg-background p-8 rounded-lg shadow-sm border border-border h-full">
              <span className="text-primary text-4xl mb-6 block">
                <Icon name="favorite" />
              </span>
              <h3 className="text-xl font-bold text-foreground mb-4">Diseño Atemporal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Huimos de las tendencias efímeras. Diseñamos líneas puras y funcionales que aportan calma visual y se adaptan orgánicamente a cualquier espacio.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
