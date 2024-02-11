"use client";

import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function Login() {
  const router = useRouter();
  const [error, seterror] = React.useState<boolean>(false);
  const [userId, setuserId] = React.useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("userId")) {
      return localStorage.getItem("userId");
    }
  });

  const onLogin = () => {
    if (!userId || userId === " ") {
      seterror(true);
    } else {
      localStorage.setItem("userId", userId.toString());
      seterror(false);
      router.push("/expenses");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        sx={{ mb: 2 }}
        title="UserId"
        error={error}
        variant="standard"
        required={true}
        value={userId}
        label="ID"
        onChange={(e) => setuserId(e.target.value)}
      />
      <Button color={"primary"} variant="contained" onClick={onLogin} fullWidth>
        Login
      </Button>
    </Box>
  );
}
