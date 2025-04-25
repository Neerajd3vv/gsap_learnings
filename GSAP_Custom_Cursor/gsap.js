let body = document.querySelector("body");
let cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (e) => {
  // console.log(e);
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out(1)",
  });
});
