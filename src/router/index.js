// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MovieSearch from '@/components/MovieSearch.vue';
import MovieDetails from '@/components/MovieDetails.vue';

// Create a router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MovieSearch',
      component: MovieSearch,
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails,
    },
  ],
});

export default router;
