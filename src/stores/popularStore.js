import { create } from "zustand";
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

const API_TOKEN = import.meta.env.VITE_API_TOKEN

import { devtools } from 'zustand/middleware';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular?language=ru&page=1',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
}

const usePopularStore = create(devtools((set) => ({
  title: 'Популярное',
  movies: [],
  getPopularMovies: async () => {
    const response = await axios.request(options);
    set({ movies: response.data.results })
  }
})));


export default usePopularStore;