import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

//nav bar
import NavBar from "../includes/NaVBar";

//Left side part components
import UserProfile from "../components/SidePart/UserProfile";
import CreatePost from "../components/SidePart/CreatePost";
import ProfileSetting from "../components/SidePart/ProfileSetting";
import LoginForm from "../components/SidePart/LoginForm";
import RegisterForm from "../components/SidePart/RegisterForm";
import { SidePanel } from "../components/SidePart/SidePanel";

//main/ middle component
import Blogs from "../components/mainPart/BlogView";
import BlogList from "../components/mainPart/BlogLists";

//bottom setion
import BottomBlogs from "../components/BottomPart/BottomBlogs";

//scroll to top button
import ScrollToTopButton from "../components/ScrollTopButton";
//login condition
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
      <NavBar title={"BLOG post"} />
      <div className="backGround">
        <Grid container sx={{ width: "100%", height: 1 }}>
          {/* side part  */}
          <Grid
            className="innerShadow"
            item
            lg={3}
            container
            direction="column"
            sx={{
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
            {Logged ? (
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
                  }}
                >
                  <ProfileSetting handleCheckLogin={handleCheckLogin} />
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  item
                  lg={4}
                  sx={{
                    width: 1,
                  }}
                  gridRow={12}
                >
                  <SidePanel />
                </Grid>
                <Grid
                  item
                  lg={2}
                  sx={{
                    width: 1,
                  }}
                ></Grid>
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
