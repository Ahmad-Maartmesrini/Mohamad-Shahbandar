import { useEffect, useRef, useState } from "react";
import "../index.css";

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const outline = outlineRef.current;
    if (outline) {
      outline.animate(
        {
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        },
        {
          duration: 200,
          easing: "ease-in-out",
          fill: "both",
        }
      );
    }
  }, [cursorPosition]);

  return (
    <div className="opacity-0 sm:opacity-100">
      <div
        className="cursor-dot"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>
      <div className="cursor-outline" ref={outlineRef}></div>
    </div>
  );
}

export default CustomCursor;
