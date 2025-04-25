gsap.from("#page1 #box", {
  opacity: 0,
  scale: 0,
  duration: 1,
  delay: 1,
});
// gsap.from("#page2 h2", {
//   opacity: 0,
//   y: -20,
//   duration: 1,

//   scrollTrigger: {
//     trigger: "#page2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 70%",
//   },
// });
// gsap.from("#page2 h3", {
//   opacity: 0,
//   x: 20,
//   duration: 1,

//   scrollTrigger: {
//     trigger: "#page2 h3",
//     scroller: "body",
//     markers: true,
//     start: "top 70%",
//   },
// });
gsap.from("#page2 #box", {
  opacity: 0,
  scale: 0,
  duration: 1,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 2,
    
  },
});
gsap.from("#page3 #box", {
  opacity: 0,
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    markers: true,
    start: "top 70%",
    
  },
});
