import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, inputAdornmentClasses } from "@mui/material";
// Icons from:
// https://mui.com/material-ui/material-icons/
// and
// https://mui.com/material-ui/icons/
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import SettingsSuggestTwoToneIcon from "@mui/icons-material/SettingsSuggestTwoTone";

import AttachFileTwoToneIcon from "@mui/icons-material/AttachFileTwoTone";
import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";

import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import AnimationTwoToneIcon from "@mui/icons-material/AnimationTwoTone";
import SwipeUpTwoToneIcon from "@mui/icons-material/SwipeUpTwoTone";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";

import GetVersion from "./components/GetVersion";
import StatusBar from "./components/StatusBar";
import ReadMe from "./components/ReadMe";
import ChangeLog from "./components/ChangeLog";
import ListOfKnownBugs from "./components/ListOfKnownBugs";

// Sound from:
// https://pixabay.com/de/sound-effects/search/beeps/
const beepSound = new Audio("90s-game-ui-6-185099.mp3");
const nBeepSound = new Audio("negative_beeps-6008.mp3");
const pushSound = new Audio("push-stone-statue-1-188171.mp3");
const setSound = new Audio("short-beep-tone-47916.mp3");
const deleteSound = new Audio("delete-harp-255-49324.mp3");

import "./App.css";

