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

/* =======================================================
   HIỆU ỨNG TỪNG KÝ TỰ CHO "Raising Sustainability Standards"
   (Giữ thẻ <br> để ngắt dòng đúng)
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".info-box h2");
  const html = title.innerHTML;
  title.innerHTML = "";

  // Tách từng phần, giữ nguyên <br>
  const parts = html.split(/(<br\s*\/?>)/g);

  parts.forEach(part => {
    if (part.match(/<br\s*\/?>/)) {
      // Nếu là thẻ <br>, thêm trực tiếp mà không tạo span
      title.appendChild(document.createElement("br"));
    } else {
      // Nếu là chữ, tách từng ký tự
      for (let i = 0; i < part.length; i++) {
        const span = document.createElement("span");
        span.textContent = part[i];
        span.style.transitionDelay = `${(title.querySelectorAll("span").length) * 0.05}s`;
        title.appendChild(span);
      }
    }
  });

  // Khi tiêu đề xuất hiện
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        title.classList.add("active");
        titleObserver.unobserve(title);
      }
    });
  }, { threshold: 0.3 });

  titleObserver.observe(title);
});



/* =======================================================
   HIỆU ỨNG FADE-UP CHO ĐOẠN MÔ TẢ VÀ NÚT TRONG INFO BOX
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const infoElements = document.querySelectorAll(".info-box p, .info-box .blob-btn-2");

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  infoElements.forEach(el => fadeObserver.observe(el));
});

/* =======================================================
   HIỆU ỨNG XUẤT HIỆN TỪ DƯỚI LÊN CHO INFO-BOX (SECTION 3)
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const infoBox = document.querySelector(".info-box");

  if (!infoBox) return;

  const infoBoxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        infoBox.classList.add("show");  // Thêm class để kích hoạt hiệu ứng
        infoBoxObserver.unobserve(infoBox); // Ngừng theo dõi sau khi chạy
      }
    });
  }, { threshold: 0.3 });

  infoBoxObserver.observe(infoBox);
});

/* =======================================================
   HIỆU ỨNG TRƯỢT TỪ TRÁI SANG CHO BACKGROUND SECTION 3
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const section3 = document.querySelector(".section3");

  const bgSlideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section3.classList.add("show-bg");   // Thêm class để chạy hiệu ứng
        bgSlideObserver.unobserve(section3); // Chỉ chạy 1 lần
      }
    });
  }, { threshold: 0.3 });

  bgSlideObserver.observe(section3);
});

    const carousel = document.querySelector('.carousel');
    let isDown = false;
    let startX;
    let scrollLeft;
    let autoScroll;

    function startAutoScroll() {
        autoScroll = setInterval(() => {
            carousel.scrollLeft += 0.5; // tốc độ auto chạy
            const scrollWidth = carousel.scrollWidth / 2; // chiều dài 1 vòng
            if (carousel.scrollLeft >= scrollWidth) {
                // khi chạy hết nửa đầu, nhảy về 0 mà ko giật
                carousel.scrollLeft = 0;
            }
        }, 10);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    /*
    // --- Kéo chuột ---
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        stopAutoScroll();
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        startAutoScroll();
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        startAutoScroll();
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = scrollLeft - walk;
    });
    */

    startAutoScroll();

  /* =======================================================
   HIỆU ỨNG TỪNG KÝ TỰ CHO .join-circle h2
   - Giữ nguyên <br> giữa 2 dòng
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const join = document.querySelector(".join-circle h2");
  if (!join) return;

  const html = join.innerHTML;         // có thể chứa <br>
  join.innerHTML = "";

  // split giữ <br>
  const parts = html.split(/(<br\s*\/?>)/g);
  let charIndex = 0;

  parts.forEach(part => {
    if (part.match(/<br\s*\/?>/)) {
      // thêm break line
      join.appendChild(document.createElement("br"));
    } else {
      // tách từng ký tự
      for (let i = 0; i < part.length; i++) {
        const span = document.createElement("span");
        span.innerHTML = part[i] === " " ? "&nbsp;" : part[i];
        // delay tăng dần để tạo hiệu ứng nối tiếp
        span.style.transitionDelay = `${charIndex * 0.04}s`;
        join.appendChild(span);
        charIndex++;
      }
    }
  });

  const joinObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        join.classList.add("active");
        joinObserver.unobserve(join);
      }
    });
  }, { threshold: 0.2 });

  joinObserver.observe(join);
});
