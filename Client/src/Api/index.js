import axios from "axios";
const url = "http://localhost:3001/api/v1";

export const createProduct = async (prod) => axios.post(`${url}/prods/`, prod);
export const getAllProduct = async () => axios.get(`${url}/prods/`);
export const updateExistStock = async (prod, id) =>
  axios.post(`${url}/prods/${id}`, prod);
