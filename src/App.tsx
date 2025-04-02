import { useState } from 'react';
import './App.css';
import Button from './assets/components/Button';

function App() {
	const [count, setCount] = useState(0);
	function addCounter() {
		setCount(count + 1);
	}

	return (
		<>
			<section style={{ display: 'grid' }}>
				<aside>Carpetas</aside>
				<main>
					<section
						style={{
							display: 'flex',
							gap: '10px',
							justifyContent: 'center',
						}}
					>
						<input style={{ width: '100%' }} type="text" />
						<button onClick={() => addCounter()}>Add count</button>
						<label>{count}</label>
					</section>
					<section>
						<Button />
						<input type="text" />
					</section>
				</main>
			</section>
		</>
	);
}

export default App;
