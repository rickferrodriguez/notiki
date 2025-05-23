import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Files from './components/Files';
import { Descendant } from 'slate';
import { Notes } from './types/notes.types';

function App() {
    const initialValue: Descendant[] = [
        {
            type: 'title',
            children: [{ text: '', bold: true }],
        },
    ];
    const initialNotes: Notes[] = [{ id: 0, title: 'Nueva nota', content: '' }];
    const [desNotes, desSetNotes] = useState<Descendant[]>(initialValue);
    const [notes, setNotes] = useState(initialNotes);
    const [actualNote, setActualNote] = useState<number>(0);
    const [formTitle, setFormTitle] = useState<string>('');
    const [formContent, setFormContent] = useState<string>('');

    function handleActualNote(idNote: number) {
        setActualNote(idNote);
        notes.map((note, index) => {
            if (index === idNote) {
                setFormTitle(note.title);
                setFormContent(note.content);
            }
        });
    }

    function handleOnChange(title: string, content: string) {
        // TODO: arregla esto que no me deja escribir cuando quiero borrar todo
        if (title !== '') {
            setFormTitle(title);
        } else if (content !== '') {
            setFormContent(content);
        }
    }
    function handleSaveNote() {
        setNotes(
            desNotes.map((note, index) => {
                if (actualNote === index) {
                    console.log(note);
                }
                return note;
            })
        );
    }
    function addNewNote() {
        setFormTitle('');
        setFormContent('');
        setNotes([
            ...notes,
            {
                id: notes.length++,
                title: 'Nueva nota',
                content: '',
            },
        ]);
    }
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
                <Content
                    sendNote={handleSaveNote}
                    sendHandle={handleOnChange}
                    sendTitle={formTitle}
                    sendContent={formContent}
                />
            </main>
        </section>
    );
}

export default App;
