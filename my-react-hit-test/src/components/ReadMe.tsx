import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

const ReadMe: React.FC = () => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", flexGrow: 1, marginTop: 3, marginRight: 5, marginBottom: 3, marginLeft: 5 }}>
      <CardHeader title="ReadMe" sx={{ textAlign: "center" }} />
      <CardContent
        sx={{
          flexGrow: 1,
          overflow: "auto",
          padding: 2,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "16px",
          "& p": {
            textAlign: "left",
            margin: "8px 0",
          },
        }}
      >
        <p>MyReactHitTest is a small web application that allows you to place, move and delete points on a canvas with the mouse. </p>
        <p>
          The idea is more of an example (which you can download from <a href="https://github.com/" title="Linktitle" target="_blank">GitHub</a>) and a small, simple game.<br />If you set the mode to "Hit", a sound is emitted when you hit a point with
          the mouse.
        </p>
      </CardContent>
    </Card>
  );
};

export default ReadMe;
