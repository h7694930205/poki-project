import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetEncounterConditionValues, GetEncounterConditions, GetEncounterList, GetEncounterMethods, } from "redux/EncounterSlice/EncounterAsyncThunk";

export async function getAllEncounterDetails(payload: GetEncounterList) {
    try {
      const response = await appClient.get(
        api.endPoint.encounterMethod +
          "?offset=" +
          payload.offset +
          "&limit=" +
          payload.limit
      );
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getEncounterMethod(payload: GetEncounterMethods) {
    try {
      const response = await appClient.get(api.endPoint.encounterMethod + payload.id);
      return hasSuccess(response?.data?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getEncounterConditions(payload: GetEncounterConditions) {
    try {
      const response = await appClient.get(api.endPoint.encounterconditions + payload.id);
      return hasSuccess(response?.data?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getEncounterConditionValues(payload: GetEncounterConditionValues) {
    try {
      const response = await appClient.get(api.endPoint.encounterconditionvalues + payload.id);
      return hasSuccess(response?.data?.data);
    } catch (error) {
      return hasError(error);
    }
  }