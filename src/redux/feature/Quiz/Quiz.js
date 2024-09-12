import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  questions: [],
  loading: false,
  error: false,
  index: 0,
  answer: null,
  points: 0,
  open: false,
  next: false,
  closeStart: true,
};
export const getQues = createAsyncThunk("quiz/getQues", async (_, thunkapi) => {
  const { rejectWithValue } = thunkapi;
  try {
    const { status, data } = await axios.get(
      "https://quiz-react-black-sigma.vercel.app/questions"
    );
    if (status === 200) {
      return data;
    }
  } catch (error) {
    return rejectWithValue(error);
  }
});
const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.answer = action.payload;
      state.points =
        state.questions[state.index].correctOption === action.payload
          ? state.points + state.questions[state.index].points
          : state.points;
    },
    nextQ: (state) => {
      state.index = state.index + 1;
      state.answer = null;
    },
    restartQ: (state) => {
      state.index = 0;
      state.answer = null;
      state.points = 0;
      state.open = false;
      state.next = false;
      state.closeStart = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQues.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQues.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
        state.open = true;
        state.next = true;
        state.closeStart = false;
      })
      .addCase(getQues.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const { addAnswer, nextQ, restartQ } = quiz.actions;
export default quiz.reducer;
