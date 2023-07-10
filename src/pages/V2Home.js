import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NavBar from "../includes/NaVBar";
import UserProfile from "../components/UserProfile";
import CreatePost from "../components/CreatePost";
import ProfileSetting from "../components/ProfileSetting";
import Blogs from "../components/mainPart/BlogView";
import BlogList from "../components/mainPart/BlogLists";
import BottomBlogs from "../components/BottomPart/BottomBlogs";
import ScrollToTopButton from "../components/ScrollTopButton";
import LoginForm from "../components/SidePart/LoginForm";
import RegisterForm from "../components/SidePart/RegisterForm";
import { isLoggedIn } from "../utils/Common";

function HomePage() {
  const [signUp, setSignUp] = useState(false);
  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  const [Logged, setLogged] = useState(true);

  const handleCheckLogin = (res) => {
    setLogged(res);
  };

  const [id, setId] = useState(1);
  const handleBlogView = (i) => {
    console.log(i);
    setId(i);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <>
      <ScrollToTopButton />
      <div className="backGround">
        <NavBar title={"BLOG post"} />
        <Grid container sx={{ width: "100%", height: 1, mt: "70px" }}>
          {/* side part  */}
          <Grid
            className="innerShadow"
            item
            lg={3}
            container
            direction="column"
            sx={{
              // backgroundColor: "red",
              height: "100%",
            }}
          >
            <Grid
              item
              lg={2}
              sx={{
                width: 1,
              }}
            >
              {Logged ? (
                <UserProfile />
              ) : signUp ? (
                <LoginForm
                  handleSignUp={handleSignUp}
                  handleCheckLogin={handleCheckLogin}
                />
              ) : (
                <RegisterForm handleSignIn={handleSignUp} />
              )}
            </Grid>
            {Logged && (
              <>
                <Grid
                  item
                  lg={4}
                  sx={{
                    width: 1,
                  }}
                >
                  <CreatePost />
                </Grid>
                <Grid
                  item
                  lg={2}
                  sx={{
                    width: 1,
                    // backgroundColor: "red",
                  }}
                >
                  <ProfileSetting handleCheckLogin={handleCheckLogin} />
                </Grid>
              </>
            )}

            {/* main part */}
          </Grid>
          <Grid item lg={9} container sx={{ width: "100%", height: 1 }}>
            <Grid item lg={12}>
              <Blogs id={id} />
            </Grid>
            <Grid item lg={12}>
              <BlogList handleBlogView={handleBlogView} />
            </Grid>
            {/* bottom part  */}
            <Grid item>
              <BottomBlogs />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default HomePage;
