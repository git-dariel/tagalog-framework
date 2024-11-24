import {idagdagRuta} from "./router";

// GET Route
export const kunin = (landas: any, gawain: (hiling: any, tugon: any) => void): void => {
  idagdagRuta("GET", landas, gawain);
}

// POST Route
export  const ipadala = (landas: any, gawain: (hiling: any, tugon: any) => void): void => {
  idagdagRuta("POST", landas, gawain);
}

// PUT Route
export  const baguhin = (landas: any, gawain: (hiling: any, tugon: any) => void): void => {
  idagdagRuta("PUT", landas, gawain);
}

// Delete Route
export  const burahin = (landas: any, gawain: (hiling: any, tugon: any) => void): void => {
  idagdagRuta("DELETE", landas, gawain);
}