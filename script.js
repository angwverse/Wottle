/* FinisherHeader */
new FinisherHeader({
  "count": 30,
  "size": {
    "min": 1,
    "max": 48,
    "pulse": 0.1
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 0.4
    },
    "y": {
      "min": 0,
      "max": 0.4
    }
  },
  "colors": {
    "background": "#0038bc",
    "particles": [
      "#87ddff",
      "#e3e7d3",
      "#b9fff8"
    ]
  },
  "blending": "none",
  "opacity": {
    "center": 0,
    "edge": 0.7
  },
  "skew": 0,
  "shapes": [
    "c"
  ]
});

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".collection-title");
  const text = title.textContent;
  title.textContent = "";

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    // Nếu là khoảng trắng thì thay bằng &nbsp;
    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
    span.style.transitionDelay = `${i * 0.08}s`;
    title.appendChild(span);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        title.classList.add("active");
        observer.unobserve(title);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(title);
});

// ======================
// HIỆU ỨNG CARD SEASONS
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".season");

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    cardObserver.observe(card);
  });

  cards.forEach((card, index) => {
    cardObserver.observe(card);
  });

});
