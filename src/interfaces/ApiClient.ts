export interface ApiClient {
    sendMessage(message: string, filename: string): Promise<void>;
}
