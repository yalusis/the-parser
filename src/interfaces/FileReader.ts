export interface FileReader {
  readFile(): Promise<Map<string, string>[]>
}