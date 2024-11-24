"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulanServer = void 0;
const http_1 = __importDefault(require("http"));
const router_1 = require("./core/router");
const middleware_1 = require("./core/middleware");
const simulanServer = (port) => {
    const server = http_1.default.createServer((req, res) => {
        const hiling = req;
        const tugon = res;
        const napilingRuta = (0, router_1.hanapinRuta)(req.method || '', req.url || '');
        if (napilingRuta) {
            (0, middleware_1.patakbuhinMidleware)(hiling, tugon, () => {
                napilingRuta.gawain(hiling, tugon);
            });
        }
        else {
            res.statusCode = 404;
            res.end("Oops! Route not found.");
        }
    });
    server.listen(port, () => {
        console.log(`Server tumatakbo sa port ${port}`);
    });
};
exports.simulanServer = simulanServer;
