import api from "../../services/api";

export const setAuthToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
