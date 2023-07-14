import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TvIcon from "@mui/icons-material/Tv";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#FF0000",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/movies") {
      setValue(1);
    } else if (location.pathname === "/series") {
      setValue(2);
    } else if (location.pathname === "/search") {
      setValue(3);
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "black" }}
        label="Trending"
        icon={<WhatshotIcon />}
        onClick={() => handleNavigation("/")}
      />
      <BottomNavigationAction
        style={{ color: "black" }}
        label="Movies"
        icon={<MovieIcon />}
        onClick={() => handleNavigation("/movies")}
      />
      <BottomNavigationAction
        style={{ color: "black" }}
        label="TV Series"
        icon={<TvIcon />}
        onClick={() => handleNavigation("/series")}
      />
      <BottomNavigationAction
        style={{ color: "black" }}
        label="Search"
        icon={<SearchIcon />}
        onClick={() => handleNavigation("/search")}
      />
    </BottomNavigation>
  );
}
