import { Dispatch, SetStateAction } from "react";

export const goUp = (
  mainClass: string,
  setMainClass: Dispatch<SetStateAction<string>>,
  setProjectsClass: Dispatch<SetStateAction<string>>,
  setContactsClass: Dispatch<SetStateAction<string>>
) => {
  switch (mainClass) {
    case "active":
      setMainClass("down");
      setProjectsClass("active");
      break;
    case "up":
      setContactsClass("down");
      setMainClass("active");
      break;
    default:
      break;
  }
};

export const goDown = (
  mainClass: string,
  setMainClass: Dispatch<SetStateAction<string>>,
  setProjectsClass: Dispatch<SetStateAction<string>>,
  setContactsClass: Dispatch<SetStateAction<string>>
) => {
  switch (mainClass) {
    case "active":
      setMainClass("up");
      setContactsClass("active");
      break;
    case "down":
      setMainClass("active");
      setProjectsClass("up");
      break;
    default:
      break;
  }
};
