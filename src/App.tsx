import './App.css';
import Button from './components/Button.tsx';
import Title from './components/Title.tsx';

function App() {
	return (
		<>
			<section className="container">
				<aside>Carpetas</aside>
				<main>
					<section className="header">
						<Title />
						<Button styleName="Save" title="Save" />
					</section>
					<section className="note-section">
						<h1
							contentEditable="true"
							aria-placeholder="Escribe lo que quieras..."
						></h1>
						<p contentEditable="true"></p>
					</section>
				</main>
			</section>
		</>
	);
}

export default App;
