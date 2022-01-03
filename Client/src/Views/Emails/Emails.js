import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./email.css";

function Emails() {
  const [emailList, setEmailList] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url = "http://localhost:3002/emails";
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

  const emailDelete = (id) => {
    Axios.delete(`http://localhost:3002/delete/${id}`).then((response) => {
      setEmailList(
        emailList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div style={{ backgroundColor: "white", padding: "50px" }}>
      <input
        type="text"
        placeholder="Search..."
        style={{ marginBottom: 20 }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr className="pointer">
            <th onClick={() => sorting("created")}>Date</th>
            <th onClick={() => sorting("email")}>Email</th>
          </tr>
        </thead>
        <tbody>
          {emailList
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.created.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, id) => {
              return (
                <tr key={id} style={{ textAlign: "center" }}>
                  <td>{val.created.slice(0, 10)}</td>
                  <td>{val.email}</td>
                  <td>
                    <button onClick={() => emailDelete(val.id)}>X</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Emails;
