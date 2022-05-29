import { useEffect, useState } from 'react';
import './App.css';

import { getMovies } from './helpers/getMovies';

const URL_IMG = 'https://image.tmdb.org/t/p/w500/';

const findMovies = 'now_playing'; //upcoming / now_playing / popular / top_rated
function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovies(findMovies).then((movies) => setMovies(movies));
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<h2>App Movies </h2>
				<h4>{findMovies}</h4>
				<ul className='movies-list'>
					{movies.map((movie) => (
						<li key={movie.id} className='movies-item'>
							<img src={`${URL_IMG}${movie.poster_path}`} alt={movie.title} />
							<p>{movie.title}</p>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
