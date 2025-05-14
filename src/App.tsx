import { useState } from 'react';
import './App.css';
import Content from './components/Content.tsx';
import { Notes } from './types/notes.types.ts';
import Files from './components/Files.tsx';

function App() {
    const initialNotes: Notes[] = [{ id: 0, title: 'Nueva nota', content: '' }];
    const [notes, setNotes] = useState(initialNotes);
    const [actualNote, setActualNote] = useState<Notes | undefined>({
        id: 0,
        title: '',
        content: '',
    });
    let formTitle = '';
    let formContent = '';

    function handleActualNote(idNote: number) {
        setActualNote(notes.find((note) => note.id === idNote));
    }

    function handleSaveNote(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            if (key === 'title') {
                formTitle = value.toString();
            } else if (key === 'content') {
                formContent = value.toString();
            }
        }

        setNotes(
            notes.map((note, index) => {
                if (actualNote?.id === index) {
                    return {
                        id: index,
                        title: formTitle,
                        content: formContent,
                    };
                }
                return note;
            })
        );
    }
    function addNewNote() {
        setNotes([
            ...notes,
            {
                id: notes.length++,
                title: formTitle === '' ? 'Nueva nota' : formTitle,
                content: formContent,
            },
        ]);
    }
    return (
        <section className="container">
            <aside>
                <h1>Carpetas</h1>
                <Files
                    files={notes}
                    // TODO enviar la info de la nota actual
                    sendIdNote={handleActualNote}
                    sendAddNewNote={() => addNewNote()}
                ></Files>
            </aside>
            <main className="note-section">
                <Content sendNote={handleSaveNote} />
            </main>
        </section>
    );
}

export default App;
