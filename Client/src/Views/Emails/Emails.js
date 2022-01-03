import React, { useState, useEffect } from "react";
import Axios from "axios";
import './email.css';

function Emails() {
  const [emailList, setEmailList] = useState([]);
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    const url = "http://localhost:3002/getEmails";
    Axios.get(url).then((response) => {
      setEmailList(response.data);
    });
  }, []);

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...emailList].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setEmailList(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...emailList].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setEmailList(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div style={{ backgroundColor: "white", padding: "50px" }}>
      <table>
        <thead>
          <tr className="pointer">
            <th onClick={() => sorting("created")}>Date</th>
            <th onClick={() => sorting("email")}>Email</th>
          </tr>
        </thead>
        <tbody>
          {emailList.map((val, id) => {
            return (
              <tr key={id} style={{textAlign: 'center'}}>
                <td>{val.created.slice(0, 10)}</td>
                <td>{val.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Emails;
