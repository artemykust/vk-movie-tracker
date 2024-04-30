import { create } from "zustand";
import axios from 'axios';

const API_TOKEN = import.meta.env.VITE_API_TOKEN

const movieOptions = (id) => ({
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${id}?language=ru`,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
})

const movieImagesOptions = (id) => ({
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${id}/images`,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
})

const similarOptions = (id) => ({
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${id}/similar?language=ru&page=1`, headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
})

const useMovieStore = create((set) => ({
  movie: {},
  images: [],
  similar: [],
  error: '404 Non Found | Check Console',

  getMovie: async (id) => {
    await axios
      .request(movieOptions(id))
      .then(function (response) {
        set({ movie: response.data })
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  getMovieImages: async (id) => {
    await axios
      .request(movieImagesOptions(id))
      .then(function (response) {
        set({ images: response.data.backdrops })
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  getSimilar: async (id) => {
    await axios
      .request(similarOptions(id))
      .then(function (response) {
        set({ similar: response.data.results })
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}));


export default useMovieStore;