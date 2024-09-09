import axios from "axios";
import { constants } from "./defaultConstants";

const baseURL = constants.DEFAULT_BACKEND_URL;
export const API = axios.create({ baseURL, withCredentials: true });

/*
export const getCurrentUser = async () => {
  try {
    const { data } = await API.get('/users/me');
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const data = await handleAxiosError(error);
      return data;
    }
    return error;
  }
}; 
*/
