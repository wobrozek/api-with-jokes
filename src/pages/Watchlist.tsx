import React, { useState } from "react";
import JokeWraper from "../components/organisms/JokeWraper";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const Watchlist = () => {
  const watchlist = useSelector((state: RootState) => state.user.watchlist);

  return (
    <main className="main main_watchlist">
      <h2>Watchlist</h2>
      <JokeWraper jokes={watchlist} isStared={true} />
    </main>
  );
};

export default Watchlist;
