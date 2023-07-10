import { Box, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {
  NavBarBoxStyles,
  NavBarInnerBoxStyle,
  NavBarTitle,
} from "../styles/NavBar.Styles";

function NavBar(props) {
  const { title } = props;
  return (
    <Box sx={NavBarBoxStyles}>
      <Box sx={NavBarInnerBoxStyle}>
        <MenuBookIcon
          sx={{
            display: { xs: "none", md: "flex" },
            mr: 1,
            backgroundColor: "white",
            alignSelf: "flex-start",
          }}
        />
        <Typography variant="h3" noWrap component="a" href="/" sx={NavBarTitle}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
export default NavBar;
