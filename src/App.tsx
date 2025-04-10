import { useState } from 'react';
import './App.css';
import Button from './components/Button.tsx';
import Content from './components/Content.tsx';

function App() {
	const [text, setText] = useState<string>('');
	const [title, setTitle] = useState<string>('');

	function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setTitle(e.target.value || '');
	}
	function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setText(e.target.value || '');
	}
	return (
		<>
			<section className="container">
				<aside>
					<h1>Carpetas</h1>
					<section>{title}</section>
				</aside>
				<main>
					<section className="header">
						<Button styleName="Save" title="Save" />
					</section>
					<section className="note-section">
						<Content
							text={text}
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
