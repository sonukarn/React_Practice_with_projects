import React, { useEffect, useState } from "react";

const BackgroundChanger = () => {
  const [typeofColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#FFFFFF");
  const RandomColor = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColor(hex.length)];
    }
    setColor(hexColor);
  };
  const handleRgbColor = () => {
    let r = RandomColor(256);
    let g = RandomColor(256);
    let b = RandomColor(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeofColor === "hex") handleHexColor();
    else handleRgbColor();
    // document.body.style.backgroundColor = color;
  }, [typeofColor]);
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div>
      <h1>
        Type of Color is {typeofColor === "rgb" ? "RGB Color" : "HEX Color"}
      </h1>
      <h1>{color}</h1>
      <button onClick={() => setTypeOfColor("hex")}>Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Rgb Color</button>
      <button onClick={typeofColor === "hex" ? handleHexColor : handleRgbColor}>
        ChangeColor
      </button>
    </div>
  );
};

export default BackgroundChanger;
