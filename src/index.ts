import { AppFactory } from "./implementations/app";

// Create an instance of the program using the static createApp method of the AppFactory
const app = AppFactory.createApp();
app.run();