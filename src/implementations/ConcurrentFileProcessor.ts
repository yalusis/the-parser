import { FileProcessor } from "./FileProcessor";
import { MockApiClient } from "./MockApiClient";
import { MockFileReader } from "./MockFileReader";
import { TimestampedParser } from "./TimestampedParser";
import { mockFiles } from "../mocks/mockFiles";

export class ProcessingCoordinatorImpl {
  constructor(
    private readonly apiClient: MockApiClient,
    private readonly parser: TimestampedParser
  ) {}
  // Method for performing file processing
  async execute(): Promise<void> {
    // Array for storing file processing promises
    const fileProcessingPromises = [];

    for (const [filename, content] of mockFiles.entries()) {
      const fileReader = new MockFileReader(content);
      const fileProcessor = new FileProcessor(this.parser, this.apiClient);
      
      const processFilePromise = (async () => {
        try {
          const fileContent = await fileReader.readFile();
          await fileProcessor.processFile(fileContent, filename);
        } catch (error) {
          console.error(`Failed to process file ${filename}:`, error);
        }
      })();
      
      fileProcessingPromises.push(processFilePromise);
    }
    // Waiting for all file processing promises to complete
    await Promise.all(fileProcessingPromises);

    console.log("All files processed.");
  }
}

