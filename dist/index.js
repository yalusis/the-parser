"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./implementations/app");
// Create an instance of the program using the static createApp method of the AppFactory
const app = app_1.AppFactory.createApp();
app.run();
