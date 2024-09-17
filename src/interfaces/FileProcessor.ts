export interface FileProcessor {
    processFile(fileContent: Map<string, Map<string, string>[]>, filename: string): Promise<void>;
}
  