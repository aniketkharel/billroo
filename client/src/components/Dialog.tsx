import * as React from "react";
import { Alert, Snackbar } from "@mui/material";

export default function DialogPop(props: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  content: string;
  severity: string;
}) {
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    props.setOpen(false);
  };

  return (
    <>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity as string} variant="filled" sx={{ width: "100%" }}>
          {props.content}
        </Alert>
      </Snackbar>
    </>
  );
}
