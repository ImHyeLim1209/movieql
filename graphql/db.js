export let movies = [
  {
    id: 1,
    name: "movie1",
    score: 3
  },
  {
    id: 2,
    name: "movie2",
    score: 8
  },
  {
    id: 3,
    name: "movie3",
    score: 2
  },
  {
    id: 4,
    name: "movie4",
    score: 9
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
}

export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovie.length) {
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}

//export { getMovies, getById, deleteMovie }