"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyParser = void 0;
const bodyParser = (hiling, tugon, next) => {
    let rawData = '';
    hiling.on('data', (chunk) => {
        rawData += chunk;
    });
    hiling.on('end', () => {
        try {
            hiling.body = JSON.parse(rawData);
        }
        catch (_a) {
            hiling.body = {};
        }
        next();
    });
};
exports.bodyParser = bodyParser;
