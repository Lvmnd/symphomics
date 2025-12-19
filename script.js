/* ---------------------------------------------------
   SMOOTH SCROLLING FOR NAVIGATION LINKS
----------------------------------------------------- */
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ---------------------------------------------------
   STICKY NAVBAR SHADOW ON SCROLL
----------------------------------------------------- */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  }
});

/* ---------------------------------------------------
   MOBILE NAV TOGGLE (ANIMATED)
----------------------------------------------------- */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/* Close menu when clicking a link */
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

/* ---------------------------------------------------
   ANIMATED STATISTICS COUNTERS
----------------------------------------------------- */
const counters = document.querySelectorAll(".stat-card h3");
let counterStarted = false;

function animateCounters() {
  if (!counterStarted) {
    counters.forEach(counter => {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let speed = target / 80; // control speed here

      let updateCount = () => {
        if (count < target) {
          count += speed;
          counter.textContent = Math.floor(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };

      updateCount();
    });

    counterStarted = true;
  }
}

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats");
  const sectionTop = statsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    animateCounters();
  }
});

/* ---------------------------------------------------
   FAQ ACCORDION TOGGLE
----------------------------------------------------- */
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");

    const answer = item.querySelector("p");
    if (item.classList.contains("open")) {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});

/* ---------------------------------------------------
   EXTRA: SMOOTH REVEAL ANIMATIONS
----------------------------------------------------- */
const revealElements = document.querySelectorAll("section, .service-card, .expert-card, .blog-card");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Initial animation style */
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
});
