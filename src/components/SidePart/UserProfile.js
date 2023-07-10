import { Avatar, Box } from "@mui/material";
import { getToken } from "../../utils/Common";
import { useEffect, useState } from "react";
import { getUser } from "../../utils/UserControl";
import {
  UserProfileBoXStyle,
  UserProfileDivStyle,
} from "../../styles/SidePart.Styles";

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
    <Box sx={UserProfileBoXStyle}>
      <div style={UserProfileDivStyle}>
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
