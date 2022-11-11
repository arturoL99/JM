import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import Shapes from "./Shapes";
import Tiles from "./Tiles";
import arrow from "../images/angle-up-solid.svg";

type Props = {
  main: string;
  setMain: Dispatch<SetStateAction<string>>;
  setProjects: Dispatch<SetStateAction<string>>;
  setInfo: Dispatch<SetStateAction<string>>;
};

const Main: FC<Props> = ({ main, setMain, setProjects, setInfo }) => {
  const goUp = () => {
    setMain("down");
    setProjects("active");
  };
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
