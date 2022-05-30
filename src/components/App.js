import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [dateTime, setDateTime] = useState("");

  const updateTime = () => {
    let tempTime = new Date().toLocaleString();
    setDateTime(tempTime);
  };

  useEffect(() => {
    let tempTime = new Date().toLocaleString();
    setDateTime(tempTime);
    let ret = setInterval(updateTime, 1000);
    return () => {
      clearInterval(ret);
    };
  }, []);

  return (
    <div id="main">
      <div className="date-time">{dateTime}</div>
    </div>
  );
};

export default App;
