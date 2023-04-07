let menuIcon = document.querySelector("#touch")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle("active")
}

// =============== sticky navbar
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active")
                document
                    .querySelector(`header nav a[href*='${id}']`)
                    .classList.add("active")
            })
        }
    })

    // -------------------------

    let header = document.querySelector(".header")

    header.classList.toggle("sticky", window.scrollY > 0)

    // --------------------------

    menuIcon.classList.remove("active")
    navbar.classList.remove("active")
}

//  ==================== swiper =============

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

//   ====================

const burger = document.querySelector(".touch")

burger.addEventListener("click", function () {
    this.classList.toggle("active")
})

// ================

let darkMode = document.querySelector("#darkMode-icon")

darkMode.onclick = () => {
    darkMode.classList.toggle("bx-sun")
    document.body.classList.toggle("dark-mode")
}

ScrollReveal({
    // reset: true,
    distance: "60px",
    duration: 1400,
    delay: 50,
})

ScrollReveal().reveal(".home-content, .heading", {
    origin: "top",
})
ScrollReveal().reveal(
    ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
    {
        origin: "bottom",
    }
)
ScrollReveal().reveal(".home-content h1, .about-img img", {
    origin: "left",
})
ScrollReveal().reveal(".home-content h3, .home-content p ,.about-content", {
    origin: "right",
})

// =========

const colors = document.querySelector(".colors")

colors.addEventListener("click", function (event) {
    const { target } = event

    const color = target.id.split("-")[0]
    const className = document.body.className

    document.body.className = className.includes("dark-mode")
        ? `dark-mode ${color}`
        : `${color}`
})
