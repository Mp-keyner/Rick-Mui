import {
    AppBar,
    Box,
    Button,
    IconButton,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import SearchIcon from "@mui/icons-material/Search";
  
  const Nav = () => {
    return (
      <>
        <AppBar
          position="static"
          color="primary"
          sx={{
            padding: "0 1.5pc",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              height: "4.5pc",
            }}
          >
            {/* <Stack
              direction="row"
              alignItems="center"
              sx={{
                justifyContent: "space-between",
                background: "#2626",
              }}
            >
              <Button color="inherit">Login</Button>
              <Typography variant="h6" component="div" sx={{ background: "red" }}>
                News
              </Typography>
            </Stack> */}
            <Typography variant="h5">Api de Rick And Morty con react y MUI</Typography>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, background: "red" }}
            >
              <MenuIcon />
            </IconButton> */}
            {/* <Stack direction="row" alignItems="center" gap="2pc">
              <Stack direction="row" alignItems="center" gap="2pc">
                <Button variant="text" color="secondary">
                  <Typography >MOTOCICLETAS</Typography>
                </Button>
                <Button variant="text">
                  <Typography >FINANCIACIÓN</Typography>
                </Button>
                <Button variant="text">
                  <Typography >SERVICIOS</Typography>
                </Button>
                <Button variant="text">
                  <Typography >NOTICIAS</Typography>
                </Button>
                <Button variant="text">
                  <Typography >SERVICIO AL CLIENTE</Typography>
                </Button>
              </Stack>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <SearchIcon color="primary" fontSize="3pc" />
              </IconButton>
            </Stack> */}
          </Toolbar>
        </AppBar>
      </>
    );
  };
  
  export default Nav;