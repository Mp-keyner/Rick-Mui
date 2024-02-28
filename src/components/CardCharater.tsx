import React, { useEffect, useState } from "react";
import {
 Card,
 CardActionArea,
 CardContent,
 CardMedia,
 Typography,
 Slide,
 Grow,
} from "@mui/material";

interface CardCharaterI {
 img: string;
 name: string;
 sttatus: string;
 grow: number;
}

const CardCharater = ({
 img = "https://images.pexels.com/photos/18968280/pexels-photo-18968280/free-photo-of-mar-amanecer-naturaleza-puesta-de-sol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 name,
 sttatus,
 grow,
}: CardCharaterI) => {
 const [checked, setChecked] = useState(false);
 const truncatedName = name.length > 15 ? `${name.substring(0, 15)}...` : name;

 useEffect(() => {
    // Inicia la animación después de un tiempo específico (por ejemplo, 500ms)
    const timer = setTimeout(() => {
      setChecked(true);
    }, 500); // Ajusta este valor según tus necesidades

    return () => {
      clearTimeout(timer);
    };
 }, []);

 return (
    <>
      <Grow  in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: grow } : {})} mountOnEnter unmountOnExit>
        <Card sx={{ maxWidth: 240, margin: 1 }}>
          <CardActionArea>
            <CardMedia
              draggable={false}
              component="img"
              height="140"
              image={img}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                 whiteSpace: "nowrap",
                 overflow: "hidden",
                 textOverflow: "ellipsis",
                 maxWidth: 150,
                 display: "inline-block",
                }}
              >
                {truncatedName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grow>
    </>
 );
};

export default CardCharater;
