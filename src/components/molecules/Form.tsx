import { TextField, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { ChangeEventHandler } from "react";
import jokes, { Joke } from "../../redux/slices/jokes";
import { AnyAction } from "@reduxjs/toolkit";

const form = (
  callback: (joke: Joke) => AnyAction,
  defaultValue: Joke = { delivery: "", punchline: "", category: "dark" }
) => {
  const [category, setCategory] = React.useState("");
  const [delivery, setDelivery] = React.useState("");
  const [punchline, setPunchline] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleChangeDelivery = (
    event: ChangeEventHandler<HTMLInputElement>
  ) => {
    setDelivery(event.target.value as string);
  };

  const handleChangePunchline = (
    event: ChangeEventHandler<HTMLInputElement>
  ) => {
    setPunchline(event.target.value as string);
  };

  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
    e.perventDefault();

    const joke: Joke = {
      category: category,
      delivery: delivery,
      punchline: punchline,
    };

    callback(joke);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="delivery"
        value={delivery}
        defaultValue={defaultValue?.delivery}
        onChange={handleChangeDelivery}
      />
      <TextField
        label="Punch Line"
        value={punchline}
        defaultValue={defaultValue?.punchline}
        onChange={handleChangePunchline}
      />

      <Select
        value={category}
        label="Category"
        onChange={handleChange}
        defaultValue={defaultValue?.category}
      >
        <MenuItem value={"Programming"}>Programming</MenuItem>
        <MenuItem value={"Miscellaneous"}>Miscellaneous</MenuItem>
        <MenuItem value={"Dark"}>Dark</MenuItem>
        <MenuItem value={"Pun"}>Pun</MenuItem>
        <MenuItem value={"Spooky"}>Spooky</MenuItem>
      </Select>
    </form>
  );
};

export default form;
