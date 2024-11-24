"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patakbuhinMidleware = exports.idagdagMiddleware = void 0;
const mgaMiddleware = [];
// Add Middleware
const idagdagMiddleware = (middleware) => {
    mgaMiddleware.push(middleware);
};
exports.idagdagMiddleware = idagdagMiddleware;
// Run middleware data
const patakbuhinMidleware = (hiling, tugon, taposNa) => {
    let index = -1;
    const next = () => {
        index++;
        if (index < mgaMiddleware.length) {
            mgaMiddleware[index](hiling, tugon, next);
        }
        else {
            taposNa();
        }
    };
    next();
};
exports.patakbuhinMidleware = patakbuhinMidleware;
