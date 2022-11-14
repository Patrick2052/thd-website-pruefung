const submitButton = document.getElementById("email-submit");
const newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    if (formData.get("email") != "") {
        alert(`Confirm your subscription by clicking the link sent to ${formData.get("email")}`)
    } else {
        alert("email has to be filled out")
    }
    

})