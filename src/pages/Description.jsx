import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import RickApi from '../api/RickApi';

const Description = () => {
    const { id } = useParams(); // Obtiene el parámetro 'id' de la URL
    const [data, setData] = useState(null);
    const GetData = async () => {
        try {
          const res = await RickApi.get(`/${id}`);
          setData(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        GetData();
      }, []);
      console.log(data)
  return (
    <div>Description</div>
  )
}

export default Description