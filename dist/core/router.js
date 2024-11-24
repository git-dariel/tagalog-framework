"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hanapinRuta = exports.idagdagRuta = void 0;
const mgaRuta = [];
// Add route
const idagdagRuta = (metodo, landas, gawain) => {
    mgaRuta.push({ metodo, gawain, landas });
};
exports.idagdagRuta = idagdagRuta;
// Find route
const hanapinRuta = (metodo, landas) => {
    return mgaRuta.find((ruta) => ruta.metodo === metodo && ruta.landas === landas);
};
exports.hanapinRuta = hanapinRuta;
