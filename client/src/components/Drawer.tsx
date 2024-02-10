"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, IconButton, Link, Typography } from "@mui/material";
import Image from "next/image";
import { CategoryRounded, LogoutRounded, Money } from "@mui/icons-material";
import { blue, deepOrange } from "@mui/material/colors";

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
          }}
          variant="regular"
        >
          <Image src={"/logo.svg"} width={90} height={38} alt="logo" />
          <Typography variant="caption" color={blue[200]} fontStyle={"italic"}>
            {new Date().toDateString()}
          </Typography>
          <Box display={"flex"} flexDirection={"row"} gap={1} alignItems={"center"}>
            <Box>
              <Avatar sx={{ width: 28, height: 28, bgcolor: "gray" }} variant="circular">
                B
              </Avatar>
            </Box>
            <Box>
              <IconButton aria-label="logout" color={"inherit"}>
                <LogoutRounded />
              </IconButton>
            </Box>
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
              { title: "Expenses", link: "/expenses", icon: <Money /> },
              { title: "Category", link: "/category", icon: <CategoryRounded /> },
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
                    <ListItemIcon>{text.icon}</ListItemIcon>
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
