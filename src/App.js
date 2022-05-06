import logo from "./logo.svg";
import "./App.css";
import UploadFile from "./Components/fileUpload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UploadFile />} />
          <Route path="your-clippings" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
