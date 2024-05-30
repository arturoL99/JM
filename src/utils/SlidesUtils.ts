import { Dispatch, SetStateAction } from "react";

export const goUp = (
  active: string,
  setActive: Dispatch<SetStateAction<string>>
) => {
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

export const goRight = (
  active: string,
  setActive: Dispatch<SetStateAction<string>>
) => {
  switch (active) {
    case "main":
      setActive("events");
      break;
    case "credits":
      setActive("main");
      break;
    default:
      setActive("events");
      break;
  }
};

export const goLeft = (
  active: string,
  setActive: Dispatch<SetStateAction<string>>
) => {
  switch (active) {
    case "main":
      setActive("credits");
      break;
    case "events":
      setActive("main");
      break;
    default:
      setActive("credits");
      break;
  }
};