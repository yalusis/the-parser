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
exports.MockApiClient = void 0;
// The MockApiClient class implements the ApiClient interface to simulate an API client
class MockApiClient {
    // Implementation of the sendMessage method, which simulates sending a message
    sendMessage(message, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Sent to API: "${message}" from file: ${filename}`);
            return Promise.resolve();
        });
    }
}
exports.MockApiClient = MockApiClient;
