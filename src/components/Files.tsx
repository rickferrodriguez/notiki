import { Notes } from '../types/notes.types';
import './Files.css';

export default function Files({
    files,
    handleActualNote,
}: {
    files: Notes[];
    handleActualNote: (id: number) => void;
}) {
    function Note({ myNotes }: { myNotes: Notes[] }) {
        if (myNotes[0].title === '') {
            return <li>Nueva Nota</li>;
        } else
            return myNotes.map((file) => (
                <li key={file.id} onClick={() => handleActualNote(file.id)}>
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
