import React from "react";
import Form from "../components/molecules/Form";
import JokeWraper from "../components/organisms/JokeWraper";
import user, { addJoke } from "../redux/slices/user";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Joke } from "../redux/slices/jokes";

const CustomJokes = () => {
  const userJokes = useSelector((state: RootState) => state.user.ownJokes);
  const dispatch = useDispatch();

  function handleAddJoke(joke: Joke) {
    dispatch(addJoke(joke));
  }

  return (
    <main className="main main_custom">
      <Form
        callback={(joke: Joke) => {
          handleAddJoke(joke);
        }}
      />
      <JokeWraper isStared={false} jokes={userJokes} ownJoke={true} />
    </main>
  );
};

export default CustomJokes;
