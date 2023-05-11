import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGet } from "../../redux/slices/jokes";
import { AppDispatch, RootState } from "../../redux/store";
import JokeBox from "../atoms/JokeBox";

const JokeWraperApi = () => {
  let dispatch = useDispatch<AppDispatch>();
  const api = useSelector((state: RootState) => state.jokes);

  useEffect(() => {
    dispatch(fetchGet);
  }, []);

  return (
    <section>
      {api.jokes.map((joke) => (
        <JokeBox joke={joke} />
      ))}
    </section>
  );
};

export default JokeWraperApi;
