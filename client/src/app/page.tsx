import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "@/components/ProTip";
import Login from "@/components/Login";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" component="h4" sx={{ mb: 2 }}>
            Billroo - Your Budget Manger
          </Typography>
          <Login />
          <ProTip />
        </Box>
      </Box>
    </Container>
  );
}
