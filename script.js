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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          title.classList.add("active");
          observer.unobserve(title); // chỉ chạy 1 lần
        }
      });
    }, {
      threshold: 0.3 // khi 30% phần tử vào viewport thì chạy
    });

    observer.observe(title);


  });