import Button from './Button';
import './Content.css';
interface ContentType {
    sendNote: (e: FormData) => void;
}
export default function Content({ sendNote }: ContentType) {
    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        sendNote(formData);
    }
    return (
        <form onSubmit={handleSubmit} className="content-container">
            <input
                type="text"
                name="title"
                className="title"
                placeholder="Título"
            />
            <textarea
                name="content"
                className="content"
                placeholder="Escribe algo..."
            />
            <Button type="submit" title="Guardar" styleName="submit" />
        </form>
    );
}
