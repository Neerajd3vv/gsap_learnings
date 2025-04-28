var initialPath = `M 20 100 Q 360 100 700 100`
var finalPath = `M 20 100 Q 360 100 700 100`

const string = document.querySelector("#string")

string.addEventListener("mousemove", (dets) => {
    initialPath = `M 20 100 Q ${dets.x} ${dets.y} 700 100`
    gsap.to("svg path" , {
        attr: {
            d: initialPath
        },
        duration: 0.5,
        ease: "power2.out"
    })
})
string.addEventListener("mouseleave", (dets) => {
    gsap.to("svg path" , {
        attr: {d : finalPath},
        duration: 1.2,
        ease: "elastic.out(1.5,0.2)"
    })
})

let cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", (e) => {
    // console.log(e);
    gsap.to(cursor, {
      x: e.x,
      y: e.y,
    //   duration: 1,
      ease: "back.out(1)",
    });
  });