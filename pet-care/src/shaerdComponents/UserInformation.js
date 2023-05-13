import React, { useEffect, useState } from "react";
import "../shaerdComponentStyle/UserInformation.css";
import userImage from "../Image/cat.jpg";
import { getUserId } from "../hooks/auth/getUserId";
import api from "../services/api";
export default function UserInformation() {
  const [userInformation, setUserInformation] = useState(() => {
    const storedUserInformation = localStorage.getItem("userInformation");
    return storedUserInformation ? JSON.parse(storedUserInformation) : {};
  });

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    const response = await api.get(`/getUser/:${getUserId()}`);
    const fetchedUserInformation = response.data;
    setUserInformation(fetchedUserInformation);
    localStorage.setItem(
      "userInformation",
      JSON.stringify(fetchedUserInformation)
    );
  };

  return (
    <>
      <div className="user-information-holder">
        <div
          className="user-image"
          style={{
            backgroundImage: `url("${userInformation.userImage ?? ""}")`,
          }}
        ></div>
        <div className="user-text">
          <div className="userName">
            {`${userInformation.firstName
              ?.charAt(0)
              ?.toUpperCase()}${userInformation.firstName?.slice(
              1
            )} ${userInformation.lastName
              ?.charAt(0)
              ?.toUpperCase()}${userInformation.lastName?.slice(1)}`}
          </div>
          <div className="userName">
            {`${userInformation.firstName
              ?.charAt(0)
              ?.toUpperCase()}${userInformation.firstName?.slice(1)}`}
          </div>
        </div>
      </div>
      <div className="Menu-word">Menu</div>
    </>
  );
}
