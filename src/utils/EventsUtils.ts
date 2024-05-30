import anime from "animejs";

export const moveEventsContainer = (active:string) => {
    const right = active === "events" ? "-100vw" : "0";
    anime({
      targets: ".events_container",
      translateX: right,
      duration: 1000,
      easing: "linear",
    });
  };