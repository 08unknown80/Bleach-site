// =========================================================
// script.js — фан-сайт «Soul Society»
// ЛР12: слайдери Swiper.js
// ЛР13: мобільне меню «Гамбургер»
// =========================================================

// ---------- Мобільне меню (ЛР13) ----------
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

function toggleMenu() {
    // toggle додає клас, якщо його немає, і забирає, якщо є
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    // Блокуємо прокрутку сторінки під відкритим меню
    document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "auto";
}

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", toggleMenu);

    // Закриваємо меню після кліку на пункт
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (mobileMenu.classList.contains("active")) toggleMenu();
        });
    });
}

// ---------- Слайдери (ЛР12) — тільки там, де вони є ----------
if (typeof Swiper !== "undefined" && document.querySelector(".heroSwiper")) {
    // Hero-банер: один слайд, автопрокрутка
    const heroSwiper = new Swiper(".heroSwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".heroSwiper .swiper-button-next",
            prevEl: ".heroSwiper .swiper-button-prev",
        },
        pagination: {
            el: ".heroSwiper .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
}

if (typeof Swiper !== "undefined" && document.querySelector(".reviewsSwiper")) {
    // Відгуки: адаптивна кількість слайдів
    const reviewsSwiper = new Swiper(".reviewsSwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".reviewsSwiper .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
}

// ---------- Таби (ЛР15) ----------
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. Прибираємо клас active у всіх кнопок і блоків
        tabBtns.forEach(item => item.classList.remove('active'));
        tabContents.forEach(item => item.classList.remove('active'));

        // 2. Додаємо клас active поточній кнопці
        btn.classList.add('active');

        // 3. Знаходимо блок за data-tab і показуємо його
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// ---------- Модальне вікно (ЛР15) ----------
const modal = document.getElementById('my-modal');
const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.querySelector('.close-modal');

if (modal && openBtn && closeBtn) {
    // Відкрити
    openBtn.addEventListener('click', () => {
        modal.classList.add('open');
    });

    // Закрити (хрестик)
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    // Закрити (клік по затемненому фону поза вікном)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });

    // Закрити клавішею Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('open');
        }
    });
}
