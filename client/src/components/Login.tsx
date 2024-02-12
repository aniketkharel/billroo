"use client";

import { useUserContext } from "@/user";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function Login() {
  const { id, changeUser } = useUserContext();
  const router = useRouter();
  const [error, seterror] = React.useState<boolean>(false);
  const [userId, setuserId] = React.useState(() => {
    return id || undefined;
  });

  const onLogin = () => {
    if (!userId) {
      seterror(true);
    } else {
      changeUser!(userId);
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
        onChange={(e) => setuserId(parseInt(e.target.value))}
      />
      <Button color={"primary"} variant="contained" onClick={onLogin} fullWidth>
        Login
      </Button>
    </Box>
  );
}
