import './App.css';
import Button from './components/Button.tsx';
import Content from './components/Content.tsx';

function App() {
	return (
		<>
			<section className="container">
				<aside>Carpetas</aside>
				<main>
					<section className="header">
						<Button styleName="Save" title="Save" />
					</section>
					<section className="note-section">
						<Content />
					</section>
				</main>
			</section>
		</>
	);
}

export default App;
