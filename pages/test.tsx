import ContactForm from "../src/components/Contact/ContactForm";
import Player from "../src/components/Player";
import animation from "animejs";
import { aniTest } from "../src/utils/AnimeUtils";
import { useEffect, useState } from "react";

export default function Test() {
  const [open, setOpen] = useState(true)
  const reverseAni = (open:boolean) => {
    aniTest(open, 1, 2).play()
    setOpen(!open);
  }
  return (
    <div id="test">
      <div className="test_ani">

      </div>
      <button onClick={() => reverseAni(open)}>DIOCANE</button>
    </div>
  );
}
