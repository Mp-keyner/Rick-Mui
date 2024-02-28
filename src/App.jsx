import {  Stack } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Description from "./pages/Description";

const App = () => {
  return (
    <Stack sx={{
      height: '100vh',
      backgroundSize: '30pc',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/:id" element={<Description />} />
      </Routes>
    </BrowserRouter>
    </Stack>
  );
};

export default App;