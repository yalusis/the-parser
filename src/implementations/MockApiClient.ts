import { ApiClient } from "../interfaces/ApiClient";

// The MockApiClient class implements the ApiClient interface to simulate an API client
export class MockApiClient implements ApiClient {
  
  // Implementation of the sendMessage method, which simulates sending a message
  async sendMessage(message: string, filename: string): Promise<void> {
    console.log(`Sent to API: "${message}" from file: ${filename}`);
    return Promise.resolve();
  }
}

