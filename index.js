// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG

document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            title: "Support for the Army",
            icon: "bi bi-fire",
            description:
                "We support the Ukrainian army by collecting essential supplies and helping soldiers on the front lines.",
        },
        {
            title: "Aid for War Victims",
            icon: "bi bi-people",
            description:
                "We provide humanitarian aid to people affected by the war, including food, medical supplies, and shelter.",
        },
        {
            title: "Support for Children",
            icon: "bi bi-graph-up-arrow",
            description:
                "We organize fundraising campaigns to provide treatment, rehabilitation, and support for children.",
        },
        {
            title: "Support for Orphanages",
            icon: "bi bi-heart-fill",
            description:
                "We provide orphanages with essential items and organize charitable activities to support the children.",
        },
        {
            title: "Humanitarian Aid",
            icon: "bi bi-stars",
            description:
                "We organize charity campaigns to help people in difficult life situations with support and resources.",
        },
        {
            title: "International Partnership",
            icon: "bi bi-compass",
            description:
                "We work with local and international partners to implement humanitarian and social projects.",
        },
    ];

    const container = document.getElementById("servicesContainer");

    if (!container) {
        console.error("❌ Контейнер #servicesContainer не знайдено!");
        return;
    }

    function createServiceItem(item, i) {
        const div = document.createElement("div");
        div.className = "col-md-6 col-lg-4";
        div.style.cssText = "padding: 12px; margin: 0;";

        div.innerHTML = `
            <div class="service-item row align-items-center">
                <div class="m-0 p-0 col-auto">
                    <div class="icon-wrapper">
                        <i class="m-0 p-0 ${item.icon}"></i>
                    </div>
                </div>

                <div class="m-0 p-0 ps-4 col text-start">
                    <h4 class="m-0 p-0 pb-2">${item.title}</h4>
                    <a href="#support" class=" read-more ">
                        <span>Support</span>
                        <i class="m-0 p-0 bi bi-arrow-right"></i>
                    </a>
                </div>

                <p class="m-0 p-0 text-start">${item.description}</p>
            </div>
        `;

        return div;
    }

    // 🔹 Рендер
    services.forEach((item, i) => {
        container.appendChild(createServiceItem(item, i));
    });
});

// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team

document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "AN",
            img: "https://i.postimg.cc/GhJdk8cb/photo-2026-03-02-22-43-38.jpg",
            position: "Engine of Change",
            social: [
                // {  icon: "bi bi-instagram", link: "https://www.instagram.com/pushkar_roma/", },
                // { icon: "bi bi-youtube", link: "https://www.youtube.com/" },
                // { icon: "bi bi-tiktok", link: "https://www.tiktok.com/" },
            ],
        },

        {
            name: "Bohdan",
            img: "https://i.postimg.cc/hPcdBbX9/f3884486-55e6-47bf-9bc7-e1b3a1a76f2f.jpg",
            position: "Voice of Support",
            social: [],
        },
        {
            name: "Anastasiia",
            img: "https://i.postimg.cc/V5Ps9Nrw/anastasia-diachenko.jpg",
            position: "Coordinator of Good Deeds",
            social: [],
        },
        {
            name: "Diana",
            img: "https://i.postimg.cc/K8yDqXdN/diana-romaniuk.jpg",
            position: "Opportunity Explorer",
            social: [],
        },
        {
            name: "Nazar",
            img: "https://i.postimg.cc/Wb0MJWhg/nazar-polishchuk.jpg",
            position: "Guardian of Order",
            social: [],
        },
        {
            name: "Illia",
            img: "https://i.postimg.cc/L51jDvvM/illa-shewchuk.jpg",
            position: "People Connector",
            social: [],
        },
        {
            name: "Viktoriia",
            img: "https://i.postimg.cc/bvwbWqLg/viktoria-petrenko.jpg",
            position: "Creator of Warmth",
            social: [],
        },
        {
            name: "Yevhen",
            img: "https://i.postimg.cc/C1dGBwft/evgen-tkachenko.jpg",
            position: "Technical Magician",
            social: [],
        },
        {
            name: "Sofiia",
            img: "https://i.postimg.cc/q7vnSpQk/sofia-savchuk.jpg",
            position: "Heart of the Team",
            social: [],
        },
    ];

    const container = document.getElementById("products_199");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxName = document.getElementById("lightbox-name");
    const lightboxDesc = document.getElementById("lightbox-desc");
    const lightboxClose = document.getElementById("lightbox-close");

    let currentIndex = 0;

    function createCard(product) {
        const card = document.createElement("div");

        card.className =
            "m-0 team-card col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 team-member0 ";

        // Генеруємо посилання на соцмережі
        const socialLinks = product.social
            .map(
                (s) =>
                    `<a href="${s.link}" target="_blank" rel="noopener noreferrer" class="mt-3"><i class="${s.icon}"></i></a>`
            )
            .join("");

        card.innerHTML = `
            <div style="padding: 12px;" class="team-member card bg-transparent border-0 shadow-sm rounded-4 ">
                <div class="member-img rounded-3 overflow-hidden mb-2 mx-auto">
                    <img src="${product.img}" class="img-fluid rounded-3 img_team" alt="${product.name}">
                </div>
                <div class="member-info text-center mt-2">
                    <h6 class="fw-semibold text-white  mb-2">${product.name}</h6>
                    <span class="small text-secondary d-block">${product.position}</span>
                     <div class="team_social m-0 p-0">  ${socialLinks}    </div>
                </div>
            </div>
        `;

        // ✅ LIGHTBOX по кліку
        const img = card.querySelector(".img_team");
        img.addEventListener("click", () => {
            const index = products.indexOf(product);
            openLightbox(index);
        });

        return card;
    }

    // 👉 рендер
    if (container) {
        products.forEach((p) => {
            container.appendChild(createCard(p));
        });
    }

    // 👉 закриття lightbox
    lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";

        // відновлюємо скрол
        document.body.style.overflow = "";
    });

    // 👉 закриття по кліку на фон
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox && e.target !== lightboxImg) {
            lightbox.style.display = "none";

            // відновлюємо скрол ТІЛЬКИ при закритті
            document.body.style.overflow = "";
        }
    });

    // 👉 закриття lightbox
    lightboxImg.addEventListener("click", () => {
        document.body.style.overflow = "hidden";
    });

    // ===== СТРІЛКИ =====
    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");

    lightboxPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        openLightbox(currentIndex);
    });

    lightboxNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % products.length;
        openLightbox(currentIndex);
    });

    // додавання блокування скролу
    // додавання блокування скролу
    function openLightbox(index) {
        currentIndex = index;

        lightboxImg.src = products[currentIndex].img;
        lightboxName.textContent = products[currentIndex].name;
        lightboxDesc.textContent = products[currentIndex].position;

        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    // інше
    // інше
    // інше
    // інше
    // інше
    // інше

    function perView() {
        const w = window.innerWidth;
        if (w < 576) return 1;
        if (w < 992) return 2;
        if (w < 1400) return 3;
        return 4;
    }

    function updateSlider() {
        const visible = perView();

        if (!container || !container.children.length) return;

        const cardWidth = container.children[0].offsetWidth;

        container.style.transform = `translateX(${
            -currentIndex * cardWidth
        }px)`;
    }

    const nextBtn = document.getElementById("nextCard99");
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const visible = perView();
            currentIndex = Math.min(
                currentIndex + 1,
                products.length - visible
            );
            updateSlider();
        });
    }

    const prevBtn = document.getElementById("prevCard99");
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateSlider();
        });
    }

    window.addEventListener("resize", updateSlider);

    updateSlider();
});

// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
// карта REPORTING
document.addEventListener("DOMContentLoaded", function () {
    const reports = [
        { title: "April 2026", href: "https://madeinzhytomyr.vercel.app/" },
        { title: "May 2026", href: "https://madeinzhytomyr.vercel.app/" },
        { title: "February 2026", href: "https://madeinzhytomyr.vercel.app/" },
        { title: "January 2026", href: "https://madeinzhytomyr.vercel.app/" },
        { title: "December 2025", href: "https://madeinzhytomyr.vercel.app/" },
        { title: "November 2025", href: "https://madeinzhytomyr.vercel.app/" },
        { title: "October 2025", href: "https://madeinzhytomyr.vercel.app/" },
        { title: "September 2025", href: "https://madeinzhytomyr.vercel.app/" },
        { title: "August 2025", href: "https://madeinzhytomyr.vercel.app/" },
    ];

    const container = document.getElementById("reportingContainer");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    let visibleCount = 8; // скільки елементів показуємо спочатку

    if (!container) {
        console.error("❌ Контейнер #reportingContainer не знайдено!");
        return;
    }

    function createServiceItem(item) {
        const div = document.createElement("div");
        div.className = "col-sm-6 col-lg-4 col-xl-3";
        div.style.cssText = "padding: 12px; margin: 0;";

        div.innerHTML = `
            <a href="${item.href}" class="report-item d-flex flex-column justify-content-between p-4 rounded-4 text-decoration-none" target="_blank">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="title ">
                        <i class="bi bi-calendar2-event pe-2 text-white rounded  p-2 py-1 d-none"></i> ${item.title}
                    </span>
                    <i class="bi bi-box-arrow-up-right icon text-primary"></i>
                </div>
                <p class="description mb-0 fst-italic text-secondary">View full report and details <i class="m-0 p-0 bi bi-arrow-right"></i></p>
                                        

            </a>
        `;
        return div;
    }

    function updateReports() {
        container.innerHTML = "";

        reports.slice(0, visibleCount).forEach((item) => {
            container.appendChild(createServiceItem(item));
        });

        // показати або сховати кнопку Load More
        loadMoreBtn.style.display =
            visibleCount < reports.length ? "block" : "none";
    }

    // кнопка Load More
    loadMoreBtn.addEventListener("click", () => {
        visibleCount += 3; // додаємо ще 3 елементи
        updateReports();
    });

    updateReports(); // початковий рендер
});

// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
document.addEventListener("DOMContentLoaded", function () {
    const mobileNavToggle = document.querySelector(".my_burger"); // бургер зовні
    const mobileClose = document.querySelector(".mobile-close"); // хрестик всередині
    const body = document.body;
    const navMenu = document.querySelector("#navmenu");
    const scrollUPP = document.getElementById("scrollUPP");

    function closeMenu() {
        body.classList.remove("mobile-nav-active");
        mobileNavToggle.classList.add("bi-list");
        mobileNavToggle.classList.remove("bi-x");
        if (scrollUPP) scrollUPP.classList.remove("d-none");
    }

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", function () {
            body.classList.toggle("mobile-nav-active");
            this.classList.toggle("bi-list");
            // this.classList.toggle("bi-x");
            if (scrollUPP)
                scrollUPP.classList.toggle(
                    "d-none",
                    body.classList.contains("mobile-nav-active")
                );
        });
    }

    if (mobileClose) {
        mobileClose.addEventListener("click", closeMenu);
    }

    // Закриття меню при кліку на пункт
    if (navMenu) {
        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }
});
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top

