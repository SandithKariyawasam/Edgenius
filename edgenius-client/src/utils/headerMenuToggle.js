
function easeInBack(start, end, duration, frame, s = 1.70158) {
  let t = frame / duration;
  return (end - start) * t * t * ((s + 1) * t - s) + start;
}

function easeOutBack(start, end, duration, frame, s = 1.70158) {
  let t = frame / duration - 1;
  return (end - start) * (t * t * ((s + 1) * t + s) + 1) + start;
}

export function initHeaderMenuToggle() {
  const navBtn = document.getElementById("nav-btn");
  const takeoverNav = document.getElementById("takeover-nav");
  const stickyNav = document.querySelector(".sticky-nav");

  const topLine = document.getElementById("top-line-1");
  const middleLine = document.getElementById("middle-line-1");
  const bottomLine = document.getElementById("bottom-line-1");

  if (!navBtn || !topLine || !middleLine || !bottomLine) return;

  let state = "menu";

  let segmentDuration = 15;
  let currentFrame = 1;

  let menuDisappearComplete = false;
  let arrowAppearComplete = false;
  let arrowDisappearComplete = false;
  let menuAppearComplete = false;

  function menuDisappearAnimation() {
    currentFrame++;
    if (currentFrame <= segmentDuration) {
      requestAnimationFrame(() => {
        const topLineY = easeInBack(37, 50, segmentDuration, currentFrame);
        const bottomLineY = easeInBack(63, 50, segmentDuration, currentFrame);

        topLine.setAttribute("d", `M30,${topLineY} L70,${topLineY}`);
        bottomLine.setAttribute("d", `M30,${bottomLineY} L70,${bottomLineY}`);

        menuDisappearAnimation();
      });
    } else {
      middleLine.style.opacity = "0";
      currentFrame = 1;
      menuDisappearComplete = true;
      openMenuAnimation();
    }
  }

  function arrowAppearAnimation() {
    currentFrame++;
    if (currentFrame <= segmentDuration) {
      requestAnimationFrame(() => {
        const topLeftX = easeOutBack(30, 35, segmentDuration, currentFrame);
        const topLeftY = easeOutBack(50, 35, segmentDuration, currentFrame);
        const bottomRightX = easeOutBack(70, 65, segmentDuration, currentFrame);
        const bottomRightY = easeOutBack(50, 65, segmentDuration, currentFrame);

        topLine.setAttribute("d", `M${topLeftX},${topLeftY} L${bottomRightX},${bottomRightY}`);

        const bottomLeftX = easeOutBack(30, 35, segmentDuration, currentFrame);
        const bottomLeftY = easeOutBack(50, 65, segmentDuration, currentFrame);
        const topRightX = easeOutBack(70, 65, segmentDuration, currentFrame);
        const topRightY = easeOutBack(50, 35, segmentDuration, currentFrame);

        bottomLine.setAttribute("d", `M${bottomLeftX},${bottomLeftY} L${topRightX},${topRightY}`);

        arrowAppearAnimation();
      });
    } else {
      currentFrame = 1;
      arrowAppearComplete = true;
      openMenuAnimation();
    }
  }

  function openMenuAnimation() {
    if (!menuDisappearComplete) {
      menuDisappearAnimation();
    } else if (!arrowAppearComplete) {
      arrowAppearAnimation();
    }
  }

  function arrowDisappearAnimation() {
    currentFrame++;
    if (currentFrame <= segmentDuration) {
      requestAnimationFrame(() => {
        const topLeftX = easeInBack(35, 30, segmentDuration, currentFrame);
        const topLeftY = easeInBack(35, 50, segmentDuration, currentFrame);
        const bottomRightX = easeInBack(65, 70, segmentDuration, currentFrame);
        const bottomRightY = easeInBack(65, 50, segmentDuration, currentFrame);

        topLine.setAttribute("d", `M${topLeftX},${topLeftY} L${bottomRightX},${bottomRightY}`);

        const bottomLeftX = easeInBack(35, 30, segmentDuration, currentFrame);
        const bottomLeftY = easeInBack(65, 50, segmentDuration, currentFrame);
        const topRightX = easeInBack(65, 70, segmentDuration, currentFrame);
        const topRightY = easeInBack(35, 50, segmentDuration, currentFrame);

        bottomLine.setAttribute("d", `M${bottomLeftX},${bottomLeftY} L${topRightX},${topRightY}`);

        arrowDisappearAnimation();
      });
    } else {
      middleLine.style.opacity = "1";
      currentFrame = 1;
      arrowDisappearComplete = true;
      closeMenuAnimation();
    }
  }

  function menuAppearAnimation() {
    currentFrame++;
    if (currentFrame <= segmentDuration) {
      requestAnimationFrame(() => {
        const topLineY = easeOutBack(50, 37, segmentDuration, currentFrame);
        const bottomLineY = easeOutBack(50, 63, segmentDuration, currentFrame);

        topLine.setAttribute("d", `M30,${topLineY} L70,${topLineY}`);
        bottomLine.setAttribute("d", `M30,${bottomLineY} L70,${bottomLineY}`);

        menuAppearAnimation();
      });
    } else {
      currentFrame = 1;
      menuAppearComplete = true;
      closeMenuAnimation();
    }
  }

  function closeMenuAnimation() {
    if (!arrowDisappearComplete) {
      arrowDisappearAnimation();
    } else if (!menuAppearComplete) {
      menuAppearAnimation();
    }
  }

  function handleClick() {
    takeoverNav.classList.toggle("shown");
    stickyNav.classList.toggle("difference");

    if (state === "menu") {
      openMenuAnimation();
      state = "arrow";
      arrowDisappearComplete = false;
      menuAppearComplete = false;
    } else {
      closeMenuAnimation();
      state = "menu";
      menuDisappearComplete = false;
      arrowAppearComplete = false;
    }
  }

  navBtn.addEventListener("click", handleClick);

  return () => {
    navBtn.removeEventListener("click", handleClick);
  };
}
