import React, { useState } from 'react';
import './App.css';
import Button from './components/Button.tsx';
import Content from './components/Content.tsx';

function App() {
	const [inputTitle, setInputTitle] = useState<string>('');
	const [inputText, setInputText] = useState<string>('');
	const initialNotes = [{ title: 'a', content: 'b' }];
	const [notes, setNotes] = useState(initialNotes);

	function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setInputTitle(e.target.value || '');
	}
	function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setInputText(e.target.value || '');
	}
	function handleClick() {
		for (const note of notes) {
			if (note.title != '') {
				console.log('entró');
				setNotes([
					...notes,
					{
						title: inputTitle,
						content: inputText,
					},
				]);
			}

			setNotes([
				{
					title: inputTitle,
					content: inputText,
				},
			]);
		}
		console.log(notes);
	}
	return (
		<>
			<section className="container">
				<aside>
					<h1>Carpetas</h1>
					<section>{inputTitle}</section>
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
