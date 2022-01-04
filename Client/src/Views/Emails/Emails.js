import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./email.css";

function Emails() {
  const [emailList, setEmailList] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [searchTerm, setSearchTerm] = useState("");
  const [providers, setProviders] = useState([]);

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

  let extractedProviders = [];
  let oneArray = [];
  let uniqueProviders = [];

  emailList.filter((val) => {
    const match = val.email.match(/(?=@).*(?=\.)/);
    extractedProviders.push(match);
  });

  for (let [array] of extractedProviders) {
    oneArray.push(array);
  }

  oneArray.forEach((c) => {
    if (!uniqueProviders.includes(c)) {
      uniqueProviders.push(c);
    }
  });

  const addProviders = () => {
    setProviders(uniqueProviders);
  };

  return (
    <div style={{ backgroundColor: "white", padding: 50 }}>
      <input
        type="text"
        placeholder="Search..."
        style={{ marginBottom: 20 }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        className="pointer"
        onClick={addProviders}
        style={{
            backgroundColor: "#E2E3E4",
            margin: 5,
            borderRadius: 3,
            padding: 5,
          }}
      >
        Filter by email providers
      </button>
      <div>
        {providers.map((provider, id) => (
          <button
            style={{
              backgroundColor: "#E2E3E4",
              margin: 5,
              borderRadius: 3,
              padding: 5,
            }}
            key={id}
            onClick={() => {
              emailList.filter((val) => {
                console.log(provider.toString());
                setSearchTerm(provider.toString());
              });
            }}
          >
            {provider}
          </button>
        ))}
      </div>
      <table>
        <thead>
          <tr className="pointer" style={{ paddingBottom: 20 }}>
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
                  <td style={{ paddingLeft: 20 }}>{val.email}</td>
                  <td style={{ paddingLeft: 20 }}>
                    <button
                      style={{ color: "red" }}
                      onClick={() => emailDelete(val.id)}
                    >
                      X
                    </button>
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
