import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { getToken, removeToken } from "../../utils/Common";
import { useEffect, useState } from "react";
import { getUser } from "../../utils/UserControl";
import { SettingBoxStyle } from "../../styles/SidePart.Styles";

function ProfileSetting({ handleCheckLogin }) {
  const [userData, setUserData] = useState([]);

  const handleLogout = () => {
    console.log("logout");
    removeToken();
    handleCheckLogin(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <Box sx={SettingBoxStyle}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>
            <h6>Settings</h6>
            <SettingsIcon />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div>
                <h6>user Name</h6>
              </div>
            </AccordionSummary>
            <AccordionDetails>{userData.username}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div>
                <h6>user Email</h6>
              </div>
            </AccordionSummary>
            <AccordionDetails>{userData.email}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </AccordionSummary>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
export default ProfileSetting;
