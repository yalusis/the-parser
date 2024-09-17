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
exports.ProcessingCoordinatorImpl = void 0;
const FileProcessor_1 = require("./FileProcessor");
const MockFileReader_1 = require("./MockFileReader");
const mockFiles_1 = require("../mocks/mockFiles");
class ProcessingCoordinatorImpl {
    constructor(apiClient, parser) {
        this.apiClient = apiClient;
        this.parser = parser;
    }
    // Method for performing file processing
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            // Array for storing file processing promises
            const fileProcessingPromises = [];
            for (const [filename, content] of mockFiles_1.mockFiles.entries()) {
                const fileReader = new MockFileReader_1.MockFileReader(content);
                const fileProcessor = new FileProcessor_1.FileProcessor(this.parser, this.apiClient);
                const processFilePromise = (() => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const fileContent = yield fileReader.readFile();
                        yield fileProcessor.processFile(fileContent, filename);
                    }
                    catch (error) {
                        console.error(`Failed to process file ${filename}:`, error);
                    }
                }))();
                fileProcessingPromises.push(processFilePromise);
            }
            // Waiting for all file processing promises to complete
            yield Promise.all(fileProcessingPromises);
            console.log("All files processed.");
        });
    }
}
exports.ProcessingCoordinatorImpl = ProcessingCoordinatorImpl;
