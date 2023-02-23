import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6e3f0e76f4e133cf6c14fe47c545e154';

export const getPopularFilm = async () => {
    try {
      const fetchAPI = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
      );
      const data = await fetchAPI.data;
      return data;
    } catch (error) {
      console.error('Something is wrong with the search' + error);
    }
}
  
export const getInfoByFilm = async (id) => {
    try {
      const fetchAPI = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
      const data = await fetchAPI.data;
      return data;
    } catch (error) {
      console.error('Something is wrong with the search' + error);
    }
  }

