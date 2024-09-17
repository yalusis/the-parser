"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampedParser = void 0;
class TimestampedParser {
    // Method for parsing a string in ParsedMap format to ParsedLine
    parseLine(line) {
        return {
            text: line.get('text') || '',
            timestamp: line.get('timestamp') || ''
        };
    }
}
exports.TimestampedParser = TimestampedParser;
