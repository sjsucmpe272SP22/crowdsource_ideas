import React, { useState } from "react";
import AppBarmenu from "./../AppBarmenu";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./Child";
import "./Reports.css";
import { Label } from "recharts";

const Reports = () => {
  const [bubble, setBubble] = useState("");
  const data = ["Tech", "Business", "Innovation"];

  const options = {
    size: 400,
    minSize: 120,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };

  const handleClick = (bub) => {
    setBubble(bub);
  };

  const children = data?.map((data, i) => {
    return (
      <Child
        dataTitle={data}
        className="child"
        key={i}
        setClick={handleClick}
      />
    );
  });

  return (
    <>
      <AppBarmenu />

      <BubbleUI options={options} className="myBubbleUI">
        {children}
      </BubbleUI>
      <div>Clicked bubble: {bubble}</div>
    </>
  );
};

export default Reports;
