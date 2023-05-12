import React, { useState, useEffect } from "react";
import { Joke } from "../../redux/slices/jokes";
import { Button } from "@mui/material";
import StarToggle from "../atoms/starToggle";
import { useDispatch, useSelector } from "react-redux";
import { addWatchlist, removeWatchlist } from "../../redux/slices/user";
import { RootState } from "../../redux/store";

type Props = {
  joke: Joke;
  isStared: Boolean;
};

const JokeBox = (props: Props) => {
  const [open, setOpen] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.user.watchlist);
  const [isStared, setIsStared] = useState<Boolean>(props.isStared);

  const handleClick = (e: React.MouseEvent) => {
    if (isStared) {
      dispatch(removeWatchlist(props.joke.id));
      setIsStared(false);
    } else {
      dispatch(addWatchlist(props.joke));
      setIsStared(true);
    }
  };

  return (
    <div className="jokeBox">
      <div className="jokeBox__delivery">{props.joke.setup}</div>
      {open && <div className="punchline">{props.joke.delivery}</div>}
      <StarToggle handleClick={handleClick} isStared={isStared} />

      <Button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setOpen(!open);
        }}
      >
        {open ? "Close" : "Open"}
      </Button>
    </div>
  );
};

export default JokeBox;
