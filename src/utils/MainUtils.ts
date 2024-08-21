import anime from "animejs";
import { Dispatch, SetStateAction } from "react";

export const moveInfo = (open: boolean) => {
  const aniTitle = anime({
    targets: ".info_title",
    opacity: open ? 0 : 1,
    duration: 1000,
    easing: "linear",
  });
  aniTitle.play();
};

export const handleLogoClick = (setActive: Dispatch<SetStateAction<string>>) => {
  setActive("main");
};
