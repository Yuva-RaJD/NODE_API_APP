import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getSinglePost } from "../../utils/PostControl";
import { useEffect, useState } from "react";
import { MainBoxStyle, subDivStyle } from "../../styles/MainPart.style";

function Blogs(props) {
  const { id } = props;
  const [posts, setPosts] = useState([]);

  //fetch single post data here
  //no Auth

  useEffect(() => {
    async function getData() {
      const res = await getSinglePost(id);
      if (res.status) {
        setPosts(res.posts.data.data);
      }
    }
    getData();
  }, [id]);

  return (
    <Box sx={MainBoxStyle}>
      <div className="mb-2" style={subDivStyle}>
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
          <p>......</p>
        </div>
      </div>
    </Box>
  );
}
export default Blogs;
