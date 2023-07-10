import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../../utils/UserControl";

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
  boxShadow: "0 0 5px #c1bcbc",
  // paddingX: "10px",
  paddingX: 1,
  marginX: "10px",
};

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
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            margin: "5px",
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "0 0 5px #c1bcbc",
          }}
        >
          <h3>Login </h3>
          <form
            onSubmit={handleLoginForm}
            autoComplete="off"
            style={{
              width: "100%",
              display: "flex",
              gap: "5px",
              flexDirection: "column",
            }}
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
            <p>
              Dont have an account?
              <Button onClick={handleSignUp}>Sign Up</Button>
            </p>
          </form>
        </div>
      </Box>
    </>
  );
}
export default LoginForm;
