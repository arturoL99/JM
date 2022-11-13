import { FC } from "react";
import Shapes from "./Shapes";
import Tiles from "./Tiles";

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
