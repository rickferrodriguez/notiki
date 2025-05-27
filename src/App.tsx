import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Button from './components/Button';
import { Descendant } from 'slate';
import { Note } from './types/notes.types';

function App() {
    const initialValue: Descendant[] = [
        {
            type: 'title',
            children: [{ text: '' }],
        },
    ];
    const initialNotes: Note[] = [{ id: 0, note: initialValue }];
    const [value, setValue] = useState<Descendant[]>(initialValue);
    const [notes, setNotes] = useState<Note[]>(initialNotes);
    // const [actualNote, setActualNote] = useState<number>(0);
    // const [formTitle, setFormTitle] = useState<string>('');
    // const [formContent, setFormContent] = useState<string>('');

    function handleSetNote(content: Descendant[]) {
        const actualNote: Note = { id: 0, note: content };
        setValue(content);
        setNotes([actualNote]);
    }
    // function handleActualNote(idNote: number) {
    //     setActualNote(idNote);
    //     notes.map((note, index) => {
    //         if (index === idNote) {
    //             setFormTitle(note.title);
    //             setFormContent(note.content);
    //         }
    //     });
    // }

    function handleSaveNote() {
        // TODO listar las notas y revisar como mostrar el titulo de cada una
        console.log(notes);
        for (const note of notes) {
            console.log(note);
            for (const [key, value] of Object.entries(note)) {
                console.log(key, value);
            }
        }
    }
    // function addNewNote() {
    //     setFormTitle('');
    //     setFormContent('');
    //     setNotes([
    //         ...notes,
    //         {
    //             id: notes.length++,
    //             title: 'Nueva nota',
    //             content: '',
    //         },
    //     ]);
    // }
    return (
        <section className="container">
            <aside>
                <h1>Carpetas</h1>
                <Button
                    title="Mostrar"
                    styleName="button"
                    handleClick={() => handleSaveNote()}
                />
                {
                    // <Files
                    //     files={notes}
                    //     sendIdNote={handleActualNote}
                    //     sendAddNewNote={() => addNewNote()}
                    // ></Files>
                }
            </aside>
            <main className="note-section">
                <Content sendNote={value} sendHandle={handleSetNote} />
            </main>
        </section>
    );
}

export default App;
