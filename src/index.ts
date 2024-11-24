import http from "http";
import {hanapinRuta} from "./core/router";
import {patakbuhinMidleware} from "./core/middleware";

export const simulanServer = (port: number): void => {
  const server = http.createServer((req, res) => {
    const hiling = req;
    const tugon = res;

    const napilingRuta = hanapinRuta(req.method || '', req.url || '');

    if(napilingRuta){
      patakbuhinMidleware(hiling, tugon, () => {
        napilingRuta.gawain(hiling, tugon);
      })
    } else {
      res.statusCode = 404;
      res.end("Oops! Route not found.");
    }
  })

  server.listen(port, () => {
    console.log(`Server tumatakbo sa port ${port}`);
  })
}