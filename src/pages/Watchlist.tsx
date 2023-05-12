import React from "react";
import JokeWraperWatchlist from "../components/molecules/JokeWraperWatchlist";
import JokeWraper from "../components/molecules/JokeWraper";
import { RootState } from "../redux/store";
import user from "../redux/slices/user";
import { useSelector } from "react-redux";

const Watchlist = () => {
  const watchlist = useSelector((state: RootState) => user.watchlist);

  return <JokeWraper jokes={watchlist} />;
};

export default Watchlist;
