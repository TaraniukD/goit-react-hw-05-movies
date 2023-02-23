import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '6e3f0e76f4e133cf6c14fe47c545e154';

export const getPopularFilm = async (page) => {
    try {
      const fetchAPI = await axios.get(
        `${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      const data = await fetchAPI.data;
    console.log(data)
      return data;
    } catch (error) {
      console.error('Something is wrong with the search' + error);
    }
  }

// const urlSettings = new URLSearchParams({
//   key: '32102465-275d51e71b27b4572d9937886',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// });

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// export const fetchImages = async (query, page) => {
//   const response = await axios.get(`?q=${query}&page=${page}&${urlSettings}`);
//   const data = response.data;

//   return data;
// };