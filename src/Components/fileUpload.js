import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dataContext from "../store";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState();
  const { setRecievedData } = useContext(dataContext);
  const navigate = useNavigate();

  const sendClipping = () => {
    console.log("FILE", selectedFile);

    let formData = new FormData();
    formData.append("clipping", selectedFile);

    const payload = {
      method: "POST",
      url: "http://localhost:8080/",
      data: formData,
    };

    axios.post("http://localhost:8080/", formData).then((res) => {
      console.log("RESPONSE", res.data);
      setRecievedData(res.data);
      navigate("/your-clippings");
    });
  };

  useEffect(() => {
    console.log("RENDERED");
  }, []);

  return (
    <>
      <label htmlFor="clipping-upload"> Upload the MyClippings.txt file</label>
      <input
        type="file"
        name="clipping"
        id="clipping-upload"
        onChange={(e) => {
          setSelectedFile(e.target.files[0]);
        }}
      />
      <button onClick={sendClipping}>Submit</button>
    </>
  );
};

export default UploadFile;
