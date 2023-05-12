import React from "react";
import { Joke } from "../../redux/slices/jokes";
import JokeBox from "./JokeBox";

type Props = {
  jokes: Joke[];
  isStared: Boolean;
};

const JokeWraper = (props: Props) => {
  return (
    <section>
      {props.jokes?.length != 0 &&
        props.jokes?.map((joke) => (
          <JokeBox joke={joke} key={joke.id} isStared={props.isStared} />
        ))}
    </section>
  );
};

export default JokeWraper;
