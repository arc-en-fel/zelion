import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AuroraCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        duration: 0.2,
        x: e.clientX - 25,
        y: e.clientY - 25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="aurora-wrapper">
      <div className="aurora-cursor"></div>
    </div>
  );
};

export default AuroraCursor;
