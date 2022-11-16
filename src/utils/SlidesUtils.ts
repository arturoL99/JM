import { Dispatch, SetStateAction } from "react";

export const goUp = (
  active: string,
  setActive: Dispatch<SetStateAction<string>>
) => {
  console.log("goUp");
  switch (active) {
    case "main":
      setActive("projects");
      break;
    case "contacts":
      setActive("main");
      break;
    default:
      setActive("projects");
      break;
  }
};

export const goDown = (
  active: string,
  setActive: Dispatch<SetStateAction<string>>
) => {
  console.log("goDown");
  switch (active) {
    case "main":
      setActive("contacts");
      break;
    case "projects":
      setActive("main");
      break;
    default:
      setActive("contacts");
      break;
  }
};
