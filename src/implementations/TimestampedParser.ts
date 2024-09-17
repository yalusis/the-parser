import { ParsedLine } from "../interfaces/ParsedLine";
import { FileParser } from "../interfaces/FileParser";
import { ParsedMap } from "../interfaces/ParsedMap";

export class TimestampedParser implements FileParser {
  
  // Method for parsing a string in ParsedMap format to ParsedLine
  parseLine(line: ParsedMap): ParsedLine {
    return {
      text: line.get('text') || '',
      timestamp: line.get('timestamp') || ''
    };
  }
}

