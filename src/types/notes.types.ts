export interface Notes {
    id: number;
    title: string;
    content: string;
}

export interface ContentType {
    sendNote: (e: FormData) => void;
}
