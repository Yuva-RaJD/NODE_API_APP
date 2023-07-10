import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";

const style = {
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: "0 0 5px #c1bcbc",
  paddingX: 1,
  marginX: "10px",
  marginTop: "30px",
  position: "fixed",
  bottom: "20px",
};

export const SidePanel = () => {
  const hadleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box sx={style} onClick={hadleClick}>
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
