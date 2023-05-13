import React from "react";
import { Joke, fetchGet } from "../../redux/slices/jokes";
import JokeBox from "./JokeBox";
import { useDispatch } from "react-redux";

type Props = {
  jokes: Joke[];
  isStared: Boolean;
  ownJoke?: Boolean;
};

const JokeWraper = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <section>
      {props.jokes?.length != 0 ? (
        <div>
          {props.jokes?.map((joke) => (
            <JokeBox
              joke={joke}
              key={joke.id}
              isStared={props.isStared}
              ownJoke={props.ownJoke}
            />
          ))}
        </div>
      ) : (
        <div>Such empty 😴</div>
      )}
    </section>
  );
};

export default JokeWraper;
