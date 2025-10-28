/* =======================================================
   HIỆU ỨNG NỀN FINISHER HEADER
   ======================================================= */
new FinisherHeader({
  count: 30, // Số lượng hạt chuyển động trên nền
  size: { 
    min: 1,  // Kích thước nhỏ nhất của hạt
    max: 48, // Kích thước lớn nhất của hạt
    pulse: 0.1 // Độ "phập phồng" (dao động kích thước)
  },
  speed: { // Tốc độ di chuyển theo trục X và Y
    x: { min: 0, max: 0.4 },
    y: { min: 0, max: 0.4 }
  },
  colors: {
    background: "#0038bc", // Màu nền chính
    particles: ["#87ddff", "#e3e7d3", "#b9fff8"] // Màu của các hạt chuyển động
  },
  blending: "none", // Chế độ pha trộn màu (none = không pha)
  opacity: {
    center: 0,  // Độ trong suốt ở trung tâm
    edge: 0.7   // Độ trong suốt ở viền ngoài
  },
  skew: 0,      // Độ nghiêng hạt
  shapes: ["c"] // Dạng hạt: "c" = circle (hình tròn)
});


/* =======================================================
   HIỆU ỨNG TIÊU ĐỀ "THE COLLECTION"
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".collection-title");
  const text = title.textContent;  // Lấy nội dung chữ gốc
  title.textContent = "";          // Xóa để chuẩn bị thêm span

  // Tách từng ký tự ra thành <span> (để tạo hiệu ứng xuất hiện dần)
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i]; // Giữ nguyên khoảng trắng
    span.style.transitionDelay = `${i * 0.08}s`; // Delay tăng dần theo vị trí ký tự
    title.appendChild(span);
  }

  // Tạo observer theo dõi khi phần tử vào vùng nhìn thấy
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // Khi tiêu đề xuất hiện trên màn hình
        title.classList.add("active"); // Thêm class để kích hoạt hiệu ứng
        observer.unobserve(title);     // Ngừng theo dõi sau khi chạy 1 lần
      }
    });
  }, { threshold: 0.3 }); // Kích hoạt khi thấy ít nhất 30% phần tử

  observer.observe(title);
});


/* =======================================================
   HIỆU ỨNG XUẤT HIỆN CARD MÙA (SEASONS)
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".season");

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Thêm class để chạy animation
        cardObserver.unobserve(entry.target); // Chỉ chạy 1 lần
      }
    });
  }, { threshold: 0.2 });

  // Theo dõi từng card
  cards.forEach(card => cardObserver.observe(card));
});


/* =======================================================
   HIỆU ỨNG XUẤT HIỆN PHẦN VĂN BẢN (TEXT CONTAINER)
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const wottleText = document.querySelector(".text-container");

  const wTextObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        wottleText.classList.add("show"); // Fade-in khi hiển thị
        wTextObserver.unobserve(wottleText);
      }
    });
  }, { threshold: 0.3 });

  wTextObserver.observe(wottleText);
});


/* =======================================================
   HIỆU ỨNG XUẤT HIỆN CHỮ TỪNG KÝ TỰ (H4)
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const h4 = document.querySelector(".text-container h4");
  const text = h4.textContent;
  h4.textContent = ""; // Xóa nội dung cũ

  // Tách từng ký tự thành <span>
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
    span.style.transitionDelay = `${i * 0.05}s`;
    h4.appendChild(span);
  }

  // Khi h4 xuất hiện thì thêm class "active"
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


/* =======================================================
   HIỆU ỨNG HIỆN ẢNH (IMAGE CONTAINER)
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const imgBox = document.querySelector(".image-container");

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imgBox.classList.add("show"); // Fade-in ảnh
        imgObserver.unobserve(imgBox);
      }
    });
  }, { threshold: 0.3 });

  imgObserver.observe(imgBox);
});


/* =======================================================
   HIỆU ỨNG XUẤT HIỆN SPLIT SECTIONS
   ======================================================= */
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


/* =======================================================
   HIỆU ỨNG TỪNG KÝ TỰ H2 TRONG SECTION 2
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.querySelector(".div3 h2");
  const text = h2.textContent;
  h2.textContent = "";

  // Tách từng ký tự thành <span>
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
    span.style.transitionDelay = `${i * 0.05}s`;
    h2.appendChild(span);
  }

  // Quan sát khi xuất hiện thì thêm class "active"
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


/* =======================================================
   HIỆU ỨNG TỪNG KÝ TỰ CHO H1 TRONG SECTION 2
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector(".div2 h1");
  const text = h1.textContent;
  h1.textContent = "";

  // Tách từng ký tự thành <span>
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
    span.style.transitionDelay = `${i * 0.05}s`;
    h1.appendChild(span);
  }

  // Quan sát khi xuất hiện thì thêm class "active"
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


/* =======================================================
   HIỆU ỨNG HIỆN LÊN CHO TEXT Ở DIV2 & DIV3
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".text-box");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Hiện chữ
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  texts.forEach(text => observer.observe(text));
});


/* =======================================================
   HIỆU ỨNG HÌNH ẢNH TRONG DIV1 & DIV4
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".fade-img");

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Kích hoạt hiệu ứng fade-in
        imgObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  imgs.forEach(img => imgObserver.observe(img));
});
