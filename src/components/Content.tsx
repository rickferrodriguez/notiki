import './Content.css';
import { useCallback } from 'react';
import { Editable, ReactEditor, RenderElementProps, Slate } from 'slate-react';
import {
    BaseEditor,
    Descendant,
    Editor,
    Element as SlateElement,
    Transforms,
} from 'slate';

export default function Content({
    sendNote,
    sendHandle,
    sendEditor,
}: {
    sendNote: Descendant[];
    sendHandle: (content: Descendant[]) => void;
    sendEditor: BaseEditor & ReactEditor;
}) {
    // const editor = useMemo(() => withReact(createEditor()), []);
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            // [match] funciona como si llamara al primer elemento de un array => match = array[0]
            const [match] = Editor.nodes(sendEditor, {
                match: (n) =>
                    !Editor.isEditor(n) &&
                    SlateElement.isElement(n) &&
                    n.type === 'title',
            });

            if (match) {
                e.preventDefault();
                Transforms.insertNodes(sendEditor, {
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
    return (
        <div>
            <Slate
                editor={sendEditor}
                onChange={(newValue) => sendHandle(newValue)}
                initialValue={sendNote}
            >
                <Editable
                    onKeyDown={onKeyDown}
                    renderElement={renderElement}
                    style={{ height: '20rem' }}
                    placeholder="Nueva nota..."
                ></Editable>
            </Slate>
        </div>
    );
}
