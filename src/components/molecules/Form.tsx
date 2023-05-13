import { TextField, MenuItem, Button } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { ChangeEvent } from "react";
import { Joke } from "../../redux/slices/jokes";

type Props = {
  callback: (joke: Joke) => void;
  defaultValue?: Joke;
};

const Form = (props: Props) => {
  const { callback, defaultValue } = props;
  const [category, setCategory] = React.useState("");
  const [delivery, setDelivery] = React.useState("");
  const [punchline, setPunchline] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleChangeDelivery = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDelivery(event.target.value as string);
  };

  const handleChangePunchline = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPunchline(event.target.value as string);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const joke: Joke = {
      category: category,
      setup: delivery,
      delivery: punchline,
    };
    callback(joke);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="delivery"
        value={delivery}
        defaultValue={defaultValue?.setup}
        onChange={handleChangeDelivery}
      />
      <TextField
        label="Punch Line"
        value={punchline}
        defaultValue={defaultValue?.delivery}
        onChange={handleChangePunchline}
      />

      <Select
        value={category}
        label="Category"
        onChange={handleChange}
        defaultValue={defaultValue?.category || "Dark"}
      >
        <MenuItem value={"Programming"}>Programming</MenuItem>
        <MenuItem value={"Miscellaneous"}>Miscellaneous</MenuItem>
        <MenuItem value={"Dark"}>Dark</MenuItem>
        <MenuItem value={"Pun"}>Pun</MenuItem>
        <MenuItem value={"Spooky"}>Spooky</MenuItem>
      </Select>

      <Button type="submit">send</Button>
    </form>
  );
};

export default Form;
