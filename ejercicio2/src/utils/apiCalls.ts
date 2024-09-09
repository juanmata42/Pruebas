import axios from "axios";
import { constants } from "./defaultConstants";
import { loadingActions } from "store/loading";
import { Dispatch } from 'redux';
const baseURL = constants.DEFAULT_BACKEND_URL;
export const API = axios.create({ baseURL });


export const getCovidData = async (dispatch: Dispatch) => {
    dispatch(loadingActions.show());
  try {
    const { data } = await API.get('/covid/historical');
    dispatch(loadingActions.hide())
    return data;
  } catch (error) {
    dispatch(loadingActions.hide())
    return error;
  }
}; 

