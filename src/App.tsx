import { useMemo, useState } from 'react';
import './App.css';
import Content from './components/Content';
import { createEditor, Descendant, Editor, Transforms } from 'slate';
import { Note } from './types/notes.types';
import Files from './components/Files';
import { withReact } from 'slate-react';

function App() {
    const initialValue: Descendant[] = [
        {
            type: 'title',
            children: [{ text: '' }],
        },
    ];
    const editor = useMemo(() => withReact(createEditor()), []);
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
                if (myNote.id === newNote.id && notes.length > 1) {
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
        // TODO: hacer que al momento de crear una nueva nota esta pestaña se coloque en blanco
        const newNote: Note = {
            id: notes.length + 1,
            note: initialValue,
        };
        setNotes([...notes, newNote]);
        Transforms.delete(editor, {
            at: {
                anchor: Editor.start(editor, []),
                focus: Editor.end(editor, []),
            },
        });
        Transforms.insertNodes(editor, initialValue, { at: [0] });
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
                    sendNote={value}
                    sendHandle={handleSetNote}
                    sendEditor={editor}
                />
            </main>
        </section>
    );
}

export default App;
