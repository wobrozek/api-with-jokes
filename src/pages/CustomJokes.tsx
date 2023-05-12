import React from "react";
import Form from "../components/molecules/Form";
import JokeWraper from "../components/molecules/JokeWraper";
import user from "../redux/slices/user";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Joke } from "../redux/slices/jokes";

const CustomJokes = () => {
  const userJokes = useSelector((state: RootState) => user.ownJokes);
  const dispatch = useDispatch();

  const addJoke = (joke: Joke) => {
    dispatch(addJoke(joke));
  };

  return (
    <main>
      <Form callback={addJoke} />
      <JokeWraper jokes={userJokes} isStared={null} />
    </main>
  );
};

export default CustomJokes;
