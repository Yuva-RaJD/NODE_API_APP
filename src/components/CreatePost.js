import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Divider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createPost } from "../utils/PostControl";

const style = {
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: "0 0 5px #c1bcbc",
  paddingX: 1,
  marginX: "10px",
};

function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createPost(formData);
    if (res.status) {
      console.log("post res", res);
      setFormData((prevData) => ({
        ...prevData,
        title: "",
        description: "",
      }));
      alert("post Created");
    } else {
      alert("Something Went Wrong");
    }
  };
  return (
    <Box sx={style}>
      <div>
        <h4>Post your blog</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Title"
            variant="filled"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="filled"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />

          <Button
            variant="contained"
            color="info"
            type="submit"
            sx={{ m: 1, p: 1 }}
          >
            Post
          </Button>
        </Box>
      </form>
      <Divider />
    </Box>
  );
}
export default CreatePost;
