import { useState } from 'react';
import './Content.css';
export default function Content() {
	const [text, setText] = useState<string>('');
	const [title, setTitle] = useState<string>('');

	function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setTitle(e.target.textContent || '');
	}
	function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setText(e.target.textContent || '');
	}
	return (
		<section className="content-container">
			<input
				type="text"
				className="title"
				placeholder="Título"
				onChange={handleTitle}
			/>
			<textarea
				onChange={handleContentChange}
				className="content"
				placeholder="Escribe algo..."
			/>
		</section>
	);
}
