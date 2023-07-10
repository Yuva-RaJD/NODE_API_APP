import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Box, Button } from "@mui/material";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { getAllPost } from "../../utils/PostControl";
import { useEffect, useState } from "react";
import { Description } from "@mui/icons-material";

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
  marginTop: "15px",
  boxShadow: "0 0 5px #c1bcbc",
  paddingX: "10px",
  marginX: "10px",
  marginBottom: "15px",
};

export default function BlogList(props) {
  const { handleBlogView } = props;
  // console.log(getAllPost());
  const [posts, setPosts] = useState([]);

  // console.log("at home", res);

  async function getData() {
    const res = await getAllPost();
    if (res.status) {
      // console.log("home", res.posts.data.data);
      setPosts(res.posts.data.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box sx={style}>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        <ListSubheader>{"check all Blogs here...."}</ListSubheader>

        {posts.map((post) => (
          <ListItem
            key={`item-${post.id}`}
            onClick={() => {
              handleBlogView(post.id);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            sx={{
              cursor: "pointer",
            }}
          >
            <ListItemText primary={`${post.title} `} secondary={post.slug} />
            <Button
              startIcon={<NorthWestIcon />}
              onClick={() => {
                handleBlogView(post.id);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            ></Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
