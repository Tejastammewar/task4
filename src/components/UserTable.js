import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./DarkMode.css";

export default function UserTable() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>User Table</h1>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {records.map((list, index) => (
              <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// records.map((list, index) => (
//     <li>{list.id} | {list.name} | {list.name}</li>
// ))
