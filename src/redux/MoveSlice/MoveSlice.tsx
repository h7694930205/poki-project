import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import { getAllMoveDetailsAction } from "./MoveAsyncThunk";
import {  MoveList } from "./MoveType";

const initialImage = {
    back_default: "",
    back_shiny: "",
    front_default: "",
    front_shiny: "",
    name: "",
    url: "",
    id: 1,
    weight: 1,
    height: 1,
    order: 1,
  };

const initialState: MoveList = {
  list: [],
  id: 1,
  imagePokemonList: initialImage,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  isLoading: false,
  name: ""
};

const MoveSlice = createSlice({
  name: "Move",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.id = action.payload;
    },
    setCurrentPageSize: (state, action) => {
      state.limit = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.offset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMoveDetailsAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllMoveDetailsAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
  },
});
export const MoveReducer = MoveSlice.reducer;
export const MoveAction = MoveSlice.actions;
