import React, { createContext, useState } from "react";
import axiosInstance from "../services/axios";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
 const fetchGuest = async(token) => {
  try {
    const guest = await axiosInstance.get(`/guest/get_guest/${token}`)
    return guest.data
  } catch (error) {
    console.log("hubo un error");
  }
 }

  const functions = {
    fetchGuest
  };

  return (
    <MainContext.Provider value={functions}>{children}</MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;
