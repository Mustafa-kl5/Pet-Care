import jwt_decode from "jwt-decode";
export const getUserId = () => {
  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const userId = decodedToken.userId;
  return userId;
};
