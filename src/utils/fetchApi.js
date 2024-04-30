import axios  from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'dcf06bd973msh6bccc04f1d5a66ep11fe99jsnac2c7f1da9ff',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
} 