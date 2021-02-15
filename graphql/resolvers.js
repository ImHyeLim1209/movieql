import { getMovies, getById, deleteMovie, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: getMovies,
    movie: (_, { id }) => getById(id) //_: 현재 object를 보내는 object, 두번째 인자는 요청
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;