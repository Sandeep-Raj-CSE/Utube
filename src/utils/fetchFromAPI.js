import axios from 'axios';

 export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

//export const BASE_URL = 'https://youtube138.p.rapidapi.com/auto-complete/'

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
