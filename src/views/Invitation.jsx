import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../context/MainContext";

const Invitation = () => {
  const { fetchGuest } = useContext(MainContext);
  const [guest, setGuest] = useState();
  const {token} = useParams()

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async() => {
    const response = await fetchGuest(token);
    setGuest(response);
  }

  return (
    <div>
      aquí está la invitación de
      {guest && (
        <>
          <p>{guest.title?.title}</p>
          <p>{guest?.first_name}</p>
          <p>{guest?.last_name}</p>
        </>
      )}
    </div>
  );
};

export default Invitation;
