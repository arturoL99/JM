import anime from "animejs/lib/anime.js";
import { useState, useRef, useEffect } from "react";

const ticks = Array.from(Array(8));

const Player = () => {
  const [playing, setPlaying] = useState(false);
  const animation: any = useRef(null);

  const handleClick = () => {
    playing ? animation.current.pause() : animation.current.play();
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playing) {
      anime({
        targets: ".dots",
        top: 200,
        duration: 1000,
        elasticity: 400,
      });
    } else {
      anime({
        targets: ".dots",
        top: 0,
        duration: 1000,
        elasticity: 400,
      });
    }
  }, [playing]);

  return (
    <div className="player">
      <ul className="dots">
        {ticks.map((_, i) => (
          <li key={i} />
        ))}
      </ul>
      <button
        onMouseEnter={() => setPlaying(true)}
        onMouseLeave={() => setPlaying(false)}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Player;
