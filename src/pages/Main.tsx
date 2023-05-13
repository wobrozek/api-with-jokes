import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGet } from "../redux/slices/jokes";
import { AppDispatch, RootState } from "../redux/store";
import JokeWraper from "../components/organisms/JokeWraper";
import { Button, Box } from "@mui/material";
import RefresIcon from "@mui/icons-material/Refresh";

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
      <div className="main_api__h2">
        <h2>Jokes</h2>
        <Button
          onClick={() => {
            dispatch(fetchGet());
          }}
        >
          <RefresIcon />
        </Button>
      </div>
      {api.isLoading ? (
        <div>Loading...</div>
      ) : (
        <JokeWraper jokes={api.jokes} isStared={false} />
      )}
    </main>
  );
};

export default Main;
