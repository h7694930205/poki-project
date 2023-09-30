import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMoveDetails, getMove, getMoveAilments, getMoveBattleStyle, getMoveCategory, getMoveDamageClass, getMoveLearnMethod, getMoveTarget } from "Service/MoveService";
import constant from "config/constant/constant";

export interface GetMoveList {
    id: number;
    offset: number;
    limit: number;
}

export interface GetImageList {
    id: number;
}

export const getAllMoveDetailsAction = createAsyncThunk(
    "details/getAllContestDetailsAction",
    async (payload:GetMoveList, { dispatch, getState}) => {
        try {
            const response = await getAllMoveDetails(payload);
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

export const getMoveAction = createAsyncThunk(
    "Move/getMoveAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getMove(payload);
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


  export const getMoveAilmentsAction = createAsyncThunk(
    "Move/getMoveAilmentsAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getMoveAilments(payload);
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



  export const getMoveBattleStyleAction = createAsyncThunk(
    "Move/getMoveBattleStyleAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getMoveBattleStyle(payload);
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

  export const getMoveCategoryAction = createAsyncThunk(
    "Move/getMoveCategoryAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getMoveCategory(payload);
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

  export const getMoveDamageClassAction = createAsyncThunk(
    "Move/getMoveDamageClassAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getMoveDamageClass(payload);
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

  export const getMoveLearnMethodAction = createAsyncThunk(
    "Move/getMoveLearnMethodAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getMoveLearnMethod(payload);
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

  export const getMoveTargetAction = createAsyncThunk(
    "Move/getMoveTargetAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getMoveTarget(payload);
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