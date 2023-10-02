<template>
    <div>
      <h1>Movie Details</h1>
      <div v-if="movie">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.overview }}</p>
      </div>
      <router-link to="/">Back to Search</router-link>
    </div>
  </template>
  
  <script>
  import { getMovieDetails } from "@/services/movieService";
  
  export default {
    data() {
      return {
        movie: null,
      };
    },
    async created() {
      const movieId = this.$route.params.id;
      this.movie = await getMovieDetails(movieId);
    },
  };
  </script>
  