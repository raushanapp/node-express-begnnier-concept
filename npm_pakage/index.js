const logEvent = require("./loginEvent");

const EventEmiter = require("events");

class MYEmitter extends EventEmiter { };

// initalize object

const myEmitter = new MYEmitter();

// add listener for the log event

myEmitter.on("log", (msg) => logEvent(msg));

setTimeout(() => {
    // Emit event;
    myEmitter.emit("log", "Log event emitted!");
}, 3000);