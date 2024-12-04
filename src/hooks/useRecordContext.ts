import { useContext } from "react";
import { recordContext } from "../context/recordContext";

export const useRecordContext = () => {
  const context = useContext(recordContext);

  if (!context) {
    // navigate : server not working or found page -> navigate to the home page
    throw new Error("Record context not provided");
  }

  return context;
};
