import { useState } from 'react';
import './App.css';
import Button from './components/Button.tsx';
import Content from './components/Content.tsx';

function App() {
	const [texto, setTexto] = useState<string>(
		'Este es un contenido de prueba'
	);
	return (
		<>
			<section className="container">
				<aside>Carpetas</aside>
				<main>
					<section className="header">
						<Button styleName="Save" title="Save" />
					</section>
					<section className="note-section">
						<Content isTitle={true} content="" />
						<Content isTitle={false} content={texto} />
					</section>
				</main>
			</section>
		</>
	);
}

export default App;
