import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getAllPost } from "../../utils/PostControl";
import { useEffect, useState } from "react";

const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 800,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: "5px",
  //   boxShadow: 24,
  //   p: 4,
  marginTop: "10px",
  boxShadow: "0 0 5px #c1bcbc",
  paddingX: "10px",
  marginX: "10px",
  height: "600px",
  overflow: "scroll",
  marginBottom: "30px",
};

export default function BottomBlogs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [posts, setPosts] = useState([]);

  async function getData() {
    const res = await getAllPost();
    if (res.status) {
      setPosts(res.posts.data.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box sx={style}>
      <ListSubheader>{"check all Blogs here...."}</ListSubheader>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        overflow="scroll"
      >
        {posts.map((post) => (
          <Card sx={{ maxWidth: 345 }} key={`item-${post.id}`}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={`https://source.unsplash.com/random/800x800/?img=${post.id}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxBlockSize: "30ch" }}
              >
                {post.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
