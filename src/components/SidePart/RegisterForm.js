import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../../utils/UserControl";

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
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            margin: "5px",
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "0 0 5px #c1bcbc",
          }}
        >
          <h6>Register And start Posting</h6>
          <form
            style={{
              width: "100%",
              display: "flex",
              gap: "5px",
              flexDirection: "column",
            }}
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
          <p>
            Have and account? <Button onClick={handleSignIn}>Login</Button>
          </p>
        </div>
      </Box>
    </>
  );
}
export default RegisterForm;
