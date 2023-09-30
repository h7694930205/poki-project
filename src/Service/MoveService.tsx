import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetImageList } from "redux/PokemonSlice/PokemonAsyncThunk";
import { GetMoveList } from "redux/MoveSlice/MoveAsyncThunk";


export async function getAllMoveDetails(payload: GetMoveList) {
    try {
      const response = await appClient.get(
        api.endPoint.move +
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

  export async function getMove(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.move + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  
  export async function getMoveAilments(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.moveailments + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }


  
  export async function getMoveBattleStyle(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.movebattlestyle + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  
  export async function getMoveCategory(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.movecategory + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  
  export async function getMoveDamageClass(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.movedamageclass + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMoveLearnMethod(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.movelearnmethod + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMoveTarget(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.movetarget + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }