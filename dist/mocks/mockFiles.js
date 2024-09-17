"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockFiles = void 0;
exports.mockFiles = new Map([
    [
        "file1.txt",
        [
            new Map([
                ["text", "Hello world!"],
                ["timestamp", "2024-02-22 14:35:30 UTC"],
            ]),
            new Map([
                ["text", "Goodbye world!"],
                ["timestamp", "2024-02-22 16:35:30 UTC"],
            ]),
        ],
    ],
    [
        "file2.txt",
        [
            new Map([
                ["text", "Hello"],
                ["timestamp", "2024-02-22 08:35:30 UTC"],
            ]),
            new Map([
                ["text", "Hi"],
                ["timestamp", "2024-02-22 12:35:30 UTC"],
            ]),
        ],
    ],
    [
        "file3.txt",
        [
            new Map([
                ["text", "How are you?"],
                ["timestamp", "2024-02-22 08:35:30 UTC"],
            ]),
            new Map([
                ["text", "Pretty good"],
                ["timestamp", "2024-02-22 12:35:30 UTC"],
            ]),
        ],
    ],
]);
