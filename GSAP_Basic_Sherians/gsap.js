// TOPICS:
// GSAP
// - GSAP
// - What is Animation
// - GSAP Introduction
// - GSAP animation basics
// - gsap.to() gsap.from()
// - Some other features
// - GSAP Timeline and how to control it ***
// - GSAP ScrollTrigger
// - Pinning in ScrollTrigger
// - some other pluggins
// - Project with GSAP

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// NOTES:
// 1. The gsap library is used for animation in JavaScript.
// 2. Gsap cdn is needed to make a connection to the gsap library.
// 3. to =  is used to animate a element to the final state
// 4. from = is used to animate a element from the final state to initial state
// 5. We can also give css properties in gsap. Only thing need to remember is that we need to give the css properties in camel case.
// 6. stagger is used to animate mutilple same elements with delay btwn each
// 7 repeat is used to repeat the animation. Repeat: -1 is for infinite repeat.
// 8. yoyo is used to make the animation go back to the initial state after the final state.
// 9 GSAP timeline is used to control the animation in a sequence. simply bolu to multiple animations in synchronously
// 10. ScrollTrigger is used to trigger the animation on scroll. scrollTigger has own set of prperties. The Imp One is markers. Which shows the whole page has a start and end point. and the element has it own itself , So the trigger point it when pages start point comes in contact with the element start point.
// 11. Scrub is a property of scrollTrigger. It is used to make the animation smooth and in sync with the scroll, Basically animation happens as well scroll we stop animation stops. And when user scrolls back the animation goes back.
// 12. Pinning is used to pin the element in the viewport while scrolling. It is used to make the element stay in the viewport while scrolling.
// 13. Attr property of GSAP is used to animate the attributes of the element. 
// 14. ease is used to make animation smooth , with multiple effects fro more visit GSAP easing page.






// gsap.from("#box1", {
//   x: 1000,
//   duration: 1.5,
//   // repeat:-1,
//   // yoyo: true,
//   delay: 1,
//   //   backgroundColor: "blue",
//   //   y: 300,
//   // rotate: 180,
//   // borderRadius: "50%",
// });

// gsap.to("#box2", {
//   x: 1000,
//   rotate: 90,
//   duration: 1.5,
//   delay: 2.5,
//   //   backgroundColor: "yellow",
// });

// gsap.from("#box3", {
//   x: 1000,
//   //   rotate: 90,
//   borderRadius: "50%",
//   duration: 1.5,
//   delay: 4,
//   //   backgroundColor: "yellow",
// });

// GSAP Timeline

const tl = gsap.timeline();

tl.from("#box1", {
  x: 1000,
  delay: 1,
  duration: 1.5,
});

tl.to("#box2", {
  x: 1000,
  duration: 1,
});
tl.from("#box3", {
  x: 1000,
  duration: 1,
  backgroundColor: "purple",
});

gsap.from("h1", {
  opacity: 0,
  // x:100,
  y: 20,
  stagger: 0.5,
  duration: 0.4,
  delay: 0.5,
});

const tl2 = gsap.timeline();

tl2.from("h2", {
  opacity: 0,
  y: -20,
  delay: 0.2,
  duration: 0.7,
});

tl2.from("h4" ,{
    opacity:0,
    y:-20,
    stagger:0.3,
    duration: 0.6,
})