const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollTopBtn.classList.add("active");
        } else {
            scrollTopBtn.classList.remove("active");
        }
    });

    scrollTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// РІК АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
const yearEl = document.getElementById("currentYear");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ

// document.querySelectorAll(".js_name").forEach((el) => {
//     el.textContent = "MADE in Zhytomyr";
// });

// заголовок функціЯ щоб не дублювати
// заголовок функціЯ щоб не дублювати
// заголовок функціЯ щоб не дублювати
// заголовок функціЯ щоб не дублювати
// заголовок функціЯ щоб не дублювати

document.querySelectorAll("[data-section-title]").forEach((el) => {
    el.innerHTML = `
      <div class="my_section_title row" data-aos="fade-up">
        <div class="my_subtitle col-12">MADE in Zhytomyr</div>
        <div class="my_title col-12">${el.dataset.title}</div>
        <div class="my_under_title col-12">${el.dataset.under}</div>
      </div>
    `;
});

// щоб правильно працбвала форма
// щоб правильно працбвала форма
// щоб правильно працбвала форма
// щоб правильно працбвала форма
// щоб правильно працбвала форма
// щоб правильно працбвала форма
// щоб правильно працбвала форма
// щоб правильно працбвала форма
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                if (status) status.style.display = "block";
                form.reset();
            } else {
                if (status) {
                    status.innerHTML = "❌ Something went wrong.";
                    status.style.display = "block";
                }
            }
        } catch (error) {
            if (status) {
                status.innerHTML = "❌ Network error.";
                status.style.display = "block";
            }
        }
    });
}
// кнопка копіююваня біля номера рахунку
// кнопка копіююваня біля номера рахунку
// кнопка копіююваня біля номера рахунку
// кнопка копіююваня біля номера рахунку
// кнопка копіююваня біля номера рахунку
// кнопка копіююваня біля номера рахунку
// кнопка копіююваня біля номера рахунку

function copyIBAN(elementId, btn) {
    const text = document
        .getElementById(elementId)
        .innerText.replace(/\s+/g, "");
    navigator.clipboard.writeText(text).then(() => {
        btn.innerHTML = '<i class="bi bi-check-lg"></i>';
        setTimeout(() => {
            btn.innerHTML = '<i class="bi bi-clipboard"></i>';
        }, 1500);
    });
}

// закриття скрол ап на модалці
// закриття скрол ап на модалці
// закриття скрол ап на модалці
const modal = document.getElementById("exampleModal");
const scrollUPP = document.getElementById("scrollUPP");

if (modal) {
    modal.addEventListener("show.bs.modal", function () {
        if (scrollUPP) scrollUPP.classList.add("d-none");
    });

    modal.addEventListener("hidden.bs.modal", function () {
        if (scrollUPP) scrollUPP.classList.remove("d-none");
    });
}

// соцмережі вставка
// соцмережі вставка
// соцмережі вставка
// соцмережі вставка
// соцмережі вставка
// соцмережі вставка
// соцмережі вставка
// соцмережі вставка
// соцмережі вставка

const socialLinks = [
    {
        icon: "bi bi-instagram",
        url: "https://www.instagram.com/madeinzhytomyr/",
    },
    {
        icon: "bi bi-facebook",
        url: "https://www.facebook.com/profile.php?id=61586613398207",
    },
    { icon: "bi bi-tiktok", url: "https://www.tiktok.com/@madeinzhytomyr" },
    { icon: "bi bi-youtube", url: "https://www.youtube.com/@madeinzhytomyr" },
    { icon: "bi bi-telegram", url: "https://t.me/madeinzhytomyr884" },
];

const socialContainers = document.querySelectorAll(".social-links");

socialContainers.forEach((container) => {
    container.innerHTML = "";

    socialLinks.forEach((item) => {
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";

        const i = document.createElement("i");
        i.className = item.icon;

        a.appendChild(i);
        container.appendChild(a);
    });
});

