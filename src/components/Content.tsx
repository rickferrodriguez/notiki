import { ChangeEvent } from 'react';
import './Content.css';
interface ContentType {
    text: string;
    title: string;
    onTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function Content({
    text,
    title,
    onTextArea,
    onInput,
}: ContentType) {
    return (
        <section className="content-container">
            <input
                type="text"
                value={title}
                className="title"
                placeholder="Título"
                onChange={onInput}
            />
            <textarea
                onChange={onTextArea}
                className="content"
                placeholder="Escribe algo..."
                value={text}
            />
        </section>
    );
}
