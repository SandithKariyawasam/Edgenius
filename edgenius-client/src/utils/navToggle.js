export function initHeaderNavToggle() {
  const navBtn = document.getElementById("nav-btn");
  const takeoverNav = document.getElementById("takeover-nav");
  const stickyNav = document.querySelector(".sticky-nav");

  const topLine = document.getElementById("top-line-1");
  const middleLine = document.getElementById("middle-line-1");
  const bottomLine = document.getElementById("bottom-line-1");

  let state = "menu";

  const toggleMenu = () => {
    takeoverNav.classList.toggle("shown");
    stickyNav.classList.toggle("difference");

    if (state === "menu") {
      middleLine.style.opacity = "0";
      topLine.setAttribute("d", "M35,35 L65,65");
      bottomLine.setAttribute("d", "M35,65 L65,35");
      state = "arrow";
    } else {
      middleLine.style.opacity = "1";
      topLine.setAttribute("d", "M30,37 L70,37");
      bottomLine.setAttribute("d", "M30,63 L70,63");
      state = "menu";
    }
  };

  if (navBtn) {
    navBtn.addEventListener("click", toggleMenu);

    // Optional: return a cleanup function
    return () => {
      navBtn.removeEventListener("click", toggleMenu);
    };
  }
}
