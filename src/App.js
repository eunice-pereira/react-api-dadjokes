import './App.css';
import Header from './components/Header';
import JokeButton from './components/JokeButton';
import JokesContainer from './components/JokesContainer';

import { useEffect, useState } from 'react';

function App() {
	// setting useState
	const [joke, setJoke] = useState('');

	// function to bring in API jokes
	async function getJoke() {
		const jokePromise = fetch('https://icanhazdadjoke.com', {
			headers: {
				Accept: 'application/json',
			},
		});
		const response = await jokePromise;
		const jokeData = await response.json();

		console.log(jokeData.joke);
		setJoke(jokeData.joke);
	}
	// call getJoke() 'on load'
	useEffect(() => {
		getJoke();
	}, []);

	console.log(`This is the joke in state:`, joke);

	return (
		<div className="App">
			<Header />
			<JokeButton handleClick={getJoke} />
			<JokesContainer joke={joke} />
		</div>
	);
}

export default App;
