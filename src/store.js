import { createContext } from "react";

const dataContext = createContext({
  clippingsData: [],
  setClippingsData: () => {},
});

export default dataContext;
