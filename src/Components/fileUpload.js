import { useEffect, useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState();
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
