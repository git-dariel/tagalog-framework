import {simulanServer} from "../index";
import {kunin, ipadala, baguhin, burahin} from "../core/routerMethods";
import {idagdagMiddleware} from "../core/middleware";
import {bodyParser} from "../utils/bodyParser";

// Add Middleware
idagdagMiddleware(bodyParser);

kunin("/", (_hiling, tugon) => {
  tugon.writeHead(200, {"Content-Type": "application/json"});
  tugon.end(JSON.stringify({mensahe: "Welcome sa Tagalog Framework"}));
})

// GET Route
kunin("/bahay", (_hiling, tugon) => {
  tugon.writeHead(200, {"Content-Type": "text/plain"});
  tugon.end("Welcome sa bahay!")
})

// POST Route
ipadala("/ipadala", (hiling, tugon) => {
  tugon.writeHead(200, {"Content-Type": "application/json"});
  tugon.end(JSON.stringify({mensahe: "Data received", data: hiling.body}))
})

// PUT Route
baguhin("/baguhin", (hiling, tugon) => {
  tugon.writeHead(200, {"Content-Type": "application/json"});
  tugon.end(JSON.stringify({mensahe: "Data updated", data: hiling.body}))
})

// DELETE Route
burahin("/burahin", (hiling, tugon) => {
  tugon.writeHead(200, {"Content-Type": "text/plain"});
  tugon.end("Data Deleted")
})

// Start Server
simulanServer(3000);