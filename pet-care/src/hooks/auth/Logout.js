export const logeOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInformation");
  window.location.href = "/Login";
};
