import { useEffect } from "react";
import axios from "axios";

const UploadFile = () => {
  const sendClipping = (file) => {
    console.log("FILE", file);

    let formData = new FormData();
    formData.append("clipping", file);

    const payload = {
      method: "POST",
      url: "http://localhost:8080/",
      data: formData,
    };

    axios.post("http://localhost:8080/", payload).then((res) => {
      console.log("RESPONSE", res.data);
    });
  };

  useEffect(() => {
    console.log("RENDERED");
  }, []);

  return (
    <>
      <label htmlFor="clipping-upload"> Upload the MyClippings.txt file</label>
      <input type="file" name="clipping" id="clipping-upload" />
      <input
        type="submit"
        onClick={(e) => {
          sendClipping(e.target.files[0]);
        }}
      />
    </>
  );
};

export default UploadFile;
