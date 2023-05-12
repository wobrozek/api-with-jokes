import React from "react";
import Form from "../components/molecules/Form";
import JokeWraper from "../components/molecules/JokeWraper";
import user from "../redux/slices/user";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const CustomJokes = () => {
  const userJokes = useSelector((state: RootState) => user.ownJokes);

  return (
    <main>
      <Form />
      <JokeWraper jokes={userJokes} />
    </main>
  );
};

export default CustomJokes;
