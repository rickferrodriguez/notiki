import { ContentType } from '@/types/notes.types';
import Button from './Button';
import './Content.css';
import { useState } from 'react';
import { Editable, Slate, withReact } from 'slate-react';
import { createEditor, Descendant } from 'slate';

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [{ text: 'Este es el contenido' }],
    },
];
export default function Content({
    sendNote,
    sendHandle,
    sendTitle,
    sendContent,
}: ContentType) {
    const [editor] = useState(() => withReact(createEditor()));
    const [value, setValue] = useState<Descendant[]>(initialValue);
    function handleEditable(value: Descendant[]) {
        setValue(value);
    }
    console.log(value);
    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        sendNote();
    }
    function handleOnTitle(e: React.FormEvent<HTMLInputElement>) {
        const title = e.currentTarget.value;
        sendHandle(title, '');
    }
    function handleOnArea(e: React.FormEvent<HTMLTextAreaElement>) {
        const content = e.currentTarget.value;
        sendHandle('', content);
    }
    return (
        <div>
            <Slate
                editor={editor}
                onChange={(newValue) => handleEditable(newValue)}
                initialValue={initialValue}
            >
                <Editable></Editable>
            </Slate>
            <form onSubmit={handleSubmit} className="content-container">
                <input
                    type="text"
                    name="title"
                    className="title"
                    placeholder="Título"
                    onChange={(e) => handleOnTitle(e)}
                    value={sendTitle}
                />
                <textarea
                    name="content"
                    className="content"
                    placeholder="Escribe algo..."
                    onChange={(e) => handleOnArea(e)}
                    value={sendContent}
                />
                <Button type="submit" title="Guardar" styleName="submit" />
            </form>
        </div>
    );
}
