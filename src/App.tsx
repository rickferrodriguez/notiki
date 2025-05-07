import React, { useState } from 'react';
import './App.css';
import Button from './components/Button.tsx';
import Content from './components/Content.tsx';
import { Notes } from './types/notes.types.ts';
import Files from './components/Files.tsx';

function App() {
    let noteId: number = 0;
    const [inputTitle, setInputTitle] = useState<string>('');
    const [inputText, setInputText] = useState<string>('');
    const initialNotes: Notes[] = [{ id: 0, title: '', content: '' }];
    const [notes, setNotes] = useState(initialNotes);
    const [actualNote, setActualNote] = useState<number>(0);

    function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setInputTitle(e.target.value || '');
    }
    function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInputText(e.target.value || '');
    }
    function handleActualNote(idNote: number) {
        setActualNote(idNote);
    }
    console.log(notes);
    function handleClick() {
        console.log(noteId);
        const noteObject: Notes = {
            id: noteId++,
            title: inputTitle,
            content: inputText,
        };
        if (notes[0].title === '' && notes.length === 1) {
            console.log('Esta nota está vacia y es la primera');
            setNotes([
                {
                    id: noteId,
                    title: inputTitle,
                    content: inputText,
                },
            ]);
        } else {
            console.log('else');
            setNotes([...notes, noteObject]);
        }
        // window.localStorage.setItem(
        // 	noteObject.id.toString(),
        // 	JSON.stringify(noteObject)
        // );
    }
    return (
        <>
            <section className="container">
                <aside>
                    <h1>Carpetas</h1>
                    <Files files={notes} sendIdNote={handleActualNote}></Files>
                </aside>
                <main>
                    <section className="header">
                        <Button
                            handleClick={handleClick}
                            styleName="Save"
                            title="Save"
                        />
                    </section>
                    <section className="note-section">
                        <Content
                            text={inputText}
                            title={inputTitle}
                            onTextArea={handleContentChange}
                            onInput={handleTitle}
                        />
                    </section>
                </main>
            </section>
        </>
    );
}

export default App;
