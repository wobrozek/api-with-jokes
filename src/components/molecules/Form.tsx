import { Select, Select, TextField, MenuItem } from "@mui/material";
import React from "react";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const form = (props: Props) => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <form onSubmit={(e) => props.handleSubmit}>
      <TextField label="Setup" />
      <TextField label="Punch Line" />

      <Select value={category} label="Category" onChange={handleChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </form>
  );
};

export default form;
