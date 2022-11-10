const heroSection = document.getElementById("hero-section")

const handleMouseMove = (e) => {
    const {currentTarget: target} = e;
    
    const rect = target.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x/100}px`)
    target.style.setProperty("--mouse-y", `${y/100}px`)

}

heroSection.onmousemove = e => handleMouseMove(e)

document.getElementById("hero-section").addEventListener("mouseenter", (e) => {
    console.log("entered")
    

})


document.getElementById("hero-section").addEventListener("mouseleave", () => {

    console.log("left")
})