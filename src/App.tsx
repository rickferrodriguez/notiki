import { useState } from 'react';
import './App.css';
import Content from './components/Content.tsx';
import { Notes } from './types/notes.types.ts';
import Files from './components/Files.tsx';

function App() {
    const initialNotes: Notes[] = [{ id: 0, title: 'Nueva nota', content: '' }];
    const [notes, setNotes] = useState(initialNotes);
    const [actualNote, setActualNote] = useState<number>(0);
    let formTitle = '';
    let formContent = '';

    function handleSaveNote(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            if (key === 'title') {
                formTitle = value.toString();
            } else if (key === 'content') {
                formContent = value.toString();
            }
        }
        notes.map((note, index) => {
            if (index === 0 && note.title === '') {
                console.log('Esta es la primera nota y está vacía', formTitle);
                setNotes([
                    {
                        id: index,
                        title: formTitle,
                        content: formContent,
                    },
                ]);
            } else if (actualNote === index) {
                console.log('es la nota actual');
                setNotes([
                    (note = {
                        id: index,
                        title: formTitle,
                        content: formContent,
                    }),
                ]);
            }
        });
        // window.localStorage.setItem(
        // 	newNote.id.toString(),
        // 	JSON.stringify(newNote)
        // );
    }
    function addNewNote() {
        console.log('new note???', notes);
        setNotes([
            ...notes,
            {
                id: notes.length++,
                title: formTitle === '' ? 'Nueva nota' : formTitle,
                content: formContent,
            },
        ]);
    }
    function handleActualNote(idNote: number) {
        setActualNote(idNote);
    }
    return (
        <>
            <section className="container">
                <aside>
                    <h1>Carpetas</h1>
                    <Files
                        files={notes}
                        sendIdNote={handleActualNote}
                        sendAddNewNote={() => addNewNote()}
                    ></Files>
                </aside>
                <main>
                    <section className="note-section">
                        <Content sendNote={handleSaveNote} />
                    </section>
                </main>
            </section>
        </>
    );
}

export default App;
