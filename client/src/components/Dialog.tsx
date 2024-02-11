import * as React from "react";
import { Alert, AlertColor, AlertProps, AlertPropsColorOverrides, Snackbar } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

export default function DialogPop(props: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  content: string;
  severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
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
        <Alert onClose={handleClose} severity={props.severity || "success"} variant="filled" sx={{ width: "100%" }}>
          {props.content}
        </Alert>
      </Snackbar>
    </>
  );
}
