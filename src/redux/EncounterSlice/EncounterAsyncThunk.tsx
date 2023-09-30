import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEncounterDetails, getEncounterConditionValues, getEncounterConditions, getEncounterMethod } from "Service/EncounterService";
import constant from "config/constant/constant";

export interface GetEncounterList {
    id: number;
    offset: number;
    limit: number;
}


export interface GetEncounterMethods {
  id: number;
}

export interface GetEncounterConditions {
  id: number;
}

export interface GetEncounterConditionValues {
  id: number;
}

export const getAllEncounterDetailsAction = createAsyncThunk(
    "details/getAllContestDetailsAction",
    async (payload:GetEncounterList, { dispatch, getState}) => {
        try {
            const response = await getAllEncounterDetails(payload);
            if (response.status === constant.APIResponse.defaultStatusCode) {
              return {
                data: response?.data?.results,
                count: response?.data?.count,
              };
            } else if (response.status === constant.APIResponse.errorStatusCode) {
              return response?.data?.message;
            }
          } catch (error) {
            return error;
          }
    }
);

export const getEncounterMethodsAction = createAsyncThunk(
    "Encounter/getEncounterMethodsAction",
    async (payload: GetEncounterMethods, { dispatch, getState }) => {
      try {
        const response = await getEncounterMethod(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );
  
  export const getEncounterConditionsAction = createAsyncThunk(
    "Encounter/getEncounterConditionsAction",
    async (payload: GetEncounterConditions, { dispatch, getState }) => {
      try {
        const response = await getEncounterConditions(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );

  export const getEncounterConditionValuesAction = createAsyncThunk(
    "Encounter/getEncounterConditionValuesAction",
    async (payload: GetEncounterConditionValues, { dispatch, getState }) => {
      try {
        const response = await getEncounterConditionValues(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );