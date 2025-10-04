import http from "http";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// open db
const dbPromise = open({
  filename: "./expenses.db",
  driver: sqlite3.Database,
});

// create table if not exists
(async () => {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT,
    productPrice REAL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
})();

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/add") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", async () => {
      const data = JSON.parse(body);
      const db = await dbPromise;
      await db.run("INSERT INTO expenses (productName, productPrice) VALUES (?, ?)", [data.productName, data.productPrice]);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(JSON.stringify({message: "Expense added"}));
    });
  }
  else if (req.method === "GET" && req.url === "/all") {
    const db = await dbPromise;
    const rows = await db.all("SELECT * FROM expenses");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(rows));
  }
  else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(4000, () => {
  console.log("Backend running at http://localhost:4000");
});