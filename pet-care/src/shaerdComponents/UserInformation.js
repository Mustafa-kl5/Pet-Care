import React, { useEffect, useState } from "react";
import "../shaerdComponentStyle/UserInformation.css";
import userImage from "../Image/cat.jpg";
import { getUserId } from "../hooks/auth/getUserId";
import api from "../services/api";
export default function UserInformation() {
  const [UserInformation, setUserInformation] = useState({});

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    const response = await api.get(`/getUser/:${getUserId()}`);
    setUserInformation(response.data);
  };
  return (
    <>
      <div className="user-information-holder">
        <div
          className="user-image"
          style={{
            backgroundImage: `url("${UserInformation.userImage ?? ""}")`,
          }}
        ></div>
        <div className="user-text">
          <div className="userName">
            {UserInformation?.firstName?.charAt(0).toUpperCase() +
              UserInformation?.firstName?.slice(1) +
              " " +
              UserInformation?.lastName?.charAt(0).toUpperCase() +
              UserInformation?.lastName?.slice(1)}
          </div>
          <div className="userName">
            {UserInformation?.firstName?.charAt(0).toUpperCase() +
              UserInformation?.firstName?.slice(1)}
          </div>
        </div>
      </div>
      <div className="Menu-word">Menu</div>
    </>
  );
}
