import { useState } from 'react';
import ReactLogo from './assets/svg/react.svg?react'; // svgr plugin usage
import viteLogo from '/vite.svg';
import './styles/App.scss';

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<p>This is an image inside anchor imported like img tag:</p>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
			</div>
			<div>
				<p>
					This is an image inside anchor imported like React component via
					vite-plugin-svgr:
				</p>
				<a href="https://react.dev" target="_blank">
					<ReactLogo />
				</a>
			</div>
			<h1>Vite + React</h1>
			<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
		</>
	);
};
