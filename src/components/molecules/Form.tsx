import { TextField, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { ChangeEventHandler } from "react";
import { useDispatch } from "react-redux";
import jokes, { Joke } from "../../redux/slices/jokes";
import { addJoke } from "../../redux/slices/user";

const form = () => {
  const [category, setCategory] = React.useState("");
  const [delivery, setDelivery] = React.useState("");
  const [punchline, setPunchline] = React.useState("");
  const dispatch = useDispatch();

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

    dispatch(addJoke(joke));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="delivery"
        value={delivery}
        onChange={handleChangeDelivery}
      />
      <TextField
        label="Punch Line"
        value={punchline}
        onChange={handleChangePunchline}
      />

      <Select
        value={category}
        label="Category"
        onChange={handleChange}
        defaultValue={"Dark"}
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
