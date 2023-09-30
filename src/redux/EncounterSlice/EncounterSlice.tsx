import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import { getAllEncounterDetailsAction, getEncounterConditionValuesAction, getEncounterConditionsAction, getEncounterMethodsAction } from "./EncounterAsyncThunk";
import { EncounterList } from "./EncounterType";


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

const initialState: EncounterList = {
  list: [],
  id: 1,
  imagePokemonList: initialImage,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  isLoading: false,
  name: [],
  EncounterMethodList: [],
  EncounterConditionList: [],
  EncounterConditionValueList: []
};

const EncounterSlice = createSlice({
  name: "Encounter",
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
      .addCase(getAllEncounterDetailsAction.pending, (state: EncounterList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllEncounterDetailsAction.fulfilled,
        (state: EncounterList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getEncounterMethodsAction.pending, (state: EncounterList) => {
        state.isLoading = true;
      })
      .addCase(
        getEncounterMethodsAction.fulfilled,
        (state: EncounterList, { payload }) => {
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
      .addCase(getEncounterMethodsAction.rejected, (state: EncounterList) => {
        state.isLoading = false;
      })

      .addCase(getEncounterConditionsAction.pending, (state: EncounterList) => {
        state.isLoading = true;
      })
      .addCase(
        getEncounterConditionsAction.fulfilled,
        (state: EncounterList, { payload }) => {
          if (payload) {
            const { data, spec, name, weight, height, order } = payload;
            state.imagePokemonList = {
              ...data,
              ...spec,
              weight,
            };
          } else {
            state.imagePokemonList = initialImage;
          }
          state.isLoading = false;
        }
      )
      .addCase(getEncounterConditionsAction.rejected, (state: EncounterList) => {
        state.isLoading = false;
      })

      .addCase(getEncounterConditionValuesAction.pending, (state: EncounterList) => {
        state.isLoading = true;
      })
      .addCase(
        getEncounterConditionValuesAction.fulfilled,
        (state: EncounterList, { payload }) => {
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
      .addCase(getEncounterConditionValuesAction.rejected, (state: EncounterList) => {
        state.isLoading = false;
      })
  },
});
export const EncounterReducer = EncounterSlice.reducer;
export const EncounterAction = EncounterSlice.actions;
