import { ProcessingCoordinatorImpl } from "./ConcurrentFileProcessor";
import { MockApiClient } from "./MockApiClient";
import { TimestampedParser } from "./TimestampedParser";

export class ProcessingCoordinatorFactory {
  createCoordinator(): ProcessingCoordinatorImpl {
    // Create instances of MockApiClient and TimestampedParser
    const apiClient = new MockApiClient();
    const parser = new TimestampedParser();
    return new ProcessingCoordinatorImpl(apiClient, parser);
  }
}

export class Application {
  private readonly coordinator: ProcessingCoordinatorImpl;

  constructor(coordinator: ProcessingCoordinatorImpl) {
    this.coordinator = coordinator;
  }
  // Method for starting a program and processing its execution
  run(): void {
    this.coordinator.execute()
      .then(() => console.log("Application finished executing."))
      .catch(error => console.error("Application execution failed:", error));
  }
}

export class AppFactory {
  static createApp(): Application {
    const factory = new ProcessingCoordinatorFactory();
    // Use the factory to create an instance of ProcessingCoordinatorImpl
    const coordinator = factory.createCoordinator();
    return new Application(coordinator);
  }
}
