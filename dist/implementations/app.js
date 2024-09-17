"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppFactory = exports.Application = exports.ProcessingCoordinatorFactory = void 0;
const ConcurrentFileProcessor_1 = require("./ConcurrentFileProcessor");
const MockApiClient_1 = require("./MockApiClient");
const TimestampedParser_1 = require("./TimestampedParser");
class ProcessingCoordinatorFactory {
    createCoordinator() {
        // Create instances of MockApiClient and TimestampedParser
        const apiClient = new MockApiClient_1.MockApiClient();
        const parser = new TimestampedParser_1.TimestampedParser();
        return new ConcurrentFileProcessor_1.ProcessingCoordinatorImpl(apiClient, parser);
    }
}
exports.ProcessingCoordinatorFactory = ProcessingCoordinatorFactory;
class Application {
    constructor(coordinator) {
        this.coordinator = coordinator;
    }
    // Method for starting a program and processing its execution
    run() {
        this.coordinator.execute()
            .then(() => console.log("Application finished executing."))
            .catch(error => console.error("Application execution failed:", error));
    }
}
exports.Application = Application;
class AppFactory {
    static createApp() {
        const factory = new ProcessingCoordinatorFactory();
        // Use the factory to create an instance of ProcessingCoordinatorImpl
        const coordinator = factory.createCoordinator();
        return new Application(coordinator);
    }
}
exports.AppFactory = AppFactory;
