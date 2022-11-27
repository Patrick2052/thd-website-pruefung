

//! ========this is the function that counts up the status numbers in the first section ============
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

//!for the animation fly in of known-from section (with the logos)
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


//! animaiton fly in of Section 2
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

//!for the flying in of the booking section
function ObserveSectionBooking() {
    const sectionBooking = document.getElementById("section-booking")
    const bookingContent = sectionBooking.querySelector(".content")
    
    const sectionBookingObserver = new IntersectionObserver((entries) => {
        console.log("hello")
        if (entries[0].isIntersecting === true) {
            bookingContent.classList.add("fly-in")
        } else {
            bookingContent.classList.remove("fly-in")   
        }
    })


    sectionBookingObserver.observe(sectionBooking);
}


//! handling the booking form on the bottom of the main page
//? defining the relevant elements
const bookingForm = document.getElementById("booking-form");
const bookingFormSubmit = bookingForm.querySelector("input[type=submit]")



//?definging the relevant input fileds from the DOM
const dateField = bookingForm.querySelector("input[type=date]")
const timeField = bookingForm.querySelector("input[type=time]")

//? utility function to update the text of the submit button in the booking form
function updateSubmitText() {
    //type can be date / time / people
    let date = new Date(dateField.value);
    if (date == "Invalid Date") date = "";

    let time = timeField.value;


    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    date = date && time ? ` ${days[date.getDay()]} ${date.toLocaleDateString()}:` : `${date.toLocaleDateString()}`  

    time = time ? `${time}` : ""

    const template = `Book now for ${date} ${time}`

    bookingFormSubmit.value = template;
}

//? adding event listeners that update the text of the submit button on change
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
    e.preventDefault();
    confirm(`Please confirm your reservation: ${dateField.value} -- ${timeField.value}`)
}


//? when the group value is selected a input field should appear - this is handled here


radioContainer = document.getElementById("amount-select-radio")

//the number input that is the amount of people to reserve for
amountSelectInput = document.getElementById("amount-select-input")

//the group radio button
radioThree = document.getElementById("radio-three")


radioContainer.addEventListener("change", (e) => {
  

    if (e.target.type == "radio") {

        if (e.target.id == "radio-three") {
            radioContainer.classList.add("show-amount-select")
            amountSelectInput.focus();

        } else {
            radioContainer.classList.remove("show-amount-select")
        }
    }
})

//when the input amount changes the value in the third radio button needs to change
amountSelectInput.addEventListener("change", (e) => {
    radioThree.value = e.target.value
})












//! gets executed once the page is loaded
window.addEventListener("load", () => {
    setTimeout(() => {
        countStats();
    }, 600)

    ObserveKnownFrom();
    ObserverSection2();
    ObserveSectionBooking();
})

