import animation from "animejs";
import { aniTest } from "../src/utils/AnimeUtils";
import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Test() {
  const [open, setOpen] = useState(true);

  const target = useRef(null);

  return (
    <ParallaxProvider>

				<div id="test">
					<h1>Disable React-Scroll-Parallax on mobile</h1>
					<h3>(resize the window to see it in action)</h3>
					<Parallax
						speed={-23}
            className="test"
						>
						<h3>With Methods</h3>
					</Parallax>
				</div>
			</ParallaxProvider>
  );
}
