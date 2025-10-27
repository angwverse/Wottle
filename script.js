/* ================================
   HIỆU ỨNG NỀN FINISHER HEADER
   ================================ */
new FinisherHeader({
  count: 30, // số lượng hạt chuyển động
  size: { min: 1, max: 48, pulse: 0.1 }, // kích thước tối thiểu, tối đa, độ "phập phồng"
  speed: { // tốc độ di chuyển theo trục X, Y
    x: { min: 0, max: 0.4 },
    y: { min: 0, max: 0.4 }
  },
  colors: {
    background: "#0038bc", // màu nền chính
    particles: ["#87ddff", "#e3e7d3", "#b9fff8"] // màu hạt chuyển động
  },
  blending: "none", // chế độ pha trộn (none = không pha)
  opacity: {
    center: 0,  // độ mờ ở giữa
    edge: 0.7   // độ mờ ở rìa
  },
  skew: 0,      // độ nghiêng hạt
  shapes: ["c"] // dạng hình tròn ("c" = circle)
});

/* ================================
   HIỆU ỨNG TIÊU ĐỀ "THE COLLECTION"
   ================================ */
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".collection-title");
  const text = title.textContent; // lấy nội dung chữ gốc
  title.textContent = "";         // xóa nội dung gốc để chuẩn bị tách ký tự

  // tách từng ký tự ra thành <span> để tạo hiệu ứng xuất hiện từng chữ
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i]; // giữ khoảng trắng
    span.style.transitionDelay = `${i * 0.08}s`; // trễ dần từng ký tự
    title.appendChild(span);
  }

  // dùng IntersectionObserver để kích hoạt khi cuộn đến vùng hiển thị
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // khi phần tử xuất hiện trên màn hình
        title.classList.add("active");
        observer.unobserve(title); // chỉ chạy 1 lần
      }
    });
  }, { threshold: 0.3 }); // hiển thị ít nhất 30% mới kích hoạt

  observer.observe(title);
});

/* ================================
   HIỆU ỨNG XUẤT HIỆN CARD MÙA (SEASONS)
   ================================ */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".season");

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // thêm class show để animate
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // gắn observer cho từng card
  cards.forEach(card => {
    cardObserver.observe(card);
  });
});

/* ================================
   HIỆU ỨNG CHO PHẦN VĂN BẢN (TEXT CONTAINER)
   ================================ */
document.addEventListener("DOMContentLoaded", () => {
  const wottleText = document.querySelector(".text-container");

  const wTextObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        wottleText.classList.add("show"); // kích hoạt hiệu ứng fade-in
        wTextObserver.unobserve(wottleText);
      }
    });
  }, { threshold: 0.3 });

  wTextObserver.observe(wottleText);
});

/* ================================
   HIỆU ỨNG XUẤT HIỆN CHỮ TỪNG KÝ TỰ (H4)
   ================================ */
document.addEventListener("DOMContentLoaded", () => {
  const h4 = document.querySelector(".text-container h4");
  const text = h4.textContent;
  h4.textContent = ""; // xóa nội dung cũ

  // tách từng ký tự thành span
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
    span.style.transitionDelay = `${i * 0.05}s`; // delay cho từng ký tự
    h4.appendChild(span);
  }

  // quan sát khi h4 xuất hiện thì thêm class "active"
  const h4Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        h4.classList.add("active");
        h4Observer.unobserve(h4);
      }
    });
  }, { threshold: 0.3 });

  h4Observer.observe(h4);
});

/* ================================
   HIỆU ỨNG HIỆN ẢNH (IMAGE CONTAINER)
   ================================ */
document.addEventListener("DOMContentLoaded", () => {
  const imgBox = document.querySelector(".image-container");

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imgBox.classList.add("show"); // fade-in ảnh khi cuộn đến
        imgObserver.unobserve(imgBox);
      }
    });
  }, { threshold: 0.3 });

  imgObserver.observe(imgBox);
});

/* ================================
   HIỆU ỨNG XUẤT HIỆN SPLIT SECTIONS
   ================================ */
document.addEventListener("DOMContentLoaded", () => {
  const splits = document.querySelectorAll(".split-item");

  const splitObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        splitObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  splits.forEach(s => splitObserver.observe(s));
});

/* HIỆU ỨNG TỪNG KÝ TỰ H2 TRONG SECTION 2 */
document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.querySelector(".div3 h2");
  const text = h2.textContent;
  h2.textContent = "";

  // Tách từng ký tự thành span
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
    span.style.transitionDelay = `${i * 0.05}s`;
    h2.appendChild(span);
  }

  // Kích hoạt khi kéo đến
  const h2Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        h2.classList.add("active");
        h2Observer.unobserve(h2);
      }
    });
  }, { threshold: 0.3 });

  h2Observer.observe(h2);
});

/* HIỆU ỨNG TỪNG KÝ TỰ CHO H1 TRONG SECTION 2 */
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector(".div2 h1");
  const text = h1.textContent;
  h1.textContent = "";

  // Tách từng ký tự thành span
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
    span.style.transitionDelay = `${i * 0.05}s`;
    h1.appendChild(span);
  }

  // Quan sát khi xuất hiện trên màn hình
  const h1Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        h1.classList.add("active");
        h1Observer.unobserve(h1);
      }
    });
  }, { threshold: 0.3 });

  h1Observer.observe(h1);
});

/* HIỆU ỨNG HIỆN LÊN CHO TEXT Ở DIV2 & DIV3 */
document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".text-box");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  texts.forEach(text => observer.observe(text));
});

/* Hiệu ứng hình ảnh div1 và div4 */
document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".fade-img");

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        imgObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  imgs.forEach(img => imgObserver.observe(img));
});
