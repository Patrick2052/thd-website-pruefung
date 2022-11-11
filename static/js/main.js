const heroSection = document.getElementById("hero-section")

const handleMouseMove = (e) => {
    const {currentTarget: target} = e;
    
    const rect = target.getBoundingClientRect();
    
    const x = e.clientX - rect.width / 2;
    const y = e.clientY - rect.height / 2;

    target.style.setProperty("--mouse-x", `${x/100}px`)
    target.style.setProperty("--mouse-y", `${y/100}px`)

    // console.log(rect.width, rect.height)

    console.log("x: " + x,"y: " + y)

}

heroSection.onmousemove = e => handleMouseMove(e)

document.getElementById("hero-section").addEventListener("mouseenter", (e) => {
    console.log("entered")
    

})


document.getElementById("hero-section").addEventListener("mouseleave", () => {

    console.log("left")
})