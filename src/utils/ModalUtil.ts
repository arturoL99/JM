import anime from "animejs";

export const animateModal = (open: boolean) => {
  const bottom = open ? "50%" : "-100%";
  const scale = open ? 1 : 0.6;

  anime({
    targets: `.modal`,
    scale: scale,
    bottom: bottom,
    translateY: "50%",
    duration: 1500,
    easing: "easeInOutExpo",
  });
};
