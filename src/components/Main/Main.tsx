import { FC, useEffect, useState } from "react";
import Shapes from "../Shapes/Shapes";
import Tiles from "../Tiles/Tiles";

const Main: FC = () => {
  return (
    <div className="main_container">
      <div className="info">
        <h1 className="title">Elias Merino</h1>
      </div>
      <Shapes />
      <Tiles />
    </div>
  );
};

export default Main;
