const API_KEY = "e76d77a6e8853506081839a12d9fc1d6";

export async function searchMovies(query) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error searching movies:", error);
      throw error;
    }
  }

  export async function getMovieDetails(id) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      throw error;
    }
  }

