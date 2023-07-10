import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import { SidePanelBoxStle } from "../../styles/SidePart.Styles";

export const SidePanel = () => {
  const hadleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box sx={SidePanelBoxStle} onClick={hadleClick}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hello Reader
            </Typography>
            <Typography color="text.secondary">
              "Welcome to our blog app! Join our vibrant community of readers
              and writers by
              <Button> registering today.</Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
