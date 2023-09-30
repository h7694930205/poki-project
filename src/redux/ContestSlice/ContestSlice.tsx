import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import { getAllContestDetailsAction, getContestEffectsAction, getContestTypesAction, getSuperContestEffectsAction } from "./ContestAsyncThunk";
import { ContestList } from "./ContestType";

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

const initialState: ContestList = {
  list: [],
  id: 1,
  imagePokemonList: initialImage,
  isContestEffectsLoading: false,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  name: "",
  flavor_text_entries: [],
  effect_entries: [],
  isLoading: false,
  isSuperContestEffectsLoading: false
};

const ContestSlice = createSlice({
  name: "Contest",
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
      .addCase(getAllContestDetailsAction.pending, (state: ContestList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllContestDetailsAction.fulfilled,
        (state: ContestList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getContestTypesAction.pending, (state: ContestList) => {
        state.isLoading = true;
      })
      .addCase(
        getContestTypesAction.fulfilled,
        (state: ContestList, { payload }) => {
          if (payload) {
            const { data, spec, name, weight, height, order } = payload;
            state.imagePokemonList = {
              ...data,
              ...spec,
              weight,
              height,
              name,
              order,
            };
          } else {
            state.imagePokemonList = initialImage;
          }
          state.isLoading = false;
        }
      )
      .addCase(getContestTypesAction.rejected, (state: ContestList) => {
        state.isLoading = false;
      })

      .addCase(getContestEffectsAction.rejected, (state: ContestList) => {
        state.isContestEffectsLoading = false;
      }).addCase(getContestEffectsAction.pending, (state: ContestList) => {
        state.isContestEffectsLoading = true;
      })
      .addCase(
        getContestEffectsAction.fulfilled,
        (state: ContestList, { payload }) => {
          if (payload?.data) {
            state.flavor_text_entries = payload?.data;
            state.effect_entries= payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isContestEffectsLoading = false;
        }
      )

      .addCase(getSuperContestEffectsAction.rejected, (state: ContestList) => {
        state.isSuperContestEffectsLoading = false;
      }).addCase(getSuperContestEffectsAction.pending, (state: ContestList) => {
        state.isSuperContestEffectsLoading = true;
      })
      .addCase(
        getSuperContestEffectsAction.fulfilled,
        (state: ContestList, { payload }) => {
          if (payload?.data) {
            state.flavor_text_entries = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isSuperContestEffectsLoading = false;
        }
      )
  },
});
export const ContestReducer = ContestSlice.reducer;
export const ContestAction = ContestSlice.actions;
