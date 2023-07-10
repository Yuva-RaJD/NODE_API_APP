import { Button } from "@mui/material";
import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      <Button
        variant="contained"
        color="warning"
        onClick={scrollToTop}
        sx={{
          borderRadius: 70,
          width: "fit-content",
        }}
      >
        <ArrowUpwardIcon />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;
