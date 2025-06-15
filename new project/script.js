const coffeeList = [
  { name: "Espresso", price: "30.000đ", img: "image/ess.jpeg" },
  { name: "Cappuccino", price: "45.000đ", img: "image/cap_1024x.webp" },
  { name: "Latte", price: "40.000đ", img: "image/latte.avif" },
  { name: "Mocha", price: "50.000đ", img: "image/mocha.jpg" },
  { name: "Cold Brew", price: "35.000đ", img: "image/cold brew.jpg" },
  { name: "Matcha Latte", price: "42.000đ", img: "image/matchalatte.webp" },
];

const clothesList = [
  { name: "Áo thun basic", price: "199.000đ", img: "image/aotthun.webp" },
  { name: "Áo sơ mi linen", price: "299.000đ", img: "image/aosomi.jpeg" },
  { name: "Quần jeans slim", price: "399.000đ", img: "image/quanjean.webp" },
  { name: "Váy chữ A", price: "359.000đ", img: "image/vaychua.jpg" },
  { name: "Áo hoodie unisex", price: "449.000đ", img: "image/aohoddie.jpg" },
  { name: "Chân váy dài", price: "329.000đ", img: "image/chanvaydai.webp" },
];

const blogList = [
  {
    title: "5 cách pha cà phê ngon tại nhà",
    desc: "Khám phá các mẹo nhỏ để pha cà phê như barista ngay tại gian bếp của bạn.",
    img: "image/5 cach pha coffee.webp"
  },
  {
    title: "Cách phối đồ mùa hè nhẹ nhàng",
    desc: "Gợi ý những item không thể thiếu cho tủ đồ mùa hè của bạn.",
    img: "image/phoi do mua he.jpg"
  },
  {
    title: "Khám phá hương vị Cold Brew",
    desc: "Tại sao cold brew lại trở thành xu hướng trong giới trẻ hiện nay?",
    img: "image/Gioi-thieu-ve-Cold-Brew.jpeg"
  },
  {
    title: "Phong cách tối giản lên ngôi",
    desc: "Tối giản không chỉ là gu thẩm mỹ mà còn là lối sống đáng trải nghiệm.",
    img: "image/Cac-items-thoi-trang-dot-chay-mua-he-2022-2505-2.jpg"
  },
  {
    title: "Giới thiệu món mới trong menu",
    desc: "Matcha Latte dừa thơm mát đã có mặt! Thưởng thức ngay tại quán.",
    img: "image/1701480129_matcha-sua-dua.jpg"
  }
];

function renderSwiperItems(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  data.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="card">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
    `;
    container.appendChild(slide);
  });
}

renderSwiperItems(coffeeList, "coffee-wrapper");
renderSwiperItems(clothesList, "clothes-wrapper");

new Swiper("#coffee-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

new Swiper("#clothes-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

function renderBlogItems(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  data.forEach(post => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="card blog-card">
        <img src="${post.img}" alt="${post.title}">
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
      </div>
    `;
    container.appendChild(slide);
  });
}

renderBlogItems(blogList, "blog-wrapper");

new Swiper("#blog-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
