
galleryList = document.getElementById("gallery-list");

images = galleryList.querySelectorAll(".gallery-img");

for (let i = 0; i < images.length; i++) {
    let image = images[i];

    ObserveImage(image)
    // console.log(image)
}


function ObserveImage(img) {

    let imgObserver = new IntersectionObserver((entries) => {

        setTimeout(() => {
            if (entries[0].isIntersecting === true) {
                img.classList.add("zoom")
            } else {
                img.classList.remove("zoom")
            }
        }, 400)



    })

    imgObserver.observe(img)
}


// function pageScroll() {
    

//     scrolldelay = setTimeout(() => {
//         console.log("scroll")
//         window.scrollBy(0,20)
//         pageScroll();
//     }, 100)

//     if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//         clearTimeout(scrolldelay);
//         scrolldelay = setTimeout(PageUp(), 2000)
//     }

// }

// function PageUp() {
//     window.scrollTo(0, 0);
//     setTimeout(function() {
//       pageScroll()
//     }, 600);
//   }

// pageScroll();