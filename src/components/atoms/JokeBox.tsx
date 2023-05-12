import React, { useState ,useEffect} from "react";
import { Joke } from "../../redux/slices/jokes";
import { Button } from "@mui/material";
import StarToggle from "./starToggle";
import { useDispatch,useSelector } from "react-redux";
import user, { addWatchlist, removeWatchlist } from "../../redux/slices/user";
import { RootState } from "../../redux/store";

type Props = {
  joke: Joke;
};

const JokeBox = (props: Props) => {
  const [open, setOpen] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const watchlist = useSelector((state:RootState)=>user.watchlist)
  const [isStared,setIsStared]=useState(false);

  // inicialize star becouse api doesn't have watchlist flag
useEffect(()=>{
  if(props.joke in watchlist){
    setIsStared(true);
    return
  }
  else setIsStared(false);

},[]);

  const handleClick(e:React.MouseEvent)=>{
    if (isStared) {
      dispatch(removeWatchlist);
    } else {
      dispatch(addWatchlist);
    }
  }

  return (
    <div className="jokeBox">
      <div className="jokeBox__setup">{props.joke.setup}</div>
      {open && <div className="punchline">{props.joke.setup}</div>}
      <StarToggle
        handleClick={handleClick}
        isStared={false}
      />

      <Button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setOpen(!open);
        }}
      >
        {open ? "Open" : "Close"}
      </Button>
    </div>
  );
};

export default JokeBox;
