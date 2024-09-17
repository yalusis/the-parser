import { FileReader } from "../interfaces/FileReader";
import { ParsedMap } from "../interfaces/ParsedMap";

export class MockFileReader implements FileReader {
  constructor(
    private readonly content: ParsedMap[]
  ) {}

  async readFile(): Promise<ParsedMap[]> {
    const processedContent = this.content.map((line) => {
      return new Map<string, string>([
        ["text", line.get("text") || ""],
        ["timestamp", line.get("timestamp") || ""],
      ]);
    });

    return processedContent
  }
}


