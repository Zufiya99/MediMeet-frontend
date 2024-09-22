import { createContext } from "react";
import doctorsDetails from "../assets/doctorsDetails.json";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctorsDetails,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
