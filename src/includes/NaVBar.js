import { Box, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavBarBoxStyles } from "../styles/NavBar.Styles";

function NavBar(props) {
  const { title } = props;
  return (
    <Box sx={NavBarBoxStyles}>
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
