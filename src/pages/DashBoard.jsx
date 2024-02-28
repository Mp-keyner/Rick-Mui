import React, { useEffect, useState } from "react";
import RickApi from "../api/RickApi";
import { Grid, Link, Stack } from "@mui/material";
import Nav from "../components/Nav";
import CardCharater from "../components/CardCharater";
import Hero from "../components/Hero";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const GetData = async () => {
    try {
      const res = await RickApi.get();
      setData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  console.log(data);
  return (
    <>
      <Stack>
        <Nav />
        <Stack justifyContent="center" alignItems="center" bgcolor="#ffff">
          <Grid
            container
            //   spacing={1}
            sx={{
              width: "100%",
              padding: 1, // Aplica un padding al contenedor
              margin: 0,
              // marginTop: 2, // Aplica un margen superior al contenedor
              // marginBottom: 2, // Aplica un margen inferior al contenedor
              // marginLeft: "auto", // Centra el contenedor horizontalmente
              // marginRight: "auto", // Asegura que el contenedor esté centrado horizontalmente
              maxWidth: 1200, // Define un ancho máximo para el contenedor
              backgroundColor: "#ffff", // Aplica un color de fondo al contenedor
              justifyItems: "center",
            }}
          >
            {data.map((item, index) => (
              <Grid item xs={6} sm={3} md={2} lg={2} key={item.id}>
                <Link href={`/${item.id}`} underline="none">
                  <CardCharater
                    img={item.image}
                    name={item.name}
                    sttatus={item.status}
                    grow={(index + 1) * 200}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
          <Hero/>
        </Stack>
      </Stack>
    </>
  );
};

export default DashBoard;
