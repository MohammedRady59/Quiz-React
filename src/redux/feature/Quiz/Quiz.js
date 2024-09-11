import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  questions: [],
  loading: false,
  error: false,
  index: 0,
  answer: null,
};
export const getQues = createAsyncThunk("quiz/getQues", async (_, thunkapi) => {
  const { rejectWithValue } = thunkapi;
  try {
    const { status, data } = await axios.get("http://localhost:9000/questions");
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
    },
    nextQ: (state) => {
      state.index = state.index + 1;
      state.answer = null;
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
      })
      .addCase(getQues.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const { addAnswer, nextQ } = quiz.actions;
export default quiz.reducer;
