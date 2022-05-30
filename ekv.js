const express = require("express");
const JSONdb = require("simple-json-db");
const db = new JSONdb("data.kv");
const app = express();

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /><title>eKV</title><style>body {background-color: #352f44;color: #dedede;}code {background-color: #2a2438;color: #dbd8e3;}</style></head><body><center><h1>eKV</h1><h3>A simple Express Key-Value db</h3><p>eKV is all GET requests so all it takes is a simple<br /><code>fetch("<ip></ip>METHOD")</code></p><h2>Usage:</h2><br /><code><ip></ip>set/Key-Name/Key-Value <br /><br />OK</code><br /><br /><code><ip></ip>get/Key-Name <br /><br />Key-Value</code><br /><br /><code><ip></ip>has/Key-Name <br /><br />true/false</code><br /><br /><code><ip></ip>delete/Key-Name/Key-Value <br /><br />true/false</code></center><script>var arr = document.getElementsByTagName("ip");arr = [].slice.call(arr);arr.forEach((e) => {e.innerText = document.location.href;});</script></body></html>`);
});

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
    res.send(db.delete(req.path.replace("/delete/", "")) || false);
});

/*

Should only be used for debug
app.get('/_/data.json', (req, res) => {
  res.send(db.JSON())
});

*/

app.listen(1122, () => {
    console.log("server started");
});
