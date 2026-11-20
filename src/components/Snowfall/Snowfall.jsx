import { useEffect, useState } from "react";

// styles
import classes from "./styles.module.css";

const CONFIG = {
  minSize: 3,
  maxSize: 8,

  color: "#ffffff",

  count: 30,

  minSpeed: 10,
  maxSpeed: 20,

  spawnInterval: 250,
};

const random = (min, max) => Math.random() * (max - min) + min;

export default function Snowfall() {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    let id = 0;

    const spawnFlake = () => {
      setFlakes((prev) => {
        if (prev.length >= CONFIG.count) return prev;

        const size = random(CONFIG.minSize, CONFIG.maxSize);
        const duration = random(CONFIG.minSpeed, CONFIG.maxSpeed);

        const flake = {
          id: id++,
          left: random(0, 100),
          size,
          duration,
          opacity: random(0.4, 1),
          drift: random(-100, 100),
          delay: random(0, 1.5),
        };

        return [...prev, flake];
      });
    };

    const interval = setInterval(spawnFlake, CONFIG.spawnInterval);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = (id) => {
    setFlakes((prev) => prev.filter((flake) => flake.id !== id));
  };

  return (
    <div className={classes.root}>
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className={classes.flake}
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundColor: CONFIG.color,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            "--drift": `${flake.drift}px`,
          }}
          onAnimationEnd={() => handleAnimationEnd(flake.id)}
        />
      ))}
    </div>
  );
}
