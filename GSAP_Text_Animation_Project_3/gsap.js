window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    gsap.to("#content", {
      transform: "translateX(-200%)",
      duration: 4,
      ease: "none",
      repeat: -1,

    });
    gsap.to("#content img", {
      rotate: 180,
    });
  } else {
    gsap.to("#content", {
      transform: "translateX(0%)",
      ease: "none",
      repeat: -1,
      duration: 4, 
    });
    gsap.to("#content img", {
      rotate: 0,
    });
  }
});
