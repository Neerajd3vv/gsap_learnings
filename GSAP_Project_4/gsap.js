let tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button", {
    y:-40,
    opacity:0,
    duration: 0.5,
    stagger: 0.2,
})

tl.from("#main-left h2", {
    x: -200,
    opacity: 0,
    duarion:0.3,
    ease: "power4.inout",
})

tl.from("#main-left p", {
    x: -100,
    opacity: 0,
    duarion:0.2,
    ease: "power4.inout",
})

tl.from("#main-left button", {
    opacity: 0,
    duration: 0.3,
    scale: 0.5,
    ease: "power4.inout",
})

tl.from("#main-right img" , {
    opacity: 0,
    x: 100,
    duration: 0.4,
}, "-=1.4")

tl.from("#section1-b img" , {
    opacity:0,
    duraion:0.4,
    y:30,
    stagger: 0.2,
})