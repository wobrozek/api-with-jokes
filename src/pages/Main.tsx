import React, { useEffect } from "react";
import JokeWraperApi from "../components/molecules/JokeWraperApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchGet } from "../redux/slices/jokes";
import { AppDispatch, RootState } from "../redux/store";

const Main = () => {
  let dispatch = useDispatch<AppDispatch>();
  const api = useSelector((state: RootState) => state.jokes);

  useEffect(() => {
    dispatch(fetchGet);
  }, []);

  return <JokeWraperApi />;
};

export default Main;
