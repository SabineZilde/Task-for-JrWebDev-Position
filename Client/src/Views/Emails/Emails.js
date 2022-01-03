import React, { useState, useEffect } from "react";
import Axios from "axios";

function Emails() {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3002/getEmails";
    Axios.get(url).then((response) => {
      setEmailList(response.data);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "white", padding: "50px" }}>
      {emailList.map((val, id) => {
        return (
          <li key={id}>
            {val.created.slice(0, 10)} {val.email}
          </li>
        );
      })}
    </div>
  );
}

export default Emails;
