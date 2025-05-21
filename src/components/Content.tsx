import { ContentType } from '@/types/notes.types';
import Button from './Button';
import './Content.css';
import { useState, useMemo, useCallback } from 'react';
import {
    Editable,
    RenderElementProps,
    Slate,
    useSlateStatic,
    withReact,
} from 'slate-react';
import {
    createEditor,
    Descendant,
    Editor,
    Element as SlateElement,
    Transforms,
} from 'slate';
import { CustomEditor } from '@/types/slate';

const initialValue: Descendant[] = [
    {
        type: 'title',
        children: [{ text: '', bold: true }],
    },
    {
        type: 'content',
        children: [{ text: '' }],
    },
];
export default function Content({
    sendNote,
    sendHandle,
    sendTitle,
    sendContent,
}: ContentType) {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState<Descendant[]>(initialValue);

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            // [match] funciona como si llamara al primer elemento de un array => match = array[0]
            const [match] = Editor.nodes(editor, {
                match: (n) =>
                    !Editor.isEditor(n) &&
                    SlateElement.isElement(n) &&
                    n.type === 'title',
            });

            if (match) {
                e.preventDefault();
                Transforms.insertNodes(editor, {
                    type: 'content',
                    children: [{ text: '' }],
                });
            }
        }
    };
    const renderElement = useCallback(
        ({ attributes, children, element }: RenderElementProps) => {
            switch (element.type) {
                case 'title':
                    return <h1 {...attributes}>{children}</h1>;
                case 'content':
                    return <p {...attributes}>{children}</p>;
            }
        },
        []
    );
    function handleValue(content: Descendant[]) {
        setValue(content);
    }
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
                onChange={(newValue) => handleValue(newValue)}
                initialValue={value}
            >
                <Editable
                    onKeyDown={onKeyDown}
                    renderElement={renderElement}
                    style={{ height: '20rem' }}
                    placeholder="Nueva nota..."
                ></Editable>
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
