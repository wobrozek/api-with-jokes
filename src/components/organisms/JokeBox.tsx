import React, { useState } from "react";
import { Joke } from "../../redux/slices/jokes";
import { Button } from "@mui/material";
import StarToggle from "../atoms/starToggle";
import { useDispatch, useSelector } from "react-redux";
import {
  addWatchlist,
  editJoke,
  removeJoke,
  removeWatchlist,
} from "../../redux/slices/user";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { RootState } from "../../redux/store";
import FormPopup from "../molecules/FormPopup";

type Props = { joke: Joke; isStared: Boolean; ownJoke: Boolean };

const JokeBox = ({
  joke = { setup: "", delivery: "", category: "dark" },
  isStared = false,
  ownJoke = false,
}: Props) => {
  const [open, setOpen] = useState<Boolean>(false);
  const watchlist = useSelector((state: RootState) => state.user.watchlist);
  const [isStaredState, isSetstaredState] = useState<Boolean>(isStared);
  const dispatch = useDispatch();

  // popup to edit values
  const [openPopup, setOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(!openPopup);
  };

  const handleSubmitPopup = (joke: Joke) => {
    dispatch(editJoke(joke));
    setOpenPopup(!openPopup);
  };

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
    <div className="joke-box">
      <div className="joke-box__setup">
        {joke.setup}
        {ownJoke ? (
          <div>
            <Button onClick={handleOpenPopup}>
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
      </div>
      {open && <div className="joke-box__delivery">{joke.delivery}</div>}

      <Button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setOpen(!open);
        }}
      >
        {open ? "Close" : "Open"}
      </Button>
      <FormPopup
        handleClick={handleOpenPopup}
        handleSubmit={handleSubmitPopup}
        joke={joke}
        open={openPopup}
      />
    </div>
  );
};

export default JokeBox;
