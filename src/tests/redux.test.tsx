import { add } from "../redux/slices/jokes";
import { store } from "../redux/store";

describe("redux reducers test", () => {
  it("add joke to jokes", () => {
    store.dispatch(
      add({ punchline: "fast", setup: "how people run", type: "not funny" })
    );
    const state = store.getState().jokes;
    expect(state.jokes[0].punchline).toBe("fast");
  });
});
