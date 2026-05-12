import { Reveal } from '../atoms/Reveal';

export function AboutSuccessCases() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto">
      <Reveal>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Casos de Éxito</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4">
            Espacios donde nuestras piezas se integran para crear atmósferas de calma y sofisticación.
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        <div className="md:col-span-2 md:row-span-2 relative rounded-lg overflow-hidden group bg-card">
          <img
            alt="Proyecto Residencial"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2uEMr2k4xrXmZRSjoF4LZyfL6XxrcYIlML1Aj-byou8LbWAE_c6pbyZqwHVmeV0ASczobbHEMtCT7EW3bswe7mjtL3MrIp1jnNb5UasJ8HNLopqU76bIrf2ZEmUgTcVfONvjquvDzkl7SosofyZLo0sUum54SNwzN8XyOuAN3yY2jvFcwk5-saUSulwvZQqn48MueMVcv5z_-jsT5YoxSoERpD5dV7Euz_8nlumLNXi_4lk3krnkIxyPmIFVN8ni2BbDknDO95u1t"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <h3 className="font-bold text-white text-2xl">Residencia Valles, Madrid</h3>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden group bg-card">
          <img
            alt="Proyecto Hotel Boutique"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNFLmUnNHysUmFlt61v1_x1GeqfvnzkXpDmBsFkeWq_JS5jc8jOWcp8iSTJ6FoKGqPGRKYiOI_SkC2GXmz__rfTi8i5jBxT5-pyLagDFPIKPd_UAAU6YOm1SNEzscy3v2fIAlmbVtrumfGHpT4-7UJxx7DXWXRWzPofW0a2IhCyS7b07P6g49RAvLJO1Mt90RD67T90oXAJVq5bbDaCkAAonTndU-R6HmYn8nptRve-T4oWxHxt5iif2BjXCH_hZoLK6kgmpVUvUny"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <h3 className="font-bold text-white text-lg">Hotel Boutique, Tulum</h3>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden group bg-card">
          <img
            alt="Proyecto Estudio"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo5vhceogWTVCEzi1gUelA9PpO0oxdWGnCDYDVAuILJV4zEZv7z0C88TDiZIWHqNq11Sojgm7eiAhAHuKE7BS6Us3DOXT7zEswCNaBuq5vtl5ffaM15yZNyg0cputzX7Zkwlj9-4ljNgWCGpBMtu3DU42LgzfN6YlW2wU1AAtJ1iFT-ArgYaPJmlPsAyDgGdMmRvEXxOHBe5bZ17WKYMe-GD6inKsJxgHN05tQ1GVcwuvMaCn08rksGj6I2_dya7zeELz8oiNJ52Aa"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <h3 className="font-bold text-white text-lg">Estudio Creativo, BCN</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
