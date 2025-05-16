import Button from './Button';
import './Content.css';
interface ContentType {
    sendNote: () => void;
    sendHandle: (title: string, content: string) => void;
    sendTitle: string;
    sendContent: string;
}
export default function Content({
    sendNote,
    sendHandle,
    sendTitle,
    sendContent,
}: ContentType) {
    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        sendNote();
    }
    function handleOnTitle(e: React.FormEvent<HTMLInputElement>) {
        const title = e.currentTarget.value;
        sendHandle(title, '');
    }
    function handleOnArea(e: React.FormEvent<HTMLTextAreaElement>) {
        const content = e.currentTarget.value;
        sendHandle('', content);
    }
    return (
        <form onSubmit={handleSubmit} className="content-container">
            <input
                type="text"
                name="title"
                className="title"
                placeholder="Título"
                onChange={(e) => handleOnTitle(e)}
                value={sendTitle}
            />
            <textarea
                name="content"
                className="content"
                placeholder="Escribe algo..."
                onChange={(e) => handleOnArea(e)}
                value={sendContent}
            />
            <Button type="submit" title="Guardar" styleName="submit" />
        </form>
    );
}
