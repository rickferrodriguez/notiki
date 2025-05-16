import { Notes } from '../types/notes.types';
import Button from './Button';
import './Files.css';

export default function Files({
    files,
    sendIdNote,
    sendAddNewNote,
}: {
    files: Notes[];
    sendIdNote: (id: number) => void;
    sendAddNewNote: () => void;
}) {
    function handleSendId(id: number) {
        sendIdNote(id);
    }
    function Note({ myNotes }: { myNotes: Notes[] }) {
        return myNotes.map((file) => (
            <li key={file.id} onClick={() => handleSendId(file.id)}>
                {file.title}
            </li>
        ));
    }
    return (
        <ul>
            <Note myNotes={files} />
            <Button
                title="+ Crear Nota"
                styleName="add"
                handleClick={sendAddNewNote}
            />
        </ul>
    );
}
