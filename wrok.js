// ================================
// PRELOADER
// ================================

window.addEventListener("load", () => {
          const preloader = document.getElementById("preloader");

          setTimeout(() => {
                    preloader.style.opacity = "0";
                    preloader.style.visibility = "hidden";
          }, 600);
});

// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
          nav.classList.toggle("active");

          if (nav.classList.contains("active")) {
                    menuBtn.innerHTML = '<i class="fas fa-times"></i>';
          } else {
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          }
});

document.querySelectorAll("nav a").forEach(link => {
          link.addEventListener("click", () => {
                    nav.classList.remove("active");
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          });
});

// ================================
// STICKY HEADER
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

          if (window.scrollY > 50) {
                    header.classList.add("scrolled");
          } else {
                    header.classList.remove("scrolled");
          }

});

// ================================
// TYPING EFFECT
// ================================

const typingElement = document.querySelector(".typing");

const words = [

          "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
           " React Developer",
           " Node.js Developer",
            "UI Developer",
            "Problem Solver",

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

          let currentWord = words[wordIndex];

          if (!deleting) {

                    typingElement.textContent =
                              currentWord.substring(0, charIndex++);

                    if (charIndex > currentWord.length) {

                              deleting = true;

                              setTimeout(typeEffect, 1200);

                              return;

                    }

          } else {

                    typingElement.textContent =
                              currentWord.substring(0, charIndex--);

                    if (charIndex < 0) {

                              deleting = false;

                              wordIndex++;

                              if (wordIndex >= words.length)
                                        wordIndex = 0;

                    }

          }

          setTimeout(typeEffect, deleting ? 40 : 100);

}

typeEffect();

// ================================
// SCROLL REVEAL
// ================================

const reveals = document.querySelectorAll(
          "section,.card,.project,.timeline-item"
);

function reveal() {

          const trigger =
                    window.innerHeight * 0.85;

          reveals.forEach(item => {

                    const top =
                              item.getBoundingClientRect().top;

                    if (top < trigger) {

                              item.classList.add("active");

                    }

          });

}

reveals.forEach(item => item.classList.add("reveal"));

window.addEventListener("scroll", reveal);

reveal();

// ================================
// ACTIVE NAV LINK
// ================================

const sections =
          document.querySelectorAll("section");

const navLinks =
          document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

          let current = "";

          sections.forEach(section => {

                    const top =
                              section.offsetTop - 120;

                    const height =
                              section.clientHeight;

                    if (pageYOffset >= top) {

                              current = section.getAttribute("id");

                    }
          });

          navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                              link.getAttribute("href") ===
                              "#" + current
                    ) {

                              link.classList.add("active");

                    }

          });

});

// ================================
// SMOOTH BUTTON RIPPLE
// ================================

document.querySelectorAll(".btn").forEach(btn => {

          btn.addEventListener("mouseenter", () => {

                    btn.style.transform = "translateY(-5px)";

          });

          btn.addEventListener("mouseleave", () => {

                    btn.style.transform = "translateY(0)";

          });

});

// ================================
// CONTACT FORM
// ================================
emailjs.init({
    publicKey: "JbGOoHGbStaLpW-ff",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const button = form.querySelector("button");

    button.innerHTML = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
        "service_0awzozv",
        "template_fndc2k7",
        form
    )
    .then(() => {

        alert("✅ Message sent successfully!");

        form.reset();

    })
    .catch((error) => {

        console.error(error);

        alert("❌ Failed to send message.");

    })
    .finally(() => {

        button.innerHTML = "Send Message";

        button.disabled = false;

    });

});

// ================================
// CURRENT YEAR
// ================================

const footer =
          document.querySelector("footer p:last-child");

if (footer) {

          footer.innerHTML =
                    "© " + `${new Date().getFullYear()}` + " All Rights Reserved.";

}

// ================================
// END
// ================================