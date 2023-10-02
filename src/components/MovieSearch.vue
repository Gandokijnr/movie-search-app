<template>
    <div>
      <h1>Movie Search</h1>
      <input v-model="query" @input="searchMovies" placeholder="Search for a movie">
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <router-link :to="'/movie/' + movie.id">{{ movie.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { searchMovies } from "@/services/movieService";
  
  export default {
    data() {
      return {
        query: "",
        movies: [],
      };
    },
    methods: {
      async searchMovies() {
        if (this.query) {
          this.movies = await searchMovies(this.query);
        } else {
          this.movies = [];
        }
      },
    },
  };
  </script>
  