"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Link } from "@mui/material";
import { blue, blueGrey, deepOrange } from "@mui/material/colors";
import Image from "next/image";

const drawerWidth = 180;

export default function ClippedDrawer(props: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#122543",
          }}
          variant="regular"
        >
          <Image src={"/logo.svg"} width={90} height={38} alt="logo" />
          <Box>
            <Avatar sx={{ bgcolor: "gray" }} variant="circular">
              N
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { title: "Expenses", link: "/expenses" },
              { title: "Home", link: "/" },
            ].map((text, index) => (
              <ListItem key={text.title} disablePadding>
                <ListItemButton>
                  <Link
                    href={text.link}
                    display={"flex"}
                    color={"inherit"}
                    underline="none"
                    textTransform={"none"}
                    align="center"
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text.title} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
