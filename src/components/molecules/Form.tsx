import { TextField, MenuItem, Button } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { ChangeEvent, useEffect } from "react";
import { Joke } from "../../redux/slices/jokes";

type Props = {
  callback: (joke: Joke) => void;
  defaultValue?: Joke;
};

const Form = (props: Props) => {
  const { callback, defaultValue } = props;
  const [category, setCategory] = React.useState("Dark");
  const [delivery, setDelivery] = React.useState("");
  const [punchline, setPunchline] = React.useState("");
  const [error, setError] = React.useState(false);

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

    if (delivery === "" || punchline === "") {
      setError(true);
      return;
    }

    const joke: Joke = {
      category: category,
      setup: delivery,
      delivery: punchline,
    };

    // add id if edit
    if (props.defaultValue?.id != undefined) {
      joke.id = props.defaultValue.id;
    }

    callback(joke);
  };

  useEffect(() => {
    if (defaultValue !== undefined) {
      setDelivery(defaultValue?.setup);
      setPunchline(defaultValue?.delivery);
      setCategory(defaultValue?.category);
    }
  }, [defaultValue]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="setup"
        value={delivery}
        error={delivery === "" && error}
        onChange={handleChangeDelivery}
      />
      <TextField
        label="Punch Line"
        value={punchline}
        error={punchline === "" && error}
        onChange={handleChangePunchline}
      />

      <Select value={category} label="Category" onChange={handleChange}>
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
