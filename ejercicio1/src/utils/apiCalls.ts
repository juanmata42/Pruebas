import axios from "axios";
import { constants } from "./defaultConstants";
import { loadingActions } from "store/loading";
import { Dispatch } from 'redux';
const baseURL = constants.DEFAULT_BACKEND_URL;
export const API = axios.create({ baseURL });


export const getGenderData = async (name: string, dispatch: Dispatch) => {
  dispatch(loadingActions.show());
  try {
    const { data } = await API.get(`/genderize/${name}`);
    dispatch(loadingActions.hide());
    return data;
  } catch (error) {
    dispatch(loadingActions.hide());
    return error;
  }
};

export const getNationalizeData = async (name: string, dispatch: Dispatch) => {
  dispatch(loadingActions.show());
  try {
    const { data } = await API.get(`/nationalize/${name}`);
    dispatch(loadingActions.hide());
    return data;
  } catch (error) {
    dispatch(loadingActions.hide());
    return error;
  }
};

export const getAgeData = async (name: string, dispatch: Dispatch) => {
  dispatch(loadingActions.show());
  try {
    const { data } = await API.get(`/agify/${name}`);
    dispatch(loadingActions.hide());
    return data;
  } catch (error) {
    dispatch(loadingActions.hide());
    return error;
  }
};
