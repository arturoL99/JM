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
    easing: "easeInOutQuint",
  });
};

export const moveContactsContainer = (active:string) => {
  const top = active === "contacts" ? "-100%" : "0";
  console.log("dio can");
  anime({
    targets: ".contacts_container",
    translateY: top,
    duration: 1000,
    easing: "linear",
  });
};
