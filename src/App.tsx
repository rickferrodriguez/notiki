import React, { useState } from 'react';
import './App.css';
import Button from './components/Button.tsx';
import Content from './components/Content.tsx';

function App() {
	const [inputTitle, setInputTitle] = useState<string>('');
	const [inputText, setInputText] = useState<string>('');
	const initialNotes = [{ id: 0, title: 'a', content: 'b' }];
	const [notes, setNotes] = useState(initialNotes);

	function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setInputTitle(e.target.value || '');
	}
	function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setInputText(e.target.value || '');
	}
	function handleClick() {
		const noteObject = {
			id: Math.random(),
			title: inputTitle,
			content: inputText,
		};
		setNotes([...notes, noteObject]);
		window.localStorage.setItem(
			noteObject.id.toString(),
			JSON.stringify(noteObject)
		);
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
