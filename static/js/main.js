
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


//! handling the booking form on the bottom of the main page
const bookingForm = document.getElementById("booking-form");
const bookingFormSubmit = bookingForm.querySelector("input[type=submit]")

// function BookingSectionRadio() {
//     document.getElementById
// }
function updateSubmitText() {
    //type can be date / time / people 
    let date = dateField.value;
    let time = timeField.value;
    let amount = 0;

    const template = `Book now for ${date} | ${time} (${amount})`

    bookingFormSubmit.value = template;
}

const dateField = bookingForm.querySelector("input[type=date]")
const timeField = bookingForm.querySelector("input[type=time]")

dateField.addEventListener("change", (e) => {
    updateSubmitText();
})

timeField.addEventListener("change", (e) => {
    console.log(e.target.value)
    updateSubmitText();
})


bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleBookingSubmit(e);
})
function handleBookingSubmit(e) {


    confirm(`Please confirm your reservation: ${dateField.value} -- ${timeField.value} -- ${"TODO"} people`)
}





//! gets executed once the page is loaded
window.addEventListener("load", () => {
    setTimeout(() => {
        countStats();
    }, 600)

    ObserveKnownFrom();
    ObserverSection2();
})

