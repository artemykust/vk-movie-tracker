import { create } from "zustand";
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

const API_TOKEN = import.meta.env.VITE_API_TOKEN

import { devtools } from 'zustand/middleware';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing?language=ru&page=1',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
}

const useNowPlayingStore = create(devtools((set) => ({
  title: 'Сейчас в кинотеатрах',
  movies: [],
  getNowPlayingMovies: async () => {
    const response = await axios.request(options);
    set({ movies: response.data.results })
  }
})));


export default useNowPlayingStore;