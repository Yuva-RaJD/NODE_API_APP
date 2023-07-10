import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../../utils/UserControl";
import {
  RegisterFormBox,
  RegisterFormDiv,
  RegisterFormStyle,
} from "../../styles/SidePart.Styles";

function RegisterForm(props) {
  const { handleSignIn } = props;
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    console.log("formSubmit");
    const res = await registerUser(formData);
    console.log(res);
    if (res.status) {
      alert(`Registration Success..Plese Login`);
      handleSignIn();
    } else {
      alert(res.data.message);
    }
  };
  return (
    <>
      <Box sx={RegisterFormBox}>
        <div style={RegisterFormDiv}>
          <h6>Register And start Posting</h6>
          <form
            style={RegisterFormStyle}
            onSubmit={handleRegisterForm}
            autoComplete="off"
          >
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              name="username"
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={handleInputChange}
              required
            />
            <Box
              sx={{
                width: 1,
              }}
            >
              <Button
                variant="contained"
                color="success"
                sx={{ mt: 1, p: 1, width: 1 }}
                type="submit"
              >
                Register
              </Button>
            </Box>
          </form>
          <h6>
            Have and account? <Button onClick={handleSignIn}>Login</Button>
          </h6>
        </div>
      </Box>
    </>
  );
}
export default RegisterForm;
