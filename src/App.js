import { useMemo, useState } from "react";
import UploadFile from "./Components/fileUpload";
import ClippingsData from "./Components/ClippingsData/ClippingsData";
import dataContext from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [recievedData, setRecievedData] = useState([]);

  const contextValue = useMemo(() => {
    return { recievedData, setRecievedData };
  }, [recievedData]);

  return (
    <>
      <BrowserRouter>
        <dataContext.Provider value={contextValue}>
          <Routes>
            <Route path="/" element={<UploadFile />} />
            <Route path="your-clippings" element={<ClippingsData />} />
          </Routes>
        </dataContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
