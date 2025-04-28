let tl = gsap.timeline();

const menu = document.querySelector("#nav i");
const cross = document.querySelector("#sidebar i");

tl.to("#sidebar", {
  duration: 0.7,
  right: 0,
  ease: "power4.out",
});
tl.from("#sidebar h4", {
  x: 150,
  opacity: 0,
  duration: 0.6,
  ease: "circ.out",
  stagger: 0.3,
});
tl.from("#sidebar i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

cross.addEventListener("click", () => {
  tl.reverse();
});
