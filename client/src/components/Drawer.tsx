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
import { Avatar, IconButton } from "@mui/material";
import Image from "next/image";
import { AddSharp, BookSharp, CategoryRounded, LogoutRounded, Money, QuestionMarkOutlined } from "@mui/icons-material";
import { useUserContext } from "@/user";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { deepPurple, red } from "@mui/material/colors";

const drawerWidth = 180;

export default function ClippedDrawer(props: { children: React.ReactNode }) {
  const { id, changeUser } = useUserContext();
  const router = useRouter();

  const logout = () => {
    changeUser!(0);
    router.push("/");
  };

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
          <Box display={"flex"} flexDirection={"row"} gap={1} alignItems={"center"}>
            <Box>
              <Avatar sx={{ width: 80, height: 32, bgcolor: "deepskyblue" }} variant="rounded">
                {id == 0 ? <QuestionMarkOutlined /> : id}
              </Avatar>
            </Box>
            <Box>
              <IconButton aria-label="logout" onClick={logout} color="warning">
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
              {
                title: "Expenses",
                link: "/expenses",
                icon: <Money />,
                sub: [
                  { title: "Add", link: "/expenses/add", icon: <AddSharp /> },
                  { title: "Daily", link: "/expenses/view", icon: <BookSharp /> },
                ],
              },
              { title: "Categories", link: "/categories", icon: <CategoryRounded /> },
            ].map((text, index) => (
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center", gap: 0 }} key={index}>
                <Box>
                  <ListItem disablePadding>
                    <Link
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "inherit",
                        textTransform: "none",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      href={text.link}
                    >
                      <ListItemButton>
                        <ListItemIcon>{text.icon}</ListItemIcon>
                        <ListItemText primary={text.title} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </Box>
                <Box>
                  <List>
                    {text.sub?.map((su, index) => (
                      <Link
                        style={{
                          display: "flex",
                          textDecoration: "none",
                          color: "inherit",
                          textTransform: "none",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        href={su.link}
                        key={index}
                      >
                        <ListItemButton key={index}>
                          <ListItemIcon>{su.icon}</ListItemIcon>
                          <ListItemText primary={su.title} />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Box>
              </Box>
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
