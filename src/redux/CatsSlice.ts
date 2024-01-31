import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICat, ICatsSlice } from "../types/types";
import { BASE_URL, API_KEY } from "../constants/constants";
import { RootState } from "./store";

export const getCats = createAsyncThunk(
  "cats/getCats",
  async (currentPage: number) => {
    const response = await axios.get<ICat[]>(
      `${BASE_URL}?limit=15&page=${currentPage}&${API_KEY}`
    );
    return response.data;
  }
);

const initialState: ICatsSlice = {
  allCats: [],
  savedCats: [],
  switchBtnLike: false,
  currentPage: 1,
  fetching: true,
  isLoading: false,
};

export const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    addSavedCats: (state, action) => {
      state.savedCats = action.payload;
    },
    toggleLike: (state, action) => {
      if (action.payload.isLiked === true) {
        console.log("action.payload.isLiked === true");
        state.savedCats = state.savedCats.filter(
          (s) => s.id !== action.payload.id
        );
        state.switchBtnLike = !state.switchBtnLike;
        localStorage.setItem("savedCatsLS", JSON.stringify(state.savedCats));
        return;
      } else {
        state.savedCats = [
          ...state.savedCats,
          { ...action.payload, isLiked: true },
        ];
        state.switchBtnLike = !state.switchBtnLike;
        localStorage.setItem("savedCatsLS", JSON.stringify(state.savedCats));
      }
    },
    setFetching: (state) => {
      state.fetching = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCats.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCats.fulfilled, (state, action) => {
      state.allCats = [...state.allCats, ...action.payload];
      state.fetching = false;
      state.isLoading = false;
      state.currentPage = state.currentPage + 1;
    });
    builder.addCase(getCats.rejected, (state) => {
      state.allCats = [];
      state.isLoading = false;
    });
  },
});

export const allCats = (state: RootState) => state.cats.allCats;
export const savedCats = (state: RootState) => state.cats.savedCats;
export const switchBtnLike = (state: RootState) => state.cats.switchBtnLike;
export const currentPage = (state: RootState) => state.cats.currentPage;
export const fetching = (state: RootState) => state.cats.fetching;
export const isLoading = (state: RootState) => state.cats.isLoading;

export const { addSavedCats, toggleLike, setFetching } = catSlice.actions;

export default catSlice.reducer;
