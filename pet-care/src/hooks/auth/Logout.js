export const logeOut = () => {
  localStorage.removeItem("token");
  window.location.href = "/Login";
};
