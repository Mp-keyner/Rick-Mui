import axios from 'axios';

// Crear una instancia de axios
const RickApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character', 
  timeout:  1000, // Tiempo de espera en milisegundos
});

export default RickApi;