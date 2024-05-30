import animation from "animejs";
import { aniTest } from "../src/utils/AnimeUtils";
import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Test() {
  const [open, setOpen] = useState(true);

  const target = useRef(null);

  return (
    <section className="calendar_container">
		<h1>Prochains Evenements</h1>
	</section>
  );
}
