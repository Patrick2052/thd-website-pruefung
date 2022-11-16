// const heroSection = document.getElementById("hero-section")

// const handleMouseMove = (e) => {
//     const {currentTarget: target} = e;
    
//     const rect = target.getBoundingClientRect();
    
//     const x = e.clientX - rect.width / 2;
//     const y = e.clientY - rect.height / 2;

// //     target.style.setProperty("--mouse-x", `${x/100}px`)
// //     target.style.setProperty("--mouse-y", `${y/100}px`)

//     // console.log(rect.width, rect.height)

//     console.log("x: " + x,"y: " + y)

// }

// // heroSection.onmousemove = e => handleMouseMove(e)

// document.getElementById("hero-section").addEventListener("mouseenter", (e) => {
//     console.log("entered")
    

// })


// document.getElementById("hero-section").addEventListener("mouseleave", () => {

//     console.log("left")
// })




//! ======== Counting up for the Stats ============



function countStats() {
    const stats = document.querySelectorAll(".stat-count-number")
    for (let i = 0; i < stats.length; i++) {
        const numberContainer = stats[i]
        const maxCount = parseInt(numberContainer.innerText);
        let frame = 0;
    
        const counter = setInterval(() => {
            frame++
            // console.log("interval")
    
            numberContainer.innerHTML = frame
    
    
            if (frame == maxCount) {
                clearInterval(counter)
            }
        }, 70)
    
    }
}


function ObserveKnownFrom() {
    //! animation for the logo fly in in known-from section
    const knownFromSection = document.getElementById("known-from")
    const logos = document.querySelectorAll(".known-logo");
    
    const knownFromSectionObserver = new IntersectionObserver((entries) => {
        
        if (entries[0].isIntersecting === true) {
            for (let i = 0; i < logos.length; i++) {
                let logo = logos[i];
                logo.classList.add("animate-logo-fly-in")
            }
        } else {
            for (let i = 0; i < logos.length; i++) {
                let logo = logos[i];
                logo.classList.remove("animate-logo-fly-in")
            }
            
        }
    
    
    })
    knownFromSectionObserver.observe(knownFromSection)
}


//! animaiton of Section 2
function ObserverSection2() {
    const section2 = document.getElementById("section-2")
    const section2TextContainer = document.getElementById("section-2-text-container")
    const section2ImageContainer = document.getElementById("section-2-img-container")
    
    const section2Observer = new IntersectionObserver((entries) => {
    
        if (entries[0].isIntersecting === true) {
            section2TextContainer.classList.add("fly-in")
            section2ImageContainer.classList.add("fly-in")
        } else {
            section2TextContainer.classList.remove("fly-in")   
            section2ImageContainer.classList.remove("fly-in")
        }

    })
    
    section2Observer.observe(section2)

}










//! gets executed once the page is loaded
window.addEventListener("load", () => {
    setTimeout(() => {
        countStats();
    }, 600)

    ObserveKnownFrom();
    ObserverSection2();
})

