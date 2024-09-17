"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileProcessor = void 0;
class FileProcessor {
    constructor(parser, apiClient) {
        this.parser = parser;
        this.apiClient = apiClient;
    }
    // Method for delaying execution by a specified number of milliseconds
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    processFile(content, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const line of content) {
                try {
                    // Parsing a string using a parser
                    const parsedLine = this.parser.parseLine(line);
                    const delayTime = Math.floor(Math.random() * 5000);
                    yield this.delay(delayTime);
                    console.log(`Message: ${parsedLine.text}, Timestamp: ${parsedLine.timestamp}`);
                    // Send a message through the API client
                    yield this.apiClient.sendMessage(parsedLine.text, filename);
                }
                catch (error) {
                    console.error(`Failed to process line in file ${filename}:`, error);
                }
            }
        });
    }
}
exports.FileProcessor = FileProcessor;
