import axios from "axios";
import { getToken } from "./Common";
import { RestaurantRounded } from "@mui/icons-material";

//@allowed Origin
//LOCAL HOST
const BASE_URL = "http://localhost:5500";

//GET posts
//@no authorization needed
export const getAllPost = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/posts/`);
    return {
      posts: res,
      status: true,
    };
  } catch (error) {
    return {
      posts: "",
      status: false,
    };
  }
};

//GET single posts
//@no authorization needed
export const getSinglePost = async (id = 1) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/posts/${id}`);
    return {
      posts: res,
      status: true,
    };
  } catch (error) {
    return {
      posts: "",
      status: false,
    };
  }
};

//POST create posts
//@token authorization needed
export const createPost = async (data) => {
  const token = getToken().token;
  try {
    const res = await axios.post(`${BASE_URL}/api/posts/`, data, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return {
      posts: res.data,
      status: true,
    };
  } catch (error) {
    return {
      posts: "",
      status: false,
    };
  }
};

//PUT update posts
//@token authorization needed
export const updatePost = () => {
  return true;
};

//DELETE delete posts
//@token authorization needed
export const deletePost = () => {
  return true;
};
