import { Reveal } from '../atoms/Reveal';

export function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center bg-card">
      <div className="absolute inset-0 w-full h-full bg-stone-900">
        <img
          alt="Taller de artesanía"
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBbW8t-Q6QR4MJVOmwAgqCsPilRBpTBOBGs0GAE7CCa0FpO2gPI8IcqCxeyi7hXZ8xfzlO4U6EA1veyS0_X6pCKWfWtw0e1dWxo-BVqfxzg-AlHnY9U2LdxckocuN0JdHfmBRG9sQNON-sKNU8FpScLEc4oK7g_EHIixFwlPzCmT4QgDaQXQld8FzykDkgBctqjWdcR_FFAF5OPC40koOKAHQyq8osPJj_RVlqCrGSpXVLaYP6sWR1E2WRIvc5R--njQrnldRmDDz2"
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nuestra Historia: Pasión por la Madera
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Forjando espacios atemporales a través de la dedicación artesanal y el respeto por los materiales nobles.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
