import { Notes } from '../types/notes.types';
import './Files.css';

export default function Files({
    files,
    sendIdNote,
}: {
    files: Notes[];
    sendIdNote: (id: number) => void;
}) {
    function handleSendId(id: number) {
        sendIdNote(id);
    }
    function Note({ myNotes }: { myNotes: Notes[] }) {
        if (myNotes[0].title === '') {
            return <li>Nueva Nota</li>;
        } else
            return myNotes.map((file) => (
                <li key={file.id} onClick={() => handleSendId(file.id)}>
                    {file.title}
                </li>
            ));
    }
    return (
        <>
            <ul>
                <Note myNotes={files}></Note>
            </ul>
        </>
    );
}
