import anime from "animejs";

export const animateModal = (open: boolean) => {
  if (open) {
    anime({
      targets: `.modal`,
      scale: 1,
      bottom: "50%",
      translateY: "50%",
      duration: 200,
      easing: "easeInOutExpo",
    });
  } else {
    anime({
      targets: `.modal`,
      scale: 0.7,
      bottom: "-100%",
      duration: 200,
      easing: "easeInOutExpo",
    });
  }
};
