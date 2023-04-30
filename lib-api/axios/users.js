import axios from "axios";

const route = "/api/users";
export const getAllUsers = () => axios.get(route);
