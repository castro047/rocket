const getFlagValue = require("./flags");

console.log(`O ${getFlagValue("--name")}. ${getFlagValue("--greeting")}`);
