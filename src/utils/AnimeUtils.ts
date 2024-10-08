import anime from "animejs";
import { SetStateAction } from "react";

export const hoverArrow = (arrowClass: string, hover: boolean) => {
  const opacity = hover ? [0, 1] : [1, 0];
  const scaleIcon = hover ? [0.5, 1] : [1, 0.5];
  const scaleArrow = hover ? [1, 1.3] : [1.3, 1];
  const position = hover ? [-50, 10] : [10, -50];
  const positionY = hover ? [-5, -5] : [-5, -5];
  switch (arrowClass) {
    case "arrow_up":
      const animation = {
        icon: anime({
          targets: `#${arrowClass} .icon_container`,
          opacity: opacity,
          top: position,
          scale: scaleIcon,
          duration: 1000,
          elasticity: 400,
        }),
        arrow: anime({
          targets: `#${arrowClass} .${arrowClass}`,
          scale: scaleArrow,
          duration: 500,
          easing: "easeInOutExpo",
        }),
      };
      animation.arrow.play();
      animation.icon.play();
      break;
    case "arrow_down":
      const animationDown = {
        icon: anime({
          targets: `#${arrowClass} .icon_container`,
          opacity: opacity,
          bottom: position,
          scale: scaleIcon,
          duration: 1000,
          elasticity: 500,
        }),
        arrow: anime({
          targets: `#${arrowClass} .${arrowClass}`,
          scale: scaleArrow,
          rotate: [180, 180],
          duration: 500,
          elasticity: 500,
        }),
      };
      animationDown.arrow.play();
      animationDown.icon.play();
      break;
    case "arrow_right":
      const animationRigth = {
        icon: anime({
          targets: `#${arrowClass} .icon_container`,
          opacity: opacity,
          top: positionY,
          right: position,
          scale: scaleIcon,
          duration: 1000,
          elasticity: 500,
        }),
        arrow: anime({
          targets: `#${arrowClass} .${arrowClass}`,
          scale: scaleArrow,
          rotate: [90, 90],
          duration: 500,
          elasticity: 500,
        }),
      };
      animationRigth.arrow.play();
      animationRigth.icon.play();
      break;
    case "arrow_left":
      const animationLeft = {
        icon: anime({
          targets: `#${arrowClass} .icon_container`,
          opacity: opacity,
          top: positionY,
          left: position,
          scale: scaleIcon,
          duration: 1000,
          elasticity: 500,
        }),
        arrow: anime({
          targets: `#${arrowClass} .${arrowClass}`,
          scale: scaleArrow,
          rotate: [270, 270],
          duration: 500,
          elasticity: 500,
        }),
      };
      animationLeft.arrow.play();
      animationLeft.icon.play();
      break;
  }
};

export const aniTest = (
  open: boolean,
  scaleStart: number,
  scaleEnd: number
) => {
  let start: number;
  let end: number;
  if (open) {
    start = scaleStart;
    end = scaleEnd;
  } else {
    start = scaleEnd;
    end = scaleStart;
  }
  return anime({
    targets: `.test_ani`,
    opacity: 1,
    scale: [start, end],
    duration: 2000,
    elasticity: 400,
  });
};

export const handleArrows = (
  active: string,
  setHideTop: (value: SetStateAction<boolean>) => void,
  setHideBottom: (value: SetStateAction<boolean>) => void,
  setHideRight: (value: SetStateAction<boolean>) => void,
  setHideLeft: (value: SetStateAction<boolean>) => void) => {
  switch (active) {
    case "main":
      setHideTop(false);
      setHideBottom(false);
      setHideRight(false);
      setHideLeft(false);
      break;
    case "projects":
      setHideTop(true);
      setHideRight(true);
      setHideLeft(true);
      break;
    case "contacts":
      setHideBottom(true);
      setHideRight(true);
      setHideLeft(true);
      break;
    case "events":
      setHideRight(true);
      setHideTop(true);
      setHideBottom(true);
      break;
    case "aboutUs":
      setHideLeft(true);
      setHideTop(true);
      setHideBottom(true);
      break;
  }
}