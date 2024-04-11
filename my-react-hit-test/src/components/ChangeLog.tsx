import React from "react";
import { Card, CardContent, CardHeader, List, ListItem, Typography, ListItemText } from "@mui/material";

const ChangeLog: React.FC = () => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", flexGrow: 1, marginTop: 2, marginRight: 1, marginBottom: 2, marginLeft: 1 }}>
      <CardHeader title="ChangeLog" sx={{ textAlign: "center" }} />
      <CardContent sx={{ flexGrow: 1, overflow: "auto", padding: 2 }}>
        <List>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="Version 1.0.3 Fix formatting in README.md and update sound source comments in App.tsx." />
          </ListItem>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="Version 1.0.2 Fix ReadMe component styling" />
          </ListItem>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="Version 1.0.1 Some small bug fixes" />
          </ListItem>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="Version 1.0.0 First working version with all functionality" />
          </ListItem>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="Version 0.0.4 Add nBeepSound if no hit" />
          </ListItem>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="Version 0.0.3 Add the hit functionality" />
          </ListItem>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="Version 0.0.2 Just testing Jenkins" />
          </ListItem>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="Version 0.0.1 It is now possible to set and delete points" />
          </ListItem>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="Version 0.0.0 Start version" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default ChangeLog;
