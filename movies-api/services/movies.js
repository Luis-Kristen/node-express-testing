const { moviesMock } = require('./utils/mocks/movies');


class MoviesService {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock);
        return movies || []; 
    }

    async getMovie() {
        const movies = await Promise.resolve(moviesMock[0]);
        return movies || {}; 
    }

    async createMovie() {
        const createMovieId = await Promise.resolve(moviesMock[0].id);
        return createMovieId || {}; 
    }

    async updateMovie() {
        const updateMovieId = await Promise.resolve(moviesMock[0]);
        return updateMovieId || {}; 
    }

    async deleteMovie() {
        const deletedMovieId = await Promise.resolve(moviesMock[0]);
        return deletedMovieId || {}; 
    }
}

module.exports = MoviesService;