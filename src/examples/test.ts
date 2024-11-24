import {simulanServer} from "../index";
import {kunin, baguhin, ipadala, burahin} from "../core/routerMethods";
import {idagdagMiddleware} from "../core/middleware";
import {bodyParser} from "../utils/bodyParser";

// Add Middleware
idagdagMiddleware(bodyParser);

// In Memory Storage
let dataStore: any[] = [];

// Server Check
kunin("/", (hiling, tugon) => {
  tugon.writeHead(200, {"Content-Type": "application/json"});
  tugon.end(JSON.stringify({mensahe: "Welcome sa Tagalog Framework"}));
})

// GET - Retrieve all data
kunin("/user/get/all", (hiling, tugon) => {
  tugon.writeHead(200, {"Content-Type": "application/json"});
  tugon.end(JSON.stringify({mensahe: "All data", data: dataStore}));
})

// POST - Create new data
ipadala("/user/create", (hiling, tugon) => {
  const bagongData = hiling.body;

  if(!bagongData || Object.keys(bagongData).length === 0) {
    tugon.writeHead(400, {"Content-Type": "application/json"});
    return tugon.end(JSON.stringify({mensahe: "Invalid Data"}));
  }

  console.log("Incoming Data:", bagongData);
  console.log("Data Store:", dataStore);

  // Check for duplicates
  const isDuplicate = dataStore.some(
    (item) => item.name?.toLowerCase() === bagongData.name?.toLowerCase() && item.role?.toLowerCase() === bagongData.role?.toLowerCase()
  );

  if(isDuplicate){
    tugon.writeHead(400, {"Content-Type": "application/json"});
    return tugon.end(JSON.stringify({mensahe: "Duplicate data found. The record already exists"}));
  }

  dataStore.push(bagongData);

  tugon.writeHead(200, {"Content-Type": "application/json"});
  tugon.end(JSON.stringify({mensahe: "Data created", data: bagongData}));
})

// PUT - Update data by index
baguhin("/user/update", (hiling, tugon) => {
  const {index, bagongData} = hiling.body;

  if(index === undefined || !bagongData){
    tugon.writeHead(400, {"Content-Type": "application/json"});
    return tugon.end(JSON.stringify({mensahe: "Invalid request. Provide index and bagongData."}));
  }

  if(index < 0 || index >= dataStore.length) {
    tugon.writeHead(200, {"Content-Type": "application/json"});
    return tugon.end(JSON.stringify({mensahe: "Data not found"}));
  }

  dataStore[index] = bagongData;

  tugon.writeHead(200, {"Content-Type": "application/json"});
  tugon.end(JSON.stringify({mensahe: "Data updated", data: bagongData}));
})

// DELETE - Delete data by index
burahin("/user/delete", (hiling, tugon) => {
  const {index,} = hiling.body;

  if(index === undefined){
    tugon.writeHead(400, {"Content-Type": "application/json"});
    return tugon.end(JSON.stringify({mensahe: "Invalid request. Provide index and bagongData."}));
  }

  if(index < 0 || index >= dataStore.length) {
    tugon.writeHead(200, {"Content-Type": "application/json"});
    return tugon.end(JSON.stringify({mensahe: "Data not found"}));
  }

  const deletedData = dataStore.splice(index, 1);

  tugon.writeHead(200, {"Content-Type": "application/json"});
  tugon.end(JSON.stringify({mensahe: "Data updated", data: deletedData}));
})


simulanServer(3000);