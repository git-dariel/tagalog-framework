type Gawain = (hiling: any, tugon: any) => void;

interface Ruta {
  landas: string;
  metodo: string;
  gawain: Gawain;
}

const mgaRuta: Ruta[] = [];

// Add route
export const idagdagRuta = (metodo: string, landas: string, gawain: Gawain): void => {
  mgaRuta.push({metodo, gawain, landas});
}

// Find route
export const hanapinRuta = (metodo: string, landas: string): Ruta | undefined => {
  return mgaRuta.find((ruta) => ruta.metodo === metodo && ruta.landas === landas);
}