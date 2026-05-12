import { Reveal } from '../atoms/Reveal';

export function AboutOrigin() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative h-[600px] rounded-lg overflow-hidden bg-card">
          <img
            alt="Textura de madera natural"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/ADBb0uj4Pdj2uYFZiDGz2D4NKBTO3V9A7gKjWcIdtzwGb0YqAo7LrbOuWfcgYh85wqVIGdyiG11yNl4JQ622UVWCXfM4LbxB4clNohh5oxyxDWXtWNdYy2eF01Vs5DxRm6hWoWlTU6pA8ZR9goHCnef8Eg6awDCHaFASkirgX8fgnds8o-hu6B6iWfWCOkTZMTkD6rckCJJslWwsmplzhQrovsj4kTojxtNrxPhmA0U7eMbp1kRAPA2oEBxd33a9Qp9Q0JnK9A-nn296QEE"
          />
        </div>
        <div className="md:col-span-7 space-y-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestros Comienzos</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Amara Muebles nació en un pequeño taller familiar, impulsado por una profunda reverencia hacia la naturaleza y sus texturas. Lo que comenzó como una búsqueda personal por crear piezas duraderas y con significado, se transformó rápidamente en un compromiso inquebrantable con la calidad artesanal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Desde el primer día, nuestra filosofía ha sido simple: dejar que la madera hable por sí misma. Seleccionamos cuidadosamente roble, nogal y teca de fuentes sostenibles, asegurando que cada corte, cada lijado y cada ensamblaje honre la historia del árbol del que proviene. No hacemos simplemente muebles; esculpimos fragmentos de naturaleza para integrarlos armoniosamente en la vida cotidiana.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
