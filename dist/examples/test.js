"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const routerMethods_1 = require("../core/routerMethods");
const middleware_1 = require("../core/middleware");
const bodyParser_1 = require("../utils/bodyParser");
// Add Middleware
(0, middleware_1.idagdagMiddleware)(bodyParser_1.bodyParser);
// In Memory Storage
let dataStore = [];
// Server Check
(0, routerMethods_1.kunin)("/", (hiling, tugon) => {
    tugon.writeHead(200, { "Content-Type": "application/json" });
    tugon.end(JSON.stringify({ mensahe: "Welcome sa Tagalog Framework" }));
});
// GET - Retrieve all data
(0, routerMethods_1.kunin)("/user/get/all", (hiling, tugon) => {
    tugon.writeHead(200, { "Content-Type": "application/json" });
    tugon.end(JSON.stringify({ mensahe: "All data", data: dataStore }));
});
// POST - Create new data
(0, routerMethods_1.ipadala)("/user/create", (hiling, tugon) => {
    const bagongData = hiling.body;
    if (!bagongData || Object.keys(bagongData).length === 0) {
        tugon.writeHead(400, { "Content-Type": "application/json" });
        return tugon.end(JSON.stringify({ mensahe: "Invalid Data" }));
    }
    console.log("Incoming Data:", bagongData);
    console.log("Data Store:", dataStore);
    // Check for duplicates
    const isDuplicate = dataStore.some((item) => { var _a, _b, _c, _d; return ((_a = item.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === ((_b = bagongData.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()) && ((_c = item.role) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === ((_d = bagongData.role) === null || _d === void 0 ? void 0 : _d.toLowerCase()); });
    if (isDuplicate) {
        tugon.writeHead(400, { "Content-Type": "application/json" });
        return tugon.end(JSON.stringify({ mensahe: "Duplicate data found. The record already exists" }));
    }
    dataStore.push(bagongData);
    tugon.writeHead(200, { "Content-Type": "application/json" });
    tugon.end(JSON.stringify({ mensahe: "Data created", data: bagongData }));
});
// PUT - Update data by index
(0, routerMethods_1.baguhin)("/user/update", (hiling, tugon) => {
    const { index, bagongData } = hiling.body;
    if (index === undefined || !bagongData) {
        tugon.writeHead(400, { "Content-Type": "application/json" });
        return tugon.end(JSON.stringify({ mensahe: "Invalid request. Provide index and bagongData." }));
    }
    if (index < 0 || index >= dataStore.length) {
        tugon.writeHead(200, { "Content-Type": "application/json" });
        return tugon.end(JSON.stringify({ mensahe: "Data not found" }));
    }
    dataStore[index] = bagongData;
    tugon.writeHead(200, { "Content-Type": "application/json" });
    tugon.end(JSON.stringify({ mensahe: "Data updated", data: bagongData }));
});
// DELETE - Delete data by index
(0, routerMethods_1.burahin)("/user/delete", (hiling, tugon) => {
    const { index, } = hiling.body;
    if (index === undefined) {
        tugon.writeHead(400, { "Content-Type": "application/json" });
        return tugon.end(JSON.stringify({ mensahe: "Invalid request. Provide index and bagongData." }));
    }
    if (index < 0 || index >= dataStore.length) {
        tugon.writeHead(200, { "Content-Type": "application/json" });
        return tugon.end(JSON.stringify({ mensahe: "Data not found" }));
    }
    const deletedData = dataStore.splice(index, 1);
    tugon.writeHead(200, { "Content-Type": "application/json" });
    tugon.end(JSON.stringify({ mensahe: "Data updated", data: deletedData }));
});
(0, index_1.simulanServer)(3000);
