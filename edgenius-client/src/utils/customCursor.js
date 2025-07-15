
import { gsap } from "gsap";

export function initCustomCursor() {
  const cursor = document.querySelector(".custom-cursor");
  const links = document.querySelectorAll("a, button, #nav-btn, input.btn");

  let initCursor = false;

  if (!cursor) return;

  // Link hover effects
  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("custom-cursor--link");
    });
    link.addEventListener("mouseout", () => {
      cursor.classList.remove("custom-cursor--link");
    });
  });

  const moveCursor = (x, y) => {
    gsap.to(cursor, {
      duration: 0,
      top: y + "px",
      left: x + "px",
    });
  };

  const showCursor = () => {
    if (!initCursor) {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
      initCursor = true;
    }
  };

  const hideCursor = () => {
    gsap.to(cursor, { opacity: 0, duration: 0.3 });
    initCursor = false;
  };

  // Mouse events
  const mouseMoveHandler = (e) => {
    moveCursor(e.clientX, e.clientY);
    showCursor();
  };

  const touchMoveHandler = (e) => {
    const touch = e.touches[0];
    moveCursor(touch.clientX, touch.clientY);
    showCursor();
  };

  const mouseOutHandler = () => {
    hideCursor();
  };

  const touchStartHandler = () => {
    gsap.to(cursor, { opacity: 1, duration: 0.3 });
  };

  const touchEndHandler = () => {
    setTimeout(() => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    }, 200);
  };

  // Attach all event listeners
  window.addEventListener("mousemove", mouseMoveHandler);
  window.addEventListener("touchmove", touchMoveHandler);
  window.addEventListener("mouseout", mouseOutHandler);
  window.addEventListener("touchstart", touchStartHandler);
  window.addEventListener("touchend", touchEndHandler);

  // Cleanup
  return () => {
    window.removeEventListener("mousemove", mouseMoveHandler);
    window.removeEventListener("touchmove", touchMoveHandler);
    window.removeEventListener("mouseout", mouseOutHandler);
    window.removeEventListener("touchstart", touchStartHandler);
    window.removeEventListener("touchend", touchEndHandler);
  };
}
