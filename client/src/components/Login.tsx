"use client";

import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function Login() {
  const router = useRouter();
  const [userId, setuserId] = React.useState<string>("");
  const [error, seterror] = React.useState<boolean>(false);

  const onLogin = () => {
    if (!userId || userId === " ") {
      seterror(true);
    } else {
      router.push("/expenses");
      seterror(false);
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
        sx={{ padding: 0, mb: 2 }}
        title="UserId"
        error={error}
        variant="outlined"
        required={true}
        value={userId}
        label="Your ID"
        onChange={(e) => setuserId(e.target.value)}
      />
      <Button color={"secondary"} variant="contained" onClick={onLogin} fullWidth>
        Login
      </Button>
    </Box>
  );
}
