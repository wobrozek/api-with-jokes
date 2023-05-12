import React, { useState } from "react";
import JokeWraper from "../components/molecules/JokeWraper";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const Watchlist = () => {
  const watchlist = useSelector((state: RootState) => state.user.watchlist);

  return <JokeWraper jokes={watchlist} isStared={true} />;
};

export default Watchlist;
