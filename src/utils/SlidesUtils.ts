import { Dispatch, SetStateAction } from "react";

export const goUp = (
  main: string,
  setMain: Dispatch<SetStateAction<string>>,
  setProjects: Dispatch<SetStateAction<string>>,
  setInfo: Dispatch<SetStateAction<string>>
) => {
  switch (main) {
    case "active":
      setMain("down");
      setProjects("active");
      break;
    case "up":
      setInfo("down");
      setMain("active");
      break;
    default:
      break;
  }
};

export const goDown = (
  main: string,
  setMain: Dispatch<SetStateAction<string>>,
  setProjects: Dispatch<SetStateAction<string>>,
  setInfo: Dispatch<SetStateAction<string>>
) => {
  switch (main) {
    case "active":
      setMain("up");
      setInfo("active");
      break;
    case "down":
      setMain("active");
      setProjects("up");
      break;
    default:
      break;
  }
};
