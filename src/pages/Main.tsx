import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGet } from "../redux/slices/jokes";
import { AppDispatch, RootState } from "../redux/store";
import JokeWraper from "../components/molecules/JokeWraper";

const Main = () => {
  let dispatch = useDispatch<AppDispatch>();
  const api = useSelector((state: RootState) => state.jokes);

  useEffect(() => {
    if (!api.jokes.length) {
      dispatch(fetchGet());
    }
  }, []);

  return (
    <main className="main main_api">
      <JokeWraper jokes={api.jokes} isStared={false} />
    </main>
  );
};

export default Main;
