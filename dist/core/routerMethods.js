"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.burahin = exports.baguhin = exports.ipadala = exports.kunin = void 0;
const router_1 = require("./router");
// GET Route
const kunin = (landas, gawain) => {
    (0, router_1.idagdagRuta)("GET", landas, gawain);
};
exports.kunin = kunin;
// POST Route
const ipadala = (landas, gawain) => {
    (0, router_1.idagdagRuta)("POST", landas, gawain);
};
exports.ipadala = ipadala;
// PUT Route
const baguhin = (landas, gawain) => {
    (0, router_1.idagdagRuta)("PUT", landas, gawain);
};
exports.baguhin = baguhin;
// Delete Route
const burahin = (landas, gawain) => {
    (0, router_1.idagdagRuta)("DELETE", landas, gawain);
};
exports.burahin = burahin;
