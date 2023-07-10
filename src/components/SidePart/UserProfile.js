import {
  Avatar,
  Box,
  Card,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import { getToken } from "../../utils/Common";
import { useEffect, useState } from "react";
import { getUser } from "../../utils/UserControl";

export default function UserProfile() {
  const [userData, setUserData] = useState([]);
  async function getData() {
    const TokenData = getToken();
    if (TokenData.status) {
      const token = TokenData.token;
      const res = await getUser(token);
      console.log("userData", res.data.data);
      setUserData(res.data.data);
    }
    // const res = await getAllPost();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: 1,
        paddingX: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "1px",
        zIndex: 10,
        marginTop: "10px",
        // backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          margin: "5px",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "0 0 5px #c1bcbc",
        }}
      >
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random/800x800/?img=1"
            sx={{ width: 120, height: 120 }}
          />
          <h3 className="text-center">{userData.username}</h3>
          <p className="text-center">{userData.email}</p>
        </div>
      </div>
    </Box>
  );
}
