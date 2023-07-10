import { Box, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function NavBar(props) {
  const { title } = props;
  return (
    <Box
      sx={{
        width: 1,
        height: "70px",
        color: "black",
        position: "fixed",
        top: 0,
        zIndex: 1,
        display: "flex",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 5,
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          //   justifyContent: "space-between",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <MenuBookIcon
          sx={{
            display: { xs: "none", md: "flex" },
            mr: 1,
            backgroundColor: "white",

            alignSelf: "flex-start",
          }}
        />
        <Typography
          variant="h3"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            backgroundColor: "white",
            alignSelf: "center",
            display: { xs: "none", md: "flex" },
            fontFamily: "roboto",
            fontWeight: 1700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
export default NavBar;
