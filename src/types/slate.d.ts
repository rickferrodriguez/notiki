import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

type TitleElement = {
    type: 'title';
    children: CustomText[];
};

type ContentElement = {
    type: 'content';
    children: CustomText[];
};

type CustomElement = TitleElement | ContentElement;

type FormattedText = { text: string };

type CustomText = FormattedText;

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}
