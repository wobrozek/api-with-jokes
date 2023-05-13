import React, { useState, useEffect } from "react";
import { Joke } from "../../redux/slices/jokes";
import { Button } from "@mui/material";
import StarToggle from "../atoms/starToggle";
import { useDispatch, useSelector } from "react-redux";
import {
  addWatchlist,
  removeJoke,
  removeWatchlist,
} from "../../redux/slices/user";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { RootState } from "../../redux/store";

type Props = { joke: Joke; isStared: Boolean; ownJoke: Boolean };

const JokeBox = ({
  joke = { setup: "", delivery: "", category: "dark" },
  isStared = false,
  ownJoke = false,
}: Props) => {
  const [open, setOpen] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.user.watchlist);
  const [isStaredState, isSetstaredState] = useState<Boolean>(isStared);

  const handleClick = (e: React.MouseEvent) => {
    if (isStaredState) {
      dispatch(removeWatchlist(joke?.id));
      isSetstaredState(false);
    } else {
      dispatch(addWatchlist(joke));
      isSetstaredState(true);
    }
  };

  return (
    <div className="jokeBox">
      <div className="jokeBox__delivery">{joke.setup}</div>
      {open && <div className="punchline">{joke.delivery}</div>}

      {ownJoke ? (
        <div>
          <Button
            onClick={() => {
              console.log("siema");
            }}
          >
            <EditIcon />
          </Button>
          <Button
            onClick={() => {
              dispatch(removeJoke(joke?.id));
            }}
          >
            <DeleteIcon />
          </Button>
        </div>
      ) : (
        <StarToggle handleClick={handleClick} isStared={isStaredState} />
      )}

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
