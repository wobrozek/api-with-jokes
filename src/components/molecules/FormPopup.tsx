import React, { useState } from "react";
import { Joke } from "../../redux/slices/jokes";
import { AnyAction } from "@reduxjs/toolkit";
import { Dialog, DialogContent } from "@mui/material";
import Form from "./Form";

type Props = {
  joke: Joke;
  handleSubmit: (joke: Joke) => void;
  handleClick: () => void;
  open: boolean;
};

const FormPopup = (props: Props) => {
  return (
    <Dialog onClose={props.handleClick} open={props.open}>
      <DialogContent>
        <Form callback={props.handleSubmit} defaultValue={props.joke}></Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormPopup;
