import React, { useState } from "react";
import { Joke } from "../../redux/slices/jokes";

type Props = {
  joke: Joke;
};

const JokeBox = (props: Props) => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <div className="jokeBox">
      <div className="jokeBox__setup">{props.joke.setup}</div>
      {open && <div className="punchline">{props.joke.setup}</div>}
      <button
        onClick={(e) => {
          setOpen(!open);
        }}
      >
        {open ? "Open" : "Close"}
      </button>
    </div>
  );
};

export default JokeBox;
