"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const routerMethods_1 = require("../core/routerMethods");
const middleware_1 = require("../core/middleware");
const bodyParser_1 = require("../utils/bodyParser");
// Add Middleware
(0, middleware_1.idagdagMiddleware)(bodyParser_1.bodyParser);
(0, routerMethods_1.kunin)("/", (_hiling, tugon) => {
    tugon.writeHead(200, { "Content-Type": "application/json" });
    tugon.end(JSON.stringify({ mensahe: "Welcome sa Tagalog Framework" }));
});
// GET Route
(0, routerMethods_1.kunin)("/bahay", (_hiling, tugon) => {
    tugon.writeHead(200, { "Content-Type": "text/plain" });
    tugon.end("Welcome sa bahay!");
});
// POST Route
(0, routerMethods_1.ipadala)("/ipadala", (hiling, tugon) => {
    tugon.writeHead(200, { "Content-Type": "application/json" });
    tugon.end(JSON.stringify({ mensahe: "Data received", data: hiling.body }));
});
// PUT Route
(0, routerMethods_1.baguhin)("/baguhin", (hiling, tugon) => {
    tugon.writeHead(200, { "Content-Type": "application/json" });
    tugon.end(JSON.stringify({ mensahe: "Data updated", data: hiling.body }));
});
// DELETE Route
(0, routerMethods_1.burahin)("/burahin", (hiling, tugon) => {
    tugon.writeHead(200, { "Content-Type": "text/plain" });
    tugon.end("Data Deleted");
});
// Start Server
(0, index_1.simulanServer)(3000);
