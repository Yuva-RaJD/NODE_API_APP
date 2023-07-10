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

import Typography from "@mui/material/Typography";
import { getAllPost } from "../../utils/PostControl";
import { useEffect, useState } from "react";
import { BottomPartStyle } from "../../styles/BottomPart.Styles";

export default function BottomBlogs() {
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
    <Box sx={BottomPartStyle}>
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