// карта PROJECTS
// карта PROJECTS
// карта PROJECTS
// карта PROJECTS
// карта PROJECTS
// карта PROJECTS
// карта PROJECTS
// карта PROJECTS
// карта PROJECTS
// карта PROJECTS
document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products_2");
    const loadMoreBtn = document.getElementById("loadMoreProjects");
    if (!productsContainer || !loadMoreBtn) return;

    let visibleCount = 3;

    let iso;
    let currentFilter = "*";
    const products = [
        {
            name: "Preschool Learning Activityn",
            desc: "Training attention, memory, motor skills and communication",
            goal: "10 000",
            images: [
                "https://i.postimg.cc/4xCBDHhm/project-3-1.jpg",
                "https://i.postimg.cc/d0wn1MBb/project-3-2.jpg",
                "https://i.postimg.cc/hGssQCZ8/project-3-3.jpg",
                "https://i.postimg.cc/wvbk01pK/project-3-4.jpg",
                "https://i.postimg.cc/j2p4YBCx/project-3-5.jpg",
                "https://i.postimg.cc/ZY2GqRdv/project-3-6.jpg",
                "https://i.postimg.cc/x1SBK45v/project-3-7.jpg",
                "https://i.postimg.cc/Nj7SbkPh/project-3-8.jpg",
                "https://i.postimg.cc/dVmpnjSQ/project-3-9.jpg",
                "https://i.postimg.cc/KYGVW3dP/project-3-10.jpg",
                "https://i.postimg.cc/q71YHMr7/project-3-11.jpg",
                "https://i.postimg.cc/RF8Dqsqt/project-3-12.jpg",
            ],
            category: "Open",
            filter: "2026",

            icons: [
                { icon: "bi bi-calendar", label: "2025" },
                { icon: "bi bi-brush", label: "Workshop" },
                { icon: "bi bi-people", label: "Children" },
            ],

            details: [
                { label: "Location", key: "Zhytomyr • Ukraine" },
                { label: "Category", key: "Workshop" },
                { label: "Date Of The Event", key: "October 18, 2025" },
                { label: "Participants", key: "Preschoolers" },
            ],

            description: [
                {
                    title: "",
                    text: "We strive to create conditions where children can learn, develop their skills and gain valuable experience through play and interaction. Our activity became a great opportunity for kids to broaden their horizons in a comfortable environment.",
                },
                {
                    title: "How the Activity Went",
                    text: "Children completed educational exercises, participated in team games, and trained their motor skills, logic, and imagination. The interactive format made learning interesting and engaging.",
                },
                {
                    title: "Why Is This Important?",
                    text: "Development activities help children build key skills needed for future learning. Such events promote confidence, creative thinking and socialization.",
                },
                {
                    title: "",
                    text: "The project became another step toward creating useful, meaningful and warm events for children in our community.",
                },
            ],

            moments: [
                "Play-based developmental activities",
                "Group work and team exercises",
                "Training attention, logic and motor skills",
                "Friendly atmosphere and mentor support",
            ],

            co_name: "Anastasiia Diachenko",
            co_position: "Project Coordinator",
            co_img: "https://i.postimg.cc/V5Ps9Nrw/anastasia-diachenko.jpg",
            co_desc:
                "“The best learning is learning through play. We are happy to see children discovering new things and showing their abilities.”",

            documents: [],
        },

        {
            name: "Preschool Learning Activityn",
            desc: "Training attention, memory, motor skills and communication",
            goal: "0.00",
            images: [
                "https://i.postimg.cc/4xCBDHhm/project-3-1.jpg",
                "https://i.postimg.cc/d0wn1MBb/project-3-2.jpg",
                "https://i.postimg.cc/hGssQCZ8/project-3-3.jpg",
                "https://i.postimg.cc/wvbk01pK/project-3-4.jpg",
                "https://i.postimg.cc/j2p4YBCx/project-3-5.jpg",
                "https://i.postimg.cc/ZY2GqRdv/project-3-6.jpg",
                "https://i.postimg.cc/x1SBK45v/project-3-7.jpg",
                "https://i.postimg.cc/Nj7SbkPh/project-3-8.jpg",
                "https://i.postimg.cc/dVmpnjSQ/project-3-9.jpg",
                "https://i.postimg.cc/KYGVW3dP/project-3-10.jpg",
                "https://i.postimg.cc/q71YHMr7/project-3-11.jpg",
                "https://i.postimg.cc/RF8Dqsqt/project-3-12.jpg",
            ],
            category: "Close",
            filter: "2025",

            icons: [
                { icon: "bi bi-calendar", label: "2025" },
                { icon: "bi bi-brush", label: "Workshop" },
                { icon: "bi bi-people", label: "Children" },
            ],

            details: [
                { label: "Location", key: "Zhytomyr • Ukraine" },
                { label: "Category", key: "Workshop" },
                { label: "Date Of The Event", key: "October 18, 2025" },
                { label: "Participants", key: "Preschoolers" },
            ],

            description: [
                {
                    title: "",
                    text: "We strive to create conditions where children can learn, develop their skills and gain valuable experience through play and interaction. Our activity became a great opportunity for kids to broaden their horizons in a comfortable environment.",
                },
                {
                    title: "How the Activity Went",
                    text: "Children completed educational exercises, participated in team games, and trained their motor skills, logic, and imagination. The interactive format made learning interesting and engaging.",
                },
                {
                    title: "Why Is This Important?",
                    text: "Development activities help children build key skills needed for future learning. Such events promote confidence, creative thinking and socialization.",
                },
                {
                    title: "",
                    text: "The project became another step toward creating useful, meaningful and warm events for children in our community.",
                },
            ],

            moments: [
                "Play-based developmental activities",
                "Group work and team exercises",
                "Training attention, logic and motor skills",
                "Friendly atmosphere and mentor support",
            ],

            co_name: "Anastasiia Diachenko",
            co_position: "Project Coordinator",
            co_img: "https://i.postimg.cc/V5Ps9Nrw/anastasia-diachenko.jpg",
            co_desc:
                "“The best learning is learning through play. We are happy to see children discovering new things and showing their abilities.”",

            documents: [],
        },

        {
            name: "Dance Workshop for Girls",
            desc: "Developing Rhythm, Grace and Self-Confidence Together",
            goal: "0.00",
            images: [
                "https://i.postimg.cc/LsjKdMX5/project-2-1.jpg",
                "https://i.postimg.cc/mZmxWjbs/project-2-2.jpg",
                "https://i.postimg.cc/kgtL8dWj/project-2-3.jpg",
                "https://i.postimg.cc/QtSzsNrM/project-2-4.jpg",
                "https://i.postimg.cc/wMGbyWMK/project-2-5.jpg",
                "https://i.postimg.cc/CMP2QKNs/project-2-6.jpg",
                "https://i.postimg.cc/FsY65QWP/project-2-7.jpg",
                "https://i.postimg.cc/NfZzQPZK/project-2-8.jpg",
                "https://i.postimg.cc/QtN66LKR/project-2-9.jpg",
                "https://i.postimg.cc/85yZ9yhr/project-2-10.jpg",
                "https://i.postimg.cc/zvVxrnjj/project-2-11.jpg",
                "https://i.postimg.cc/zDcdkczF/project-2-12.jpg",
            ],
            category: "Close",
            filter: "2025",

            icons: [
                { icon: "bi bi-calendar", label: "2025" },
                { icon: "bi bi-brush", label: "Workshop" },
                { icon: "bi bi-people", label: "Children" },
            ],

            details: [
                { label: "Location", key: "Zhytomyr • Ukraine" },
                { label: "Category", key: "Workshop" },
                { label: "Date Of The Event", key: "October 18, 2025" },
                { label: "Participants", key: "Preschoolers" },
            ],

            description: [
                {
                    title: "",
                    text: "We believe that dance is a way of self-expression, confidence and inner harmony. Our workshop gave girls the opportunity to feel free, beautiful and inspired. The project showed how important such events are for youth development and creating a supportive environment.",
                },
                {
                    title: "How the Workshop Went",
                    text: "Professional choreographers helped participants learn basic and modern dance movements. The girls worked as a team, learning rhythm, flexibility and interaction. The workshop took place in a warm atmosphere where everyone could feel part of a creative community.",
                },
                {
                    title: "Why Is This Important?",
                    text: "Dance helps develop not only physical fitness but also emotional well-being. For many girls, this workshop became an opportunity to open up, overcome shyness, make new friends and discover a new side of themselves.",
                },
                {
                    title: "",
                    text: "The completed dance workshop is an important contribution to the development of young women, supporting their self-expression and building a healthy and confident community.",
                },
            ],

            moments: [
                "Dance workshop conducted",
                "Professional mentors and support",
                "Atmosphere of motivation and energy",
                "New skills and self-confidence",
            ],

            co_name: "Anastasiia Diachenko",
            co_position: "Project Coordinator",
            co_img: "https://i.postimg.cc/V5Ps9Nrw/anastasia-diachenko.jpg",
            co_desc:
                "“This workshop allowed girls to feel their strength, beauty and individuality. Dance is about freedom of movement, energy and emotions. We are happy we could create such an atmosphere.”",

            documents: [],
        },

        {
            name: "Drawing Workshop for Children",
            desc: "Developing creativity and imagination through learning, exploration, play, and expression.",
            goal: "0.00",
            images: [
                "https://i.postimg.cc/tCD4fWcm/project-1-1.jpg",
                "https://i.postimg.cc/1Xsy73ry/project-1-2.jpg",
                "https://i.postimg.cc/xTj0KqdN/project-1-3.jpg",
                "https://i.postimg.cc/zXdqp5LS/project-1-4.jpg",
                "https://i.postimg.cc/cLr0bjwf/project-1-5.jpg",
                "https://i.postimg.cc/ZRhm05g3/project-1-6.jpg",
                "https://i.postimg.cc/xCy2mSVV/project-1-7.jpg",
                "https://i.postimg.cc/qqJdXZpk/project-1-8.jpg",
                "https://i.postimg.cc/T1tvkqPY/project-1-9.jpg",
                "https://i.postimg.cc/x86VsydK/project-1-10.jpg",
                "https://i.postimg.cc/ryjTFc9S/project-1-11.jpg",
                "https://i.postimg.cc/zXP1KjMs/project-1-12.jpg",
            ],
            category: "Close",
            filter: "2025",

            icons: [
                { icon: "bi bi-calendar", label: "2025" },
                { icon: "bi bi-brush", label: "Workshop" },
                { icon: "bi bi-people", label: "Children" },
            ],

            details: [
                { label: "Location", key: "Zhytomyr • Ukraine" },
                { label: "Category", key: "Workshop" },
                { label: "Date Of The Event", key: "October 18, 2025" },
                { label: "Participants", key: "Preschoolers" },
            ],

            description: [
                {
                    title: "",
                    text: "Our goal is to create a space where children can discover their talents and experience genuine emotions. The workshop became an important event that showed how much children need creative meetings and support for their development.",
                },
                {
                    title: "How the Workshop Went",
                    text: "Children worked with different art materials, learned new techniques and created their own paintings under the guidance of mentors. Each participant received personal attention, support and the opportunity to express themselves through art.",
                },
                {
                    title: "Why Is This Important?",
                    text: "Such events help children develop emotionally and creatively. Our workshop became a place for inspiration, communication and a sense of support. We believe that art can bring warmth and confidence to children even in difficult times.",
                },
                {
                    title: "",
                    text: "The completed project is another step in the development of children's creativity and strengthening our community.",
                },
            ],

            moments: [
                "Creative workshop for children held",
                "All art materials provided",
                "Friendly and supportive atmosphere",
                "Positive emotions and new skills",
            ],

            co_name: "Anastasiia Diachenko",
            co_position: "Project Coordinator",
            co_img: "https://i.postimg.cc/V5Ps9Nrw/anastasia-diachenko.jpg",
            co_desc:
                "“For us it is important to give children moments of joy. Every painting is a small story created by the child. We are grateful to everyone who joined us and supported this idea.”",

            documents: [],
        },
    ];

    // ====== Створення картки ======
    function createCard(product) {
        const card = document.createElement("div");
        card.className = `
        col-12 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4
        portfolio-item filter-${product.filter}
    `;
        card.style.cssText = "padding: 12px; margin: 0;";

        card.innerHTML = `
        <div class="fundraiser-card neo-card h-100 shadow-lg">
            <!-- Image Block -->
            <div class="fundraiser-img position-relative">
                <img src="${product.images[0]}">
                <span class="project-category ${
                    product.category === "Close"
                        ? "bg-primary"
                        : product.category === "Open"
                        ? "bg-success"
                        : ""
                }">
                    ${product.category}
                </span>
            </div>

            <!-- Content -->
            <div class="fundraiser-content">
                <h5 class="fundraiser-title fw-semibold mt-2">${
                    product.name
                }</h5>
                <p class="fundraiser-desc text-secondary mb-4 small">${
                    product.desc
                }</p>

                <!-- Buttons -->
                <div class="fundraiser-actions d-flex justify-content-between">
                    <div class="goal-badge d-inline-flex align-items-center justify-content-center col me-0 rounded-end-0">
                        <span class="m-0 p-0 pe-2 fw-bold fs-6 ps-2">${
                            product.goal
                        }</span>
                        <span class="m-0 p-0 pe-2 fw-normal small"> USD</span>
                    </div>
                    <a href="${
                        product.link
                    }" class="btn btn-outline-light btn-custom d-flex align-items-center justify-content-center col ms-0 rounded-start-0 border-secondary">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    `;

        // Клік на кнопку "Learn more"
        const linkButton = card.querySelector("a");
        linkButton.addEventListener("click", function (e) {
            e.preventDefault();
            const query = new URLSearchParams({
                name: product.name,
                desc: product.desc,
                goal: product.goal,
                images: JSON.stringify(product.images),
                filter: product.filter,
                icons: JSON.stringify(product.icons),
                details: JSON.stringify(product.details),
                description: JSON.stringify(product.description),
                moments: JSON.stringify(product.moments),
                co_desc: product.co_desc,
                co_img: product.co_img,
                co_name: product.co_name,
                co_position: product.co_position,
                documents: JSON.stringify(product.documents),
            }).toString();

            window.location.href = `index-project.html?${query}`;
        });

        return card;
    }

    // ====== Рендер карток ======
    function renderProducts() {
        productsContainer.innerHTML = "";

        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );

        const visibleProducts = filteredProducts.slice(0, visibleCount);
        visibleProducts.forEach((p) =>
            productsContainer.appendChild(createCard(p))
        );
    }

    // ====== Ініціалізація фільтрів ======
    function initFilters() {
        const filters = document.querySelectorAll(".portfolio-filters li");
        filters.forEach((filter) => {
            filter.addEventListener("click", function () {
                filters.forEach((f) => f.classList.remove("filter-active"));
                this.classList.add("filter-active");

                currentFilter = this.getAttribute("data-filter");
                visibleCount = 3;

                renderProducts();
                updateLoadMoreButton();
            });
        });
    }

    // ====== Load More ======
    function loadMore() {
        visibleCount += 3;
        renderProducts();
        updateLoadMoreButton();
    }

    // ====== Кнопка Load More ======
    function updateLoadMoreButton() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );

        loadMoreBtn.style.display =
            filteredProducts.length > visibleCount &&
            filteredProducts.length > 3
                ? "inline-block"
                : "none";
    }

    // ====== Початковий рендер ======
    function renderInitial() {
        renderProducts();
        initFilters();
        updateLoadMoreButton();
    }

    // ====== Подія на Load More ======
    loadMoreBtn.addEventListener("click", loadMore);

    // ====== Старт ======
    renderInitial();
});

// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project
// 🔹 Ініціалізація при завантаженні index_project

function initProductPage() {
    const card = document.querySelector(".product-card");
    if (!card) return;

    // 🔹 ELEMENTY
    const mainImage = document.querySelector(".main-image");
    const thumbsContainer = document.querySelector(".thumbs");

    const quantityInput = card.querySelector(".quantity-input");
    const plusBtn = card.querySelector(".btn-plus");
    const minusBtn = card.querySelector(".btn-minus");
    const addToCartBtn = document.getElementById("addToCartDynamic");

    const productName = card.querySelector(".product-name");
    const productDesc = card.querySelector(".product-desc");
    const productImg = card.querySelector(".product-img");

    const productCo_desc = card.querySelector(".product-co_desc");
    const productCo_img = card.querySelector(".product-co_img");
    const productCo_name = card.querySelector(".product-co_name");
    const productCo_position = card.querySelector(".product-co_position");

    // 🔹 URL параметри
    const params = new URLSearchParams(window.location.search);
    const product = {
        name: params.get("name") || "",
        desc: params.get("desc") || "",
        images: JSON.parse(params.get("images") || "[]"),

        icons: JSON.parse(params.get("icons") || "[]"),
        details: JSON.parse(params.get("details") || "[]"),
        description: JSON.parse(params.get("description") || "[]"),
        moments: JSON.parse(params.get("moments") || "[]"),

        co_desc: params.get("co_desc") || "",
        co_img: params.get("co_img") || "",
        co_name: params.get("co_name") || "",
        co_position: params.get("co_position") || "",

        documents: JSON.parse(params.get("documents") || "[]"),
    };

    // 🔹 Заповнення контенту (safe)
    document.title = product.name || document.title;

    if (productName) productName.textContent = product.name;
    if (productDesc) productDesc.textContent = product.desc;
    if (productImg) productImg.src = product.img;

    if (productCo_desc) productCo_desc.textContent = product.co_desc;
    if (productCo_img) productCo_img.src = product.co_img;
    if (productCo_name) productCo_name.textContent = product.co_name;
    if (productCo_position)
        productCo_position.textContent = product.co_position;

    // фото
    // фото
    // фото
    // фото
    // фото
    // фото
    // фото

    if (product.images.length) {
        mainImage.src = product.images[0];
        thumbsContainer.innerHTML = "";

        product.images.forEach((src) => {
            const img = document.createElement("img");
            img.className = "thumb";
            img.src = src;

            img.addEventListener("click", () => {
                mainImage.src = src;

                thumbsContainer
                    .querySelectorAll(".thumb")
                    .forEach((t) => t.classList.remove("active"));

                img.classList.add("active");
            });

            thumbsContainer.appendChild(img);
        });
    }

    // icons
    // icons
    // icons
    // icons
    // icons
    // icons
    // icons
    // icons
    // icons
    // icons

    const iconsContainer = card.querySelector(".meta-info");

    if (iconsContainer && product.details && product.icons.length) {
        iconsContainer.innerHTML = ""; // очищаємо старе

        product.icons.forEach((item) => {
            const div = document.createElement("span");

            const iconI = document.createElement("i");
            iconI.className = item.icon || "";

            const labelSpan = document.createElement("span");
            labelSpan.className = "label";
            labelSpan.textContent = item.label || "";

            div.append(iconI, labelSpan);
            iconsContainer.appendChild(div);
        });
    }

    // details
    // details
    // details
    // details
    // details
    // details
    const detailsContainer = card.querySelector(".details-container");

    if (detailsContainer && product.details && product.details.length) {
        detailsContainer.innerHTML = ""; // очищаємо старе

        product.details.forEach((item) => {
            // створюємо контейнер
            const div = document.createElement("div");
            div.className = "info-item";

            // label
            const labelSpan = document.createElement("span");
            labelSpan.className = "label";
            labelSpan.textContent = item.label || "";

            // key
            const keySpan = document.createElement("span");
            keySpan.className = "key";
            keySpan.textContent = item.key || "";

            // додаємо спани у div
            div.appendChild(labelSpan);
            div.appendChild(keySpan);

            // додаємо div у контейнер
            detailsContainer.appendChild(div);
        });
    }

    // description
    // description
    // description
    // description
    // description
    // description
    const descriptionContainer = card.querySelector(".description-container");

    if (descriptionContainer && product.details && product.description.length) {
        descriptionContainer.innerHTML = ""; // очищаємо старе

        product.description.forEach((item) => {
            // створюємо контейнер
            const div = document.createElement("div");

            // title
            const titleH3 = document.createElement("h3");
            titleH3.className = "title";
            titleH3.textContent = item.title || "";

            // text
            const textP = document.createElement("p");
            textP.className = "text";
            textP.textContent = item.text || "";

            // додаємо спани у div
            div.appendChild(titleH3);
            div.appendChild(textP);

            // додаємо div у контейнер
            descriptionContainer.appendChild(div);
        });
    }

    // moments
    // moments
    // moments
    // moments
    // moments
    // moments

    const momentsContainer = card.querySelector(".moments");

    if (momentsContainer && product.moments && product.moments.length) {
        momentsContainer.innerHTML = "";

        product.moments.forEach((moment) => {
            const li = document.createElement("li");

            const i = document.createElement("i");
            i.className = "bi bi-check-circle";

            li.appendChild(i);
            li.append(" " + moment); // текст після іконки

            momentsContainer.appendChild(li);
        });
    }
    // documents
    // documents
    // documents
    // documents
    // documents
    // documents

    const tagsContainer = card.querySelector(".tags");
    if (tagsContainer && product.documents.length) {
        tagsContainer.innerHTML = "";

        product.documents.forEach((item) => {
            const a = document.createElement("a");
            a.href = item.url || "#";
            a.textContent = item.text;
            a.target = "_blank"; // відкриваємо в новому вікні
            a.rel = "noopener noreferrer";
            tagsContainer.appendChild(a);
        });
    }

    // кількість
    // кількість
    // кількість
    // кількість
    // кількість
    // кількість
    // кількість

    plusBtn?.addEventListener("click", () => {
        quantityInput.value = Number(quantityInput.value) + 1;
    });

    minusBtn?.addEventListener("click", () => {
        quantityInput.value = Math.max(1, Number(quantityInput.value) - 1);
    });

    // додати в кошик
    // додати в кошик
    // додати в кошик
    // додати в кошик
    // додати в кошик
    // додати в кошик
    // додати в кошик

    addToCartBtn?.addEventListener("click", () => {
        addUserFromInput(
            product.images[0] ?? "",
            product.name,
            product.price,
            product.link,
            Number(quantityInput.value) || 1
        );
    });

    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    // Приклад масиву фото
    const images = product.images; // або будь-який масив URL

    let currentIndex = 0;

    // Встановлюємо перше фото
    mainImage.src = images[0];
    thumbsContainer.innerHTML = "";

    // Створюємо мініатюри
    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        if (index === 0) img.classList.add("active");

        img.addEventListener("click", () => {
            currentIndex = index;
            updateMainImage();
        });

        thumbsContainer.appendChild(img);
    });

    // Функція оновлення головного фото і активної мініатюри
    // Функція оновлення головного фото і активної мініатюри
    // Функція оновлення головного фото і активної мініатюри
    // Функція оновлення головного фото і активної мініатюри

    function updateMainImage() {
        mainImage.src = images[currentIndex];

        thumbsContainer.querySelectorAll("img").forEach((t, i) => {
            t.classList.toggle("active", i === currentIndex);
        });

        // Прокручуємо активну мініатюру по центру контейнера
        const activeThumb = thumbsContainer.querySelector("img.active");
        if (activeThumb) {
            activeThumb.scrollIntoView({
                behavior: "smooth",
                block: "nearest", // по вертикалі, якщо потрібно
                inline: "center", // по горизонталі
            });
        }
    }
    // Стрілки
    // Стрілки
    // Стрілки
    // Стрілки
    // Стрілки
    prevBtn?.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = images.length - 1;
        updateMainImage();
    });

    nextBtn?.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= images.length) currentIndex = 0;
        updateMainImage();
    });

    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");

    let zoomed = false; // стан збільшення

    // Відкриття lightbox
    mainImage.addEventListener("click", () => {
        lightboxImg.src = mainImage.src;
        lightbox.style.display = "flex";
        lightboxImg.classList.remove("zoom-out");
        lightboxImg.classList.add("zoom-in");
        zoomed = false;
    });

    // Відкриття lightbox по натиску на головне фото
    mainImage?.addEventListener("click", () => {
        // знаходимо індекс головного фото в масиві images
        const index = images.indexOf(mainImage.src);
        // якщо не знайдено, беремо 0
        openLightbox(index >= 0 ? index : 0);
    });

    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото

    lightboxImg.addEventListener("click", (e) => {
        const rect = lightboxImg.getBoundingClientRect();

        // координати кліку відносно зображення
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        // transform-origin у відсотках
        const originX = (offsetX / rect.width) * 100;
        const originY = (offsetY / rect.height) * 100;

        // Збільшення від точки кліку
        if (!zoomed) {
            lightboxImg.style.transformOrigin = `${originX}% ${originY}%`;
            lightboxImg.style.transform = "scale(3.0)";
            zoomed = true;
            lightboxImg.classList.add("zoomed"); // додаємо клас для zoom-out курсора
        } else {
            // Зменшення назад, від тієї ж точки
            lightboxImg.style.transform = "scale(1)";
            zoomed = false;
            // залишаємо transformOrigin від точки кліку
            lightboxImg.classList.remove("zoomed"); // повертаємо zoom-in курсор
        }
    });
    // Закриття по хрестику
    // Закриття по хрестику
    // Закриття по хрестику
    // Закриття по хрестику

    // Закриття по хрестику
    lightboxClose?.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.style.transform = "scale(1)";
        zoomed = false;

        // скролбар відновлення
        closeLightbox();
    });
    // Закриття по ESC
    // Закриття по ESC
    // Закриття по ESC
    // Закриття по ESC

    // Закриття по ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
            lightboxImg.style.transform = "scale(1)";
            lightboxImg.classList.remove("zoom-out");
            lightboxImg.classList.add("zoom-in");
            zoomed = false;

            // скролбар відновлення
            closeLightbox();
        }
    });
    // Закриття по кліку на фон
    // Закриття по кліку на фон
    // Закриття по кліку на фон
    // Закриття по кліку на фон

    // Закриття по кліку на фон
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            lightboxImg.style.transform = "scale(1)";
            lightboxImg.classList.remove("zoom-out");
            lightboxImg.classList.add("zoom-in");
            zoomed = false;

            // скролбар відновлення
            closeLightbox();
        }
    });

    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран

    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");
    const lightboxThumbs = document.getElementById("lightbox-thumbs");

    function updateThumbs() {
        lightboxThumbs.innerHTML = "";

        images.forEach((src, i) => {
            const img = document.createElement("img");
            img.src = src;
            if (i === currentIndex) img.classList.add("active");
            img.addEventListener("click", () => openLightbox(i));
            lightboxThumbs.appendChild(img);
        });

        // Центруємо активну мініатюру після рендеру
        requestAnimationFrame(() => {
            const activeThumb = lightboxThumbs.querySelector("img.active");
            if (activeThumb) {
                const containerRect = lightboxThumbs.getBoundingClientRect();
                const thumbRect = activeThumb.getBoundingClientRect();

                const scrollLeft =
                    lightboxThumbs.scrollLeft +
                    thumbRect.left -
                    containerRect.left -
                    containerRect.width / 2 +
                    thumbRect.width / 2;

                lightboxThumbs.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth",
                });
            }
        });
    }

    lightboxPrev?.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);

        // прибираєм zoom
        // прибираєм zoom
        // прибираєм zoom
        lightboxImg.style.transform = "scale(1)";
        zoomed = false;
        // залишаємо transformOrigin від точки кліку
        lightboxImg.classList.remove("zoomed"); // повертаємо zoom-in курсор
    });

    lightboxNext?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);

        // прибираєм zoom
        // прибираєм zoom
        // прибираєм zoom
        lightboxImg.style.transform = "scale(1)";
        zoomed = false;
        // залишаємо transformOrigin від точки кліку
        lightboxImg.classList.remove("zoomed"); // повертаємо zoom-in курсор
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", () => {
            lightbox.style.display = "none";
            document.body.style.overflow = "";
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") lightbox.style.display = "none";
    });

    // Приклад відкриття lightbox з головного зображення

    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.style.display = "flex";
        updateThumbs();

        // Забороняємо скрол сторінки
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.style.display = "none";

        // Відновлюємо скрол
        document.body.style.overflow = "";
    }

    console.log("✅ Product loaded:", product);
}

document.addEventListener("DOMContentLoaded", initProductPage);
