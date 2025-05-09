import React, { useState } from 'react';
import './App.css';
import Button from './components/Button.tsx';
import Content from './components/Content.tsx';
import { Notes } from './types/notes.types.ts';
import Files from './components/Files.tsx';

function App() {
    const initialNotes: Notes[] = [{ id: 0, title: '', content: '' }];
    const [notes, setNotes] = useState(initialNotes);
    const [actualNote, setActualNote] = useState<number>(0);

    function handleSaveNote(formData: FormData) {
        let formTitle = '';
        let formContent = '';
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
            } else {
                console.log('nueva nota', index);
                setNotes([
                    ...notes,
                    {
                        id: index++,
                        title: formTitle,
                        content: formContent,
                    },
                ]);
            }
        });
        // window.localStorage.setItem(
        // 	newNote.id.toString(),
        // 	JSON.stringify(newNote)
        // );
    }
    function handleActualNote(idNote: number) {
        setActualNote(idNote);
    }
    return (
        <>
            <section className="container">
                <aside>
                    <h1>Carpetas</h1>
                    <Files files={notes} sendIdNote={handleActualNote}></Files>
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
