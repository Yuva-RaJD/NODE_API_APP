import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { getSinglePost } from "../../utils/PostControl";
import { useEffect, useState } from "react";

function Blogs(props) {
  const { id } = props;
  const [posts, setPosts] = useState([]);

  async function getData() {
    const res = await getSinglePost(id);
    if (res.status) {
      // console.log("home", res.posts.data.data);
      setPosts(res.posts.data.data);
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <Box
      sx={{
        height: "100%",
        paddingX: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "1px",
        zIndex: 10,
        marginTop: "10px",
      }}
    >
      <div
        className="mb-2"
        style={{
          width: "100%",
          height: "100%",
          padding: "10px",
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
          margin: "5px",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "0 0 5px #c1bcbc",
        }}
      >
        <p className="text-start text-secondary bg-light ps-3 rounded text-dark">
          " Begin your adventure today. Start exploring our blog and let your
          imagination soar!......."
        </p>
        <Card sx={{ display: "flex", boxShadow: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {posts.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {posts.description}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image={`https://source.unsplash.com/random/800x800/?img=${posts.id}`}
            alt="blog-post"
          />
        </Card>
        <div className="mb-0">
          {/* <p className="text-start mb-0">eplore your interesting blogs....</p> */}
          <p>......</p>
          {/* <div className="  w-50"></div> */}
        </div>
      </div>
    </Box>
  );
}
export default Blogs;
