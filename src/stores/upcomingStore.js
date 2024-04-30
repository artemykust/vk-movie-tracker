import { create } from "zustand";
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

const API_TOKEN = import.meta.env.VITE_API_TOKEN

import { devtools } from 'zustand/middleware';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming?language=ru&page=1',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
}

const useUpcomingStore = create(devtools((set) => ({
  title: 'Скоро в прокате',
  movies: [],
  getUpcomingMovies: async () => {
    const response = await axios.request(options);
    set({ movies: response.data.results })
  }
})));


export default useUpcomingStore;