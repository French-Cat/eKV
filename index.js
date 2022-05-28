const express = require("express");
const JSONdb = require("simple-json-db");
const db = new JSONdb("data.kv");
const app = express();

app.get("/set/*/*", (req, res) => {
    const path = req.path.split("/");
    const key = path[2];
    const value = path[3];
    db.set(key, value);
    res.sendStatus(200);
});

app.get("/get/*", (req, res) => {
    res.send(db.get(req.path.replace("/get/", "")));
});

app.get("/has/*", (req, res) => {
    res.send(db.has(req.path.replace("/has/", "")));
});

app.get("/delete/*", (req, res) => {
    res.send(db.delete(req.path.replace("/delete/", "")));
});

/*

Should only be used for debug
app.get('/_/data.json', (req, res) => {
  res.send(db.JSON())
});

*/

app.listen(1525, () => {
    console.log("server started");
});
