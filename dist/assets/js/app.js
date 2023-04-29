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

// ========================

// const imgUrls = [
//     "https://i.pinimg.com/originals/2b/f9/ac/2bf9acbd289ab39a32f421c76ed1c646.jpg",
//     "https://ecolm.ru/wp-content/uploads/2021/05/dom.jpg",
//     "https://i.pinimg.com/originals/b3/35/ba/b335ba96dcfe3911c3f712a54cba1c33.jpg",
//     "https://rock929rocks.com/wp-content/uploads/sites/93/2020/08/shutterstock_1201011367.jpg",
//     "https://img2.goodfon.com/original/1920x1080/8/3a/dom-mrachno-svet-lestnica.jpg",
//     "https://siamvr.com/wp-content/uploads/2016/07/Witches-House_LR.jpg",
// ]

const imgUrls = [
    "https://media.zicxa.com/3666799",
    "https://i.pinimg.com/originals/38/af/ff/38afff7b0933eeffe8ed937573f0bfa1.jpg",
    "https://i.pinimg.com/originals/65/34/ce/6534cea4ab8e884ec50677531a63e9b5.jpg",
    "https://bradriley.org/wp-content/uploads/2016/09/thunderclouds-2000x1200.jpg",
    "https://i.ytimg.com/vi/qkC7u23SArI/maxresdefault.jpg",
    "https://i.pinimg.com/originals/3b/ad/06/3bad06db570187079e3aef37960d999c.jpg",
]

class Box {
    render() {
        let catalog = ""

        imgUrls.forEach((url) => {
            catalog += `
                <div class="portfolio-box">
                    <img
                        src="${url}"
                        alt="picture"
                    />

                    <div class="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint esse cum ab quos! Officia,
                            necessitatibus?
                        </p>
                        <a href="#"><i class="bx bx-link-external"></i></a>
                    </div>
                </div>
            `
        })

        document.querySelector(".portfolio-container").innerHTML = catalog
    }
}

class Testimonial {
    render() {
        let catalog = ``

        for (const i of ["makima", "himeno", "power"]) {
            catalog += `
                <div class="testimonial-slide swiper-slide">
                    <div class="inner">
                        <img
                            src="https://avatars.mds.yandex.net/i?id=58c0235c0ae0929feda80be99a3df2551288f10e-8263641-images-thumbs&n=13"
                            alt=""
                        />
                        <h3>${i}</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Ipsum odit incidunt beatae
                            quis, delectus sapiente magnam qui cum illum
                            ex reprehenderit fuga aliquam amet
                            praesentium nulla alias harum repellendus,
                            cumque eaque vero! Cumque, eligendi non.
                            Officiis aliquid illo sit id cumque delectus
                            harum esse vero voluptatem. Necessitatibus
                            veniam itaque illum adipisci eveniet
                            voluptates veritatis, amet perspiciatis quas
                            sapiente tempore reprehenderit?
                        </p>
                    </div>
                </div>
            `
        }

        document.querySelector(".testimonial-content").innerHTML = catalog
    }
}

const testimonial = new Testimonial()
const box = new Box()
box.render()
testimonial.render()
