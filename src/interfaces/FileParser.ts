import { ParsedLine } from './ParsedLine';

export interface FileParser {
  parseLine(line: Map<string, string>): ParsedLine;
}