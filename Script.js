// FADE-IN ON SCROLL
const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// TESTIMONIAL CAROUSEL
let index = 0;

const slides = document.getElementById("slides");
const testimonials = document.querySelectorAll(".testimonial");

function updateSlider() {
  testimonials.forEach(t => t.classList.remove("active"));

  const cardWidth = testimonials[0].offsetWidth + 40;

  slides.style.transform = `translateX(calc(50% - ${index * cardWidth + cardWidth / 2}px))`;

  testimonials[index].classList.add("active");
}

function autoSlide() {
  index++;
  if (index >= testimonials.length) index = 0;

  updateSlider();
}

// start
updateSlider();
setInterval(autoSlide, 4000);

const form = document.getElementById("contactForm");
const button = document.getElementById("sendBtn");

if (button && form) {
  button.addEventListener("click", () => {
    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.border = "1px solid #ff4444";
      } else {
        input.style.border = "1px solid rgba(255,255,255,0.1)";
      }
    });

    if (!isValid) {
      button.innerHTML = "Please fill all fields";
      button.style.background = "#ff4444";
      button.style.color = "#fff";
      setTimeout(() => {
        button.innerHTML = "Send Message";
        button.style.background = "#22ff88";
        button.style.color = "#000";
      }, 2000);
      return;
    }

    // Fade out inputs
    inputs.forEach(input => {
      input.style.opacity = "0";
      setTimeout(() => {
        input.style.display = "none";
      }, 300);
    });

    // Change button text & styling
    button.innerHTML = "Message Sent ✓";
    button.style.background = "#22ff88";
    button.style.color = "#000";
    button.disabled = true;

    const successMsg = document.createElement("p");
    successMsg.textContent = "Thank you! A Muscle Nation trainer will get in touch with you shortly.";
    successMsg.style.cssText = "color: #22ff88; font-size: 15px; margin-top: 15px; text-align: center; font-weight: 500;";
    form.appendChild(successMsg);
  });
}

const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");

menuOpen.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
const menuLinks = document.querySelectorAll(".menu-links a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});