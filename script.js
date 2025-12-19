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
   MOBILE NAV TOGGLE
----------------------------------------------------- */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* Close menu when clicking a link */
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

/* -----------------------------
   HAMBURGER ANIMATION
--------------------------------*/
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;
}

.menu-toggle span {
  height: 3px;
  width: 26px;
  background: #333;
  margin: 5px 0;
  border-radius: 3px;
  transition: all 0.35s ease;
}

/* Animate hamburger to X */
.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* -----------------------------
   MOBILE NAV SLIDE ANIMATION
--------------------------------*/
@media (max-width: 768px) {

  .menu-toggle {
    display: flex;
  }

  nav {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: #fff;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  }

  nav ul {
    flex-direction: column;
  }

  nav ul li a {
    padding: 16px 24px;
    display: block;
  }

  nav.active {
    max-height: 500px; /* enough for menu items */
  }
}

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
