import React from "react";
import { Card, CardContent, CardHeader, List, ListItem, Typography, ListItemText } from "@mui/material";
import GetVersion from "./GetVersion";

const ListOfKnownBugs: React.FC = () => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", flexGrow: 1, marginTop: 2, marginRight: 1, marginBottom: 2, marginLeft: 1 }}>
      <CardHeader title="ListOfKnownBugs" sx={{ textAlign: "center" }} />
      <CardContent sx={{ flexGrow: 1, overflow: "auto", padding: 2 }}>
        <List>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <GetVersion />
          </ListItem>
          <ListItem>
            <Typography sx={{ marginRight: 1 }}>•</Typography>
            <ListItemText primary="The entire app has a scroll bar, which is not intended" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default ListOfKnownBugs;
