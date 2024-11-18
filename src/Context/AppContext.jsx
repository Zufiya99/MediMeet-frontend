import { createContext } from "react";
import doctorsDetails from "../Components/doctorsDetails.json";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = "₹";

  const value = {
    doctorsDetails, currencySymbol
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
