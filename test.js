const eKVhelper = require("./module.js")


eKVhelper.set("http://localhost:1122", "Key", "Value")



eKVhelper.get("http://localhost:1122", "Key")



eKVhelper.has("http://localhost:1122", "Key")



eKVhelper.del("http://localhost:1122", "Key")
