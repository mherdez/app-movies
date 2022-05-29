export const getMovies = async (findMovie = 'now_playing') => {
	const URL = `https://api.themoviedb.org/3/movie/${findMovie}?api_key=e570b299ca0f8191b0a3c3142eaed5fd&language=es`;

	const resp = await fetch(URL);
	const { results } = await resp.json();
	return results;
};
