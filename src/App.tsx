import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Button from './components/Button';
import { Descendant } from 'slate';

function App() {
    const initialValue: Descendant[] = [
        {
            type: 'title',
            children: [{ text: '', bold: true }],
        },
    ];
    // const initialNotes: Notes[] = [{ id: 0, title: 'Nueva nota', content: '' }];
    const [value, setValue] = useState<Descendant[]>(initialValue);
    const [notes, setNotes] = useState<Descendant[][]>([initialValue]);
    // const [actualNote, setActualNote] = useState<number>(0);
    // const [formTitle, setFormTitle] = useState<string>('');
    // const [formContent, setFormContent] = useState<string>('');

    function handleSetNote(content: Descendant[]) {
        setValue(content);
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
        console.log(notes);
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
