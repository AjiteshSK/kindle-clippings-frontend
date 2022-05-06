import logo from "./logo.svg";
import "./App.css";
import UploadFile from "./Components/fileUpload";
import { Routes, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UploadFile />} />
        <Route path="your-clippings" />
      </Routes>
    </>
  );
}

export default App;
