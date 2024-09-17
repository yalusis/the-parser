import { FileParser } from "../interfaces/FileParser";
import { ApiClient } from "../interfaces/ApiClient";
import { ParsedMap } from "../interfaces/ParsedMap";

export class FileProcessor {
  constructor(
      private readonly parser: FileParser, 
      private readonly apiClient: ApiClient
    ) {}
  // Method for delaying execution by a specified number of milliseconds
  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async processFile(content: ParsedMap[], filename: string): Promise<void> {
    for (const line of content) {
      try {
        // Parsing a string using a parser
        const parsedLine = this.parser.parseLine(line);

        const delayTime = Math.floor(Math.random() * 5000);
        await this.delay(delayTime);

        console.log(`Message: ${parsedLine.text}, Timestamp: ${parsedLine.timestamp}`);
        // Send a message through the API client
        await this.apiClient.sendMessage(parsedLine.text, filename);

      } catch (error) {
        console.error(`Failed to process line in file ${filename}:`, error);
      }
    }
  }
}
