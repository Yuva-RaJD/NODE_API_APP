import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../../utils/UserControl";
import {
  LoginFormMainBoxStyle,
  LoginFormMainDivStyle,
  LoginFormStyle,
} from "../../styles/SidePart.Styles";

function LoginForm(props) {
  const { handleSignUp, handleCheckLogin } = props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const res = await loginUser(formData);
    console.log(res);
    if (res) {
      handleCheckLogin(true);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        email: "",
        password: "",
      }));
      alert("wrong credentials");
      handleCheckLogin(false);
    }
  };

  return (
    <>
      <Box sx={LoginFormMainBoxStyle}>
        <div style={LoginFormMainDivStyle}>
          <h6>Login </h6>
          <form
            onSubmit={handleLoginForm}
            autoComplete="off"
            style={LoginFormStyle}
          >
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Box>
              <Button
                variant="contained"
                color="info"
                sx={{ mt: 1, p: 1, width: 1 }}
                type="submit"
              >
                Login
              </Button>
            </Box>
            <h6>
              Dont have an account?
              <Button onClick={handleSignUp}>Sign Up</Button>
            </h6>
          </form>
        </div>
      </Box>
    </>
  );
}
export default LoginForm;
