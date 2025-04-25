let cursor = document.querySelector("#cursor");
let Divimage = document.querySelector("#image");

document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        // duration: 0.8,
        ease: "sine.out",
    })
})


Divimage.addEventListener("mouseenter" , (info) => {
    cursor.innerHTML = "View More";
    gsap.to(cursor , {
        scale: 4,
        backgroundColor: "#ffffffc9",
    })
})
Divimage.addEventListener("mouseleave" , (info) => {
    cursor.innerHTML = "";
    gsap.to(cursor , {
        scale: 1,
        backgroundColor: "#ffffff",
    })
})  
