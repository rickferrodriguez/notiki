export interface Notes {
    id: number;
    title: string;
    content: string;
}

export interface ContentType {
    sendNote: () => void;
    sendHandle: (title: string, content: string) => void;
    sendTitle: string;
    sendContent: string;
}
