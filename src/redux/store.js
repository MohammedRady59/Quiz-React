import { configureStore } from "@reduxjs/toolkit";
import Quiz from "./feature/Quiz/Quiz";

export const store = configureStore({
  reducer: {
    quiz: Quiz,
  },
});
