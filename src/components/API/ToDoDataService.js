import axios from "axios";
import { API_URL } from "./Constants";

export const retrieveAllToDos = (username) => {
  return axios.get(`${API_URL}/users/${username}/todos`);
};

export const retrieveToDo = (username, id) => {
  return axios.get(`${API_URL}/users/${username}/todos/${id}`);
};

export const deleteToDo = (username, id) => {
  return axios.delete(`${API_URL}/users/${username}/todos/${id}`);
};

export const updateToDo = (username, id, todo) => {
  return axios.put(`${API_URL}/users/${username}/todos/${id}`, todo);
};

export const createToDo = (username, todo) => {
  return axios.post(`${API_URL}/users/${username}/todos`, todo);
};
