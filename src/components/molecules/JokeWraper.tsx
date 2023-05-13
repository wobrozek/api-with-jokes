import React from "react";
import { Joke } from "../../redux/slices/jokes";
import JokeBox from "../organisms/JokeBox";

type Props = {
  jokes: Joke[];
  isStared: Boolean;
  ownJoke: Boolean;
};

const JokeWraper = (props: Props) => {
  return (
    <section>
      {props.jokes?.length != 0 &&
        props.jokes?.map((joke) => (
          <JokeBox
            joke={joke}
            key={joke.id}
            isStared={props.isStared}
            ownJoke={props.ownJoke}
          />
        ))}
    </section>
  );
};

export default JokeWraper;
