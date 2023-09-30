import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetImageList } from "redux/PokemonSlice/PokemonAsyncThunk";
import { GetEvolutionList } from "redux/EvolutionSlice/EvolutionAsyncThunk";

export async function getAllEvolutionDetails(payload: GetEvolutionList) {
    try {
      const response = await appClient.get(
        api.endPoint.evolutionChain +
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

  export async function getEvolutionChain(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.evolutionChain + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getEvolutionTriggers(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.evolutiontriggers + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }