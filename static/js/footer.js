const footer = document.getElementById("footer")
const newsletterText = document.getElementById("newsletter-text-container")

const newsletterObserver = new IntersectionObserver((entries) => {
    
    setTimeout(() => {
        if (entries[0].isIntersecting === true) {
            newsletterText.classList.add("shake")
        } else {
            newsletterText.classList.remove("shake")   
        }
    }, 5000)


})

newsletterObserver.observe(footer)