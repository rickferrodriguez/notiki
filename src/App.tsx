import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import { Descendant } from 'slate';
import { Note } from './types/notes.types';
import Files from './components/Files';

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
    const [actualNote, setActualNote] = useState<number>(0);
    // const [formTitle, setFormTitle] = useState<string>('');
    // const [formContent, setFormContent] = useState<string>('');

    function handleSetNote(content: Descendant[]) {
        const newNote: Note = { id: actualNote, note: content };
        setValue(content);
        setNotes(
            notes.map((myNote) => {
                if (myNote.id === newNote.id) {
                    return { ...myNote, newNote };
                } else return myNote;
            })
        );
    }
    function handleActualNote(idNote: number) {
        setActualNote(idNote);
        // notes.map((note, index) => {
        //     if (index === idNote) {
        //         setFormTitle(note.title);
        //         setFormContent(note.content);
        //     }
        // });
    }

    function addNewNote() {
        const newNote: Note = { id: notes.length + 1, note: value };
        setValue(initialValue);
        setNotes([...notes, newNote]);
    }
    console.log(notes);
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
                <Files
                    files={notes}
                    sendIdNote={handleActualNote}
                    sendAddNewNote={() => addNewNote()}
                ></Files>
            </aside>
            <main className="note-section">
                <Content sendNote={value} sendHandle={handleSetNote} />
            </main>
        </section>
    );
}

export default App;
