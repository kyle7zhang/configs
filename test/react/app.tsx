import type { ReactElement } from 'react';
import React, { useState } from 'react';
import './app.css';

const App = (): ReactElement => {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((countNumber) => countNumber + 1)}>
					count is {count}
				</button>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
};

export default App;