function App() {
  const [reportAnchorEl, setReportAnchorEl] = React.useState<null | HTMLElement>(null);
  const [adminAnchorEl, setAdminAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  const [mode, setMode] = React.useState("None");
  interface Point {
    x: number;
    y: number;
  }

  /* #region general Menu Functions */
  const handleReportMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    stopDeleteSound();
    setReportAnchorEl(event.currentTarget);
  };

  const handleAdminMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    stopDeleteSound();
    setAdminAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    stopDeleteSound();
    setReportAnchorEl(null);
    setAdminAnchorEl(null);
  };
  /* #endregion */

  /* #region Menu Events */
  const handleMenuReadMe = () => {
    setReportAnchorEl(null);
    setMode("None");
    setActiveSection("ReadMe");
  };

  const handleMenuChangeLog = () => {
    setReportAnchorEl(null);
    setMode("None");
    setActiveSection("ChangeLog");
  };

  const handleMenuListOfKnownBugs = () => {
    setReportAnchorEl(null);
    setMode("None");
    setActiveSection("ListOfKnownBugs");
  };

  const handleMenuSet = () => {
    setReportAnchorEl(null);
    setAdminAnchorEl(null);

    setActiveSection("");
    setMode("Set");
    console.log("Set");
  };

  const handleMenuMove = () => {
    setReportAnchorEl(null);
    setAdminAnchorEl(null);

    setActiveSection("");
    setMode("Move");
    console.log("Move");
  };

  const handleMenuHit = () => {
    setReportAnchorEl(null);
    setAdminAnchorEl(null);

    setActiveSection("");
    setMode("Hit");
    console.log("Hit");
  };

  const handleMenuDelete = () => {
    setReportAnchorEl(null);
    setAdminAnchorEl(null);

    clearPoints();
    console.log("Delete");
  };
  /* #endregion */

  const stopDeleteSound = () => {
    deleteSound.pause();
    deleteSound.currentTime = 0;
  };

  /* #region Point actions */
  const [points, setPoints] = React.useState<Point[]>([]);
  const [selectedPointIndex, setSelectedPointIndex] = React.useState<number | null>(null);

  // handleMouseDown Function
  const handleMouseDown = (index: number) => (event: React.MouseEvent<HTMLDivElement>) => {
    stopDeleteSound();
    if (mode === "Move") {
      setSelectedPointIndex(index);
      event.stopPropagation(); // Prevent further events from triggering

      // Play sound
      pushSound.play().catch((error) => console.error("Error playing sound:", error));
    }
  };

  // Mouse move event handler
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (selectedPointIndex !== null) {
      const rect = event.currentTarget.getBoundingClientRect();
      const newPoint: Point = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      setPoints((prevPoints) => prevPoints.map((point, index) => (index === selectedPointIndex ? newPoint : point)));
    }
  };

  // Mouse-up event handler
  const handleMouseUp = () => {
    if (selectedPointIndex !== null) {
      setSelectedPointIndex(null);
      // Stop the sound and reset it
      pushSound.pause();
      pushSound.currentTime = 0;
    }
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLDivElement>) => {
    stopDeleteSound();
    const rect = event.currentTarget.getBoundingClientRect();
    const clickPoint: Point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    if (mode === "Set") {
      setPoints((prevPoints) => [...prevPoints, clickPoint]);
      // Stop the sound and reset it
      setSound.pause();
      setSound.currentTime = 0;
      setSound.play().catch((error) => console.error("Error playing sound:", error));
    } else if (mode === "Hit") {
      const hitIndex = points.findIndex(
        (p) => Math.sqrt(Math.pow(p.x - clickPoint.x, 2) + Math.pow(p.y - clickPoint.y, 2)) <= 7.5 // Assumption: A point is considered hit if the click occurs within a radius of 7.5 units
      );
      if (hitIndex !== -1) {
        console.log(`Point ${hitIndex} hit!`);
        // comment in if a specific point should be deleted
        //setPoints(points => points.filter((_, index) => index !== hitIndex));
        beepSound.play().catch((error) => console.error("Error playing sound:", error));
        console.log(beepSound.src);
      } else {
        console.log("No point hit!");
        nBeepSound.play().catch((error) => console.error("Error playing sound:", error));
        console.log(nBeepSound.src);
      }
    }
  };

  const clearPoints = () => {
    deleteSound.play().catch((error) => console.error("Error playing sound:", error));
    setPoints([]);
  };
  /* #endregion */

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" onClick={handleReportMenuClick} size="large">
              <FolderTwoToneIcon sx={{ marginRight: "8px" }} />
              <Typography>File</Typography>
            </IconButton>

            <Menu anchorEl={reportAnchorEl} open={Boolean(reportAnchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuReadMe}>
                <ListItemIcon>
                  <AttachFileTwoToneIcon />
                </ListItemIcon>
                <ListItemText>ReadMe</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuChangeLog}>
                <ListItemIcon>
                  <ListAltTwoToneIcon />
                </ListItemIcon>
                <ListItemText>ChangeLog</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuListOfKnownBugs}>
                <ListItemIcon>
                  <HealingTwoToneIcon />
                </ListItemIcon>
                <ListItemText>List of known Bugs</ListItemText>
              </MenuItem>
            </Menu>

            <IconButton color="inherit" onClick={handleAdminMenuClick} size="large">
              <SettingsSuggestTwoToneIcon sx={{ marginRight: "8px" }} />
              <Typography>Mode</Typography>
            </IconButton>

            <Menu anchorEl={adminAnchorEl} open={Boolean(adminAnchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuSet}>
                <ListItemIcon>
                  <CheckTwoToneIcon />
                </ListItemIcon>
                <ListItemText>Set</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuMove} disabled={false}>
                <ListItemIcon>
                  <AnimationTwoToneIcon />
                </ListItemIcon>
                <ListItemText>Move</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuHit}>
                <ListItemIcon>
                  <SwipeUpTwoToneIcon />
                </ListItemIcon>
                <ListItemText>Hit</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuDelete}>
                <ListItemIcon>
                  <HighlightOffTwoToneIcon />
                </ListItemIcon>
                <ListItemText>Delete</ListItemText>
              </MenuItem>
            </Menu>
          </div>

          {/* Title absolutely centered in the AppBar */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              position: "absolute",
              right: "11%",
              marginLeft: "auto",
            }}
          >
            MyReactHitTest
          </Typography>

          {/* Empty element to keep balance on the right side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            {/* Additional icons or elements could be added here if desired */}
          </div>
          <GetVersion />
        </Toolbar>
      </AppBar>
      <div>
        {activeSection === "ReadMe" && <ReadMe />}
        {activeSection === "ChangeLog" && <ChangeLog />}
        {activeSection === "ListOfKnownBugs" && <ListOfKnownBugs />}
      </div>

      {/* Main area for displaying and interacting with points */}
      <div
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleCanvasClick}
        style={{
          flexGrow: 1,
          cursor: mode === "Set" ? "pointer" : mode === "Move" ? "move" : "default",
          position: "relative",
          backgroundColor: "#f0f0f0",
        }}
      >
        {/* Draw the points here */}
        {points.map((point, index) => (
          <div
            key={index}
            onMouseDown={mode === "Move" ? handleMouseDown(index) : undefined} // handleMouseDown only in Move mode
            style={{
              position: "absolute",
              left: point.x - 7.5,
              top: point.y - 7.5,
              width: 15,
              height: 15,
              backgroundColor: "red",
              borderRadius: "50%",
              cursor: mode === "Move" ? "grabbing" : "pointer", // Cursor changes
            }}
          ></div>
        ))}
      </div>

      <StatusBar mode={mode} />
    </div>
  );
}

export default App;
