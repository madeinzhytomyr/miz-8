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

// document.addEventListener("DOMContentLoaded", function () {
//     const services = [
//         {
//             title: "Support for the Ukrainian Army",
//             icon: "bi bi-fire",
//             description:
//                 "We help the Ukrainian army in the war against Russia by collecting essential supplies, supporting soldiers, and assisting with their needs.",
//         },
//         {
//             title: "Support for People Affected by the War",
//             icon: "bi bi-people",
//             description:
//                 "We help people who have been affected by the war with Russia by providing humanitarian aid, support, and essential resources for living.",
//         },
//         {
//             title: "Support for Children",
//             icon: "bi bi-graph-up-arrow",
//             description:
//                 "We help children in need by organizing fundraising for treatment, rehabilitation, and essential support, giving them and their families hope for a better future.",
//         },
//         {
//             title: "Support for Orphanages",
//             icon: "bi bi-heart-fill",
//             description:
//                 "We help orphanages by providing children with essential items, gifts, educational materials, and organizing charitable activities.",
//         },
//         {
//             title: "Humanitarian and Charitable Aid",
//             icon: "bi bi-stars",
//             description:
//                 "We organize fundraising campaigns and charity events to support people who are facing difficult life situations.",
//         },
//         {
//             title: "International Cooperation",
//             icon: "bi bi-compass",
//             description:
//                 "We cooperate with local and international partners to implement humanitarian and social projects.",
//         },
//     ];

//     const container = document.getElementById("servicesContainer");

//     if (!container) {
//         console.error("❌ Контейнер #servicesContainer не знайдено!");
//         return;
//     }

//     function createServiceItem(item, i) {
//         const div = document.createElement("div");
//         div.className = "col-md-6 col-lg-4";
//         div.style.cssText = "padding: 12px; margin: 0;";

//         div.innerHTML = `
//             <div class="service-item row align-items-center">
//                 <div class="m-0 p-0 col-auto">
//                     <div class="icon-wrapper">
//                         <i class="m-0 p-0 ${item.icon}"></i>
//                     </div>
//                 </div>

//                 <div class="m-0 p-0 ps-4 col text-start">
//                     <h4 class="m-0 p-0 pb-2">${item.title}</h4>
//                     <a href="#contact" class=" read-more ">
//                         <span>Support</span>
//                         <i class="m-0 p-0 bi bi-arrow-right"></i>
//                     </a>
//                 </div>

//                 <p class="m-0 p-0 text-start">${item.description}</p>
//             </div>
//         `;

//         return div;
//     }

//     // 🔹 Рендер
//     services.forEach((item, i) => {
//         container.appendChild(createServiceItem(item, i));
//     });
// });

// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
// карта ЗУСТРІЧІ
document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products_2");
    const loadMoreBtn = document.getElementById("loadMoreProjects");
    if (!productsContainer || !loadMoreBtn) return;

    let visibleCount = 3;
    let iso;
    let currentFilter = "*";
    const products = [
        {
            name: "Coming Soon",
            img: "https://i.postimg.cc/jjDjYd4c/photo-2026-03-03-23-56-04.jpg",
            category: "Coming Soon",
            tags: ["Coming", "Soon"],
            date: "Coming Soon",
            linkDetails: "https://www.instagram.com/p/DT8KW-Bja2W/",
            filter: "2026",
        },
        {
            name: "Coming Soon",
            img: "https://i.postimg.cc/jjDjYd4c/photo-2026-03-03-23-56-04.jpg",
            category: "Coming Soon",
            tags: ["Coming", "Soon"],
            date: "Coming Soon",
            linkDetails: "https://www.instagram.com/p/DT8KW-Bja2W/",
            filter: "2026",
        },
        {
            name: "Coming Soon",
            img: "https://i.postimg.cc/jjDjYd4c/photo-2026-03-03-23-56-04.jpg",
            category: "Coming Soon",
            tags: ["Coming", "Soon"],
            date: "Coming Soon",
            linkDetails: "https://www.instagram.com/p/DT8KW-Bja2W/",
            filter: "2026",
        },
        {
            name: "Coming Soon",
            img: "https://i.postimg.cc/jjDjYd4c/photo-2026-03-03-23-56-04.jpg",
            category: "Coming Soon",
            tags: ["Coming", "Soon"],
            date: "Coming Soon",
            linkDetails: "https://www.instagram.com/p/DT8KW-Bja2W/",
            filter: "2026",
        },

        // {
        //     name: "Developmental Activity for Preschoolers",
        //     img: "https://i.postimg.cc/4xCBDHhm/project-3-1.jpg",
        //     category: "COMPLETED",
        //     tags: ["Krakow", "Poland"],
        //     date: "18 August 2023",
        //     linkDetails: "/",
        //     filter: "2023",
        // },
        // {
        //     name: "Dance Workshop for Girls",
        //     img: "https://i.postimg.cc/LsjKdMX5/project-2-1.jpg",
        //     category: "COMPLETED",
        //     tags: ["Krakow", "Poland"],
        //     date: "20 July 2023",
        //     linkDetails: "/",
        //     filter: "2023",
        // },
        // {
        //     name: "Drawing Workshop for Kids",
        //     img: "https://i.postimg.cc/tCD4fWcm/project-1-1.jpg",
        //     category: "COMPLETED",
        //     tags: ["Krakow", "Poland"],
        //     date: "30 Juny 2023",
        //     linkDetails: "/",
        //     filter: "2023",
        // },
        // {
        //     name: "Donate for a child (Siepomaga)",
        //     img: "https://i.postimg.cc/vTr1XD9D/photo-2026-03-05-14-39-12.jpg",
        //     category: "COMPLETED",
        //     tags: ["Krakow", "Poland"],
        //     date: "30 Februar 2023",
        //     linkDetails: "/",
        //     filter: "2024",
        // },
    ];

    function createCard(product) {
        const card = document.createElement("div");
        card.className = `m-0 col-lg-4 col-md-6 portfolio-item isotope-item filter-${product.filter}`;
        card.style.padding = "12px";
        card.innerHTML = `
            <a href="${
                product.linkDetails
            }" class="portfolio-card " style="cursor: pointer;" target="_blank">
                <div class="portfolio-image-container ">
                    <img src="${product.img}" alt="${
            product.name
        }" class="img-fluid" loading="lazy">


                    <div class="portfolio-overlay">
                        <div class="portfolio-info">

                            <span class="project-category ${
                                product.category === "COMPLETED"
                                    ? "bg-primary"
                                    : product.category === "IN THE PROCESS"
                                    ? "bg-primary"
                                    : ""
                            }">
                                ${product.category}
                            </span>


                            <h4 class="mt-4" style="text-shado2w: 2px 2px 5px black">${
                                product.name
                            }</h4>
                        </div>
                        <div class="portfolio-actions ">

                         <button type="button" class="btn btn-primary portfolio-details bg-primary text-white fw-bold rounded-3" data-bs-toggle="modal" 
                         data-bs-target="${
                             product.linkDetails
                         }"> <i class="bi bi-arrow-right fw-bold"></i>   </button>

                        </div>
                    </div>

                    
                </div>
                <div class="portfolio-meta">
                    <div class="project-tags">${product.tags
                        .map((t) => `<span class="tag">${t}</span>`)
                        .join("")}</div>
                    <div class="project-year">${product.date}</div>
                </div>
            </a>
        `;

        return card;
    }

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

    function initIsotope() {
        imagesLoaded(productsContainer, function () {
            iso = new Isotope(productsContainer, {
                itemSelector: ".portfolio-item",
                layoutMode: "masonry",
                transitionDuration: "0.0s",
            });

            const filters = document.querySelectorAll(".portfolio-filters li");
            filters.forEach((filter) => {
                filter.addEventListener("click", function () {
                    filters.forEach((f) => f.classList.remove("filter-active"));
                    this.classList.add("filter-active");

                    currentFilter = this.getAttribute("data-filter");
                    visibleCount = 3;

                    // --- Очищаємо контейнер ---
                    const allItems =
                        productsContainer.querySelectorAll(".portfolio-item");
                    allItems.forEach((item) => item.remove());

                    // --- Додаємо перші 3 елементи фільтру ---
                    const filteredProducts = products.filter(
                        (p) =>
                            currentFilter === "*" ||
                            `.filter-${p.filter}` === currentFilter
                    );
                    const initialProducts = filteredProducts.slice(
                        0,
                        visibleCount
                    );
                    initialProducts.forEach((p) =>
                        productsContainer.appendChild(createCard(p))
                    );

                    // --- Оновлюємо Isotope ---
                    iso.reloadItems();
                    iso.arrange({ filter: currentFilter });

                    updateLoadMoreButton();
                });
            });

            updateLoadMoreButton();
        });
    }

    function renderInitial() {
        const initialProducts = products.slice(0, visibleCount);
        initialProducts.forEach((p) =>
            productsContainer.appendChild(createCard(p))
        );
        visibleCount = initialProducts.length;
        initIsotope();
    }

    function loadMore() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );
        const nextVisible = visibleCount + 3;
        const newCards = [];
        for (
            let i = visibleCount;
            i < nextVisible && i < filteredProducts.length;
            i++
        ) {
            const card = createCard(filteredProducts[i]);
            productsContainer.appendChild(card);
            newCards.push(card);
        }
        visibleCount = Math.min(nextVisible, filteredProducts.length);

        if (iso) {
            iso.appended(newCards);
            iso.layout();
        }

        updateLoadMoreButton();
    }

    loadMoreBtn.addEventListener("click", loadMore);
    renderInitial();
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
            position: "Volunteer",
            social: [
                // {  icon: "bi bi-instagram", link: "https://www.instagram.com/pushkar_roma/", },
                // { icon: "bi bi-youtube", link: "https://www.youtube.com/" },
                // { icon: "bi bi-tiktok", link: "https://www.tiktok.com/" },
            ],
        },

        {
            name: "Roman",
            img: "https://i.postimg.cc/y81g9zCn/8009cfc4-173a-429b-bcf6-0b2c20c38c3b.jpg",
            position: "Volunteer",
            social: [],
        },
        {
            name: "Artem",
            img: "https://i.postimg.cc/y81g9zCn/8009cfc4-173a-429b-bcf6-0b2c20c38c3b.jpg",
            position: "Volunteer",
            social: [],
        },
        {
            name: "Oleksandr",
            img: "https://i.postimg.cc/y81g9zCn/8009cfc4-173a-429b-bcf6-0b2c20c38c3b.jpg",
            position: "Volunteer",
            social: [],
        },
        {
            name: "Sofiia",
            img: "https://i.postimg.cc/y81g9zCn/8009cfc4-173a-429b-bcf6-0b2c20c38c3b.jpg",
            position: "Volunteer",
            social: [],
        },
    ];

    const container = document.getElementById("products_199");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxName = document.getElementById("lightbox-name");
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
    products.forEach((p) => {
        container.appendChild(createCard(p));
    });

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
        const cardWidth = container.children[0].offsetWidth + 0; // картка + gap
        container.style.transform = `translateX(${
            -currentIndex * cardWidth
        }px)`;
    }

    document.getElementById("nextCard99").addEventListener("click", () => {
        const visible = perView();
        currentIndex = Math.min(currentIndex + 1, products.length - visible);
        updateSlider();
    });

    document.getElementById("prevCard99").addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    window.addEventListener("resize", updateSlider);

    updateSlider();
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
    const mobileNavToggle = document.querySelector(".my_burger");
    const body = document.querySelector("body");
    const navMenu = document.querySelector("#navmenu"); // правильний id
    const scrollUPP = document.getElementById("scrollUPP");

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", function (e) {
            e.preventDefault();
            body.classList.toggle("mobile-nav-active");

            // Змінюємо іконку (бургер <-> хрестик)
            this.classList.toggle("bi-list");
            this.classList.toggle("bi-x");

            // додаємо / забираємо клас
            scrollUPP.classList.toggle("d-none");
        });
    }

    // Закривання меню після кліку по пункту
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function () {
            if (body.classList.contains("mobile-nav-active")) {
                body.classList.remove("mobile-nav-active");
                mobileNavToggle.classList.add("bi-list");
                mobileNavToggle.classList.remove("bi-x");
            }
        });
    });
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
document.getElementById("currentYear").textContent = new Date().getFullYear();

// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ
// назва АВТОМАТИЧНО ОНОВЛЮЄТЬСЯ

document.querySelectorAll(".js_name").forEach((el) => {
    el.textContent = "MADE in Zhytomyr";
});

// заголовок функціЯ щоб не дублювати
// заголовок функціЯ щоб не дублювати
// заголовок функціЯ щоб не дублювати
// заголовок функціЯ щоб не дублювати

function renderSectionTitles(lang = "en") {
    document.querySelectorAll("[data-section-title]").forEach((el) => {
        let title = el.dataset.title;
        let under = el.dataset.under;

        if (el.dataset.i18nTitle) {
            title = translations[lang][el.dataset.i18nTitle];
        }

        if (el.dataset.i18nUnder) {
            under = translations[lang][el.dataset.i18nUnder];
        }

        el.innerHTML = `
        <div class="my_section_title row" data-aos="fade-up">
          <div class="my_subtitle col-12">MADE in Zhytomyr</div>
          <div class="my_title col-12 text-center">${title}</div>
          <div class="my_under_title col-12 text">${under}</div>
        </div>


      `;
    });
}

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

form.addEventListener("submit", async function (e) {
    e.preventDefault(); // зупиняємо стандартну відправку

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
            status.style.display = "block";
            form.reset();
        } else {
            status.innerHTML = "❌ Something went wrong.";
            status.style.display = "block";
        }
    } catch (error) {
        status.innerHTML = "❌ Network error.";
        status.style.display = "block";
    }
});

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

// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови
// зміна мови

// 3️⃣ Додай словник мов
// 3️⃣ Додай словник мов
// 3️⃣ Додай словник мов
// 3️⃣ Додай словник мов
// 3️⃣ Додай словник мов

const translations = {
    en: {
        motto: "Together, we can make the impossible possible!",

        // Навігація
        about: "About us",
        directions: "Directions",
        activities: "Activities",
        team: "Team",
        contact: "Contact",
        support: "Support Us",
        donate: "Donate Now",
        // volunteer: "Become a Volunteer",
        // internalNeeds: "Internal Needs",
        // getMembership: "Get Membership",

        // Hero Section
        heroSlogan: "Together, we can make the impossible possible!",

        // About Section
        aboutTitle: "About us",
        aboutSubtitle:
            "We are a non-profit organization that unites caring and active people to support communities and create sustainable, meaningful change.",

        whoWeAreTag: "Who We Are",
        whoWeAreTitle: "Together for Positive Change",
        whoWeAreText1:
            "We are a non-profit organization that brings together active and caring people who want to make a difference. We support one another, develop initiatives, and work to strengthen our community.",
        whoWeAreText2:
            "Our path is built on simple but meaningful actions: collaboration, honest dialogue, service to others, and consistent efforts toward sustainable development. Through these steps, we create real and lasting impact.",
        projects: "Projects",
        activeMembers: "Community Members",
        meetingPlace: "Meeting Place",
        howToJoin: "How to Join",

        // Services Section
        directionsTitle: "Directions",
        directionsSubtitle:
            "We implement social and charitable initiatives that support people, strengthen communities, and drive positive change.",

        serviceArmyTitle: "Support for the Army",
        serviceArmyText:
            "We help the Ukrainian army by collecting supplies and supporting soldiers.",

        serviceWarTitle: "Aid for War Victims",
        serviceWarText:
            "We provide humanitarian aid and support to people affected by the war.",

        serviceChildrenTitle: "Support for Children",
        serviceChildrenText:
            "We organize fundraising for treatment, rehabilitation and support for children.",

        serviceOrphanTitle: "Support for Orphanages",
        serviceOrphanText:
            "We provide orphanages with essential items and organize charitable activities.",

            serviceHumanTitle: "Humanitarian Aid",
            serviceHumanText:
            "We organize charity campaigns to help people in difficult life situations.",

            serviceInternationalTitle: "International Partnership",
            serviceInternationalText:
            "We cooperate with international partners on humanitarian projects.",

        makeADifference: "Make a Difference!",
        makeADifferenceText:
            "Your donation helps us support people, strengthen communities, and create positive change. Every donation brings real help to someone in need.",

        // Portfolio Section
        activitiesTitle: "Our Activities",
        activitiesSubtitle:
            "Explore our charitable events and initiatives, where we support others, unite communities, and create positive change.",

        loadMoreProjects: "Load More Projects",
        helpUsChangeLives: "Help Us Change Lives",
        helpUsChangeLivesText:
            "Even a small donation can support people, strengthen communities, and make a real impact.",

        // Team Section
        teamTitle: "Our Team",
        teamSubtitle:
            "We are a community of caring people committed to helping others and making the world better.",
        supportOurWork: "Support Our Work",
        back: "Back",
        forward: "Forward",

        // Support Section
        supportTitle: "Support Us",
        supportSubtitle:
            "Your support helps us develop charitable projects, implement important initiatives, and assist those in need.",

        supportMissionTitle: "Support Our Work",
        supportMissionText:
            "Your contribution helps us develop charitable projects, organize initiatives, and provide assistance to those who need it most.",
        donateNow: "Donate Now",

        internalNeedsTitle: "Internal Needs",
        internalNeedsText:
            "Donations for internal needs help support our work. A significant part of these funds is used for advertising to attract more people to donate.",
        supportOurWork1: "Support Our Work",

        becomeVolunteerTitle: "Become a Volunteer",
        becomeVolunteerText:
            "People who join our community help us organize initiatives, support charitable projects, and make a positive impact through good deeds.",
        joinUs: "Join Us",

        transparencyTitle: "Transparency & Accountability",
        transparencyText:
            "Donations made to support our general activities are fully accounted for. We publish monthly reports detailing all incoming donations and expenses. Donations made for internal organizational needs help us maintain and develop the organization and cover operational expenses such as administration, infrastructure, promotion, and project development. These funds are managed at the organization’s discretion to ensure stable operations and long-term impact. Donations allocated for internal needs are not included in public financial reports. We sincerely thank everyone who supports our mission and helps us continue our work.",

        // Contact Section
        contactTitle: "Contact us",
        contactSubtitle:
            "Do you have any questions or would you like to join our initiatives? We are always open to communication and cooperation!",

        email: "Email",
        address: "Address",
        yourName: "Your name",
        yourEmail: "Your email address",
        messageSubject: "Message subject",
        yourMessage: "Your message",
        sendMessage: "Send message",
        messageSent: "✅ Message sent!",

        // Footer
        links: "LINKS",
        supportFooter: "SUPPORT",
        contactFooter: "CONTACT",
        allRightsReserved: "All rights reserved",
        footerText:
            "A community of caring individuals committed to creating real, measurable impact. Together, we run charitable projects, provide support to those in need, and create meaningful change.",
    },

    ua: {
        motto: "Разом ми можемо зробити неможливе можливим!",

        // Навігація
        about: "Про нас",
        directions: "Напрямки",
        activities: "Діяльність",
        team: "Команда",
        contact: "Контакти",
        support: "Підтримати",
        donate: "Задонатити",
        // volunteer: "Стати волонтером",
        // internalNeeds: "Внутрішні потреби",
        // getMembership: "Отримати членство",

        // Hero Section
        heroSlogan: "Разом ми можемо зробити неможливе можливим!",

        // About Section
        aboutTitle: "Про нас",
        aboutSubtitle:
            "Ми-некомерційна організація, яка об'єднує небайдужих і активних людей для підтримки спільнот і створення стійких, значущих змін.",

        whoWeAreTag: "Хто ми",
        whoWeAreTitle: "Разом за позитивні зміни",
        whoWeAreText1:
            "Ми – неприбуткова організація, яка об’єднує активних та небайдужих людей, які хочуть змінювати світ. Ми підтримуємо один одного, розвиваємо ініціативи та працюємо на зміцнення нашої спільноти.",
        whoWeAreText2:
            "Наш шлях будується на простих, але значущих діях: співпраця, чесний діалог, служіння іншим та постійні зусилля задля сталого розвитку. Через ці кроки ми створюємо реальний та довготривалий вплив.",
        projects: "Проекти",
        activeMembers: "Учасники спільноти",
        meetingPlace: "Місце зустрічей",
        howToJoin: "Як приєднатися",

        // Services Section
        directionsTitle: "Напрямки",
        directionsSubtitle:
            "Ми реалізуємо соціальні та благодійні ініціативи, які підтримують людей, зміцнюють спільноти та сприяють позитивним змінам.",
        serviceArmyTitle: "Підтримка ЗСУ",
        serviceArmyText:
            "Ми допомагаємо українській армії, збираючи необхідні речі та підтримуючи військових.",

        serviceWarTitle: "Допомога жертвам війни",
        serviceWarText:
            "Ми надаємо гуманітарну допомогу людям, які постраждали від війни.",

        serviceChildrenTitle: "Підтримка дітей",
        serviceChildrenText:
            "Ми організовуємо збори коштів на лікування та підтримку дітей.",

        serviceOrphanTitle: "Підтримка дитбудинків",
        serviceOrphanText:
            "Ми допомагаємо дитячим будинкам речами та організовуємо благодійні заходи.",

        serviceHumanTitle: "Гуманітарна допомога",
        serviceHumanText:
            "Ми проводимо благодійні збори для допомоги людям у складних життєвих ситуаціях.",

        serviceInternationalTitle: "Міжнародне партнерство",
        serviceInternationalText:
            "Ми співпрацюємо з міжнародними партнерами для реалізації гуманітарних проєктів.",
        makeADifference: "Зроби різницю!",
        makeADifferenceText:
            "Ваша пожертва допомагає нам підтримувати людей, зміцнювати спільноти та створювати позитивні зміни. Кожна пожертва приносить реальну допомогу тому, хто її потребує.",

        // Portfolio Section
        activitiesTitle: "Наша діяльність",
        activitiesSubtitle:
            "Дізнайтеся про наші благодійні події та ініціативи, де ми підтримуємо інших, об’єднуємо спільноти та створюємо позитивні зміни.",

        loadMoreProjects: "Завантажити більше проєктів",
        helpUsChangeLives: "Допоможіть змінити життя",
        helpUsChangeLivesText:
            "Навіть невелика пожертва може підтримати людей, зміцнити спільноти та мати реальний вплив.",

        // Team Section
        teamTitle: "Наша команда",
        teamSubtitle:
            "Ми – спільнота небайдужих людей, що прагнуть допомагати іншим та робити світ кращим.",

        supportOurWork: "Підтримати нашу роботу",
        back: "Назад",
        forward: "Вперед",

        // Support Section
        supportTitle: "Підтримайте нас",
        supportSubtitle:
            "Ваша підтримка допомагає нам реалізовувати благодійні проєкти, впроваджувати важливі ініціативи та допомагати тим, хто цього потребує.",

        supportMissionTitle: "Підтримати нашу місію",
        supportMissionText:
            "Ваш внесок допомагає нам реалізовувати благодійні проєкти, організовувати ініціативи та надавати допомогу тим, хто цього потребує найбільше.",
        donateNow: "Пожертвувати",

        internalNeedsTitle: "Внутрішні потреби",
        internalNeedsText:
            "Пожертви на внутрішні потреби допомагають підтримувати нашу роботу. Значна частина цих коштів спрямовується на рекламу, щоб залучити більше людей до пожертв.",
        supportOurWork1: "Підтримати наc",

        becomeVolunteerTitle: "Стати волонтером",
        becomeVolunteerText:
            "Люди, які приєднуються до нашої спільноти, допомагають організовувати ініціативи, підтримувати благодійні проєкти та робити позитивний вплив через добрі справи.",
        joinUs: "Доєднатися",
        transparencyTitle: "Прозорість та підзвітність",
        transparencyText:
            "Пожертви, зроблені для підтримки загальної діяльності, повністю враховуються. Ми публікуємо щомісячні звіти про всі надходження та витрати. Пожертви на внутрішні потреби допомагають підтримувати та розвивати організацію і покривати операційні витрати, такі як адміністрація, інфраструктура, просування та розвиток проєктів. Ці кошти управляються на розсуд організації для забезпечення стабільної роботи та довгострокового впливу. Пожертви, призначені для внутрішніх потреб, не включаються до публічних фінансових звітів. Щиро дякуємо всім, хто підтримує нашу місію та допомагає нам продовжувати роботу.",

        // Contact Section
        contactTitle: "Контакти",
        contactSubtitle:
            "У вас є питання або ви хочете приєднатися до наших ініціатив? Ми завжди відкриті до спілкування та співпраці!",

        email: "Електронна пошта",
        address: "Адреса",
        yourName: "Ваше ім'я",
        yourEmail: "Ваш email",
        messageSubject: "Тема повідомлення",
        yourMessage: "Ваше повідомлення",
        sendMessage: "Відправити повідомлення",
        messageSent: "✅ Повідомлення надіслано!",

        // Footer
        links: "ПОСИЛАННЯ",
        supportFooter: "ПІДТРИМКА",
        contactFooter: "КОНТАКТИ",
        allRightsReserved: "Всі права захищені",
        footerText:
            "Спільнота небайдужих людей прагне до створення реальних, відчутних результатів. Разом, ми біжимо благодійні проекти, надавати підтримку тим, хто її потребує, і створити значущі зміни.",
    },

    de: {
        motto: "Gemeinsam können wir das Unmögliche möglich machen!",

        // Навігація
        about: "Über uns",
        directions: "Richtungen",
        activities: "Aktivitäten",
        team: "Team",
        contact: "Kontakt",
        support: "Unterstützen",
        donate: "Spenden",
        // volunteer: "Freiwilliger werden",
        // internalNeeds: "Interne Bedürfnisse",
        // getMembership: "Mitgliedschaft erhalten",

        // Hero Section
        heroSlogan: "Gemeinsam können wir das Unmögliche möglich machen!",

        // About Section
        aboutTitle: "Über uns",
        aboutSubtitle:
            "Wir sind eine gemeinnützige Organisation, die fürsorgliche und aktive Menschen vereint, um Gemeinschaften zu unterstützen und nachhaltige, sinnvolle Veränderungen herbeizuführen.",

        whoWeAreTag: "Wer wir sind",
        whoWeAreTitle: "Gemeinsam für positive Veränderungen",
        whoWeAreText1:
            "Wir sind eine gemeinnützige Organisation, die aktive und fürsorgliche Menschen zusammenbringt, die einen Unterschied machen möchten. Wir unterstützen uns gegenseitig, entwickeln Initiativen und arbeiten daran, unsere Gemeinschaft zu stärken.",
        whoWeAreText2:
            "Unser Weg basiert auf einfachen, aber bedeutungsvollen Handlungen: Zusammenarbeit, ehrlicher Dialog, Dienst an anderen und konsequente Bemühungen um nachhaltige Entwicklung. Durch diese Schritte schaffen wir echte und dauerhafte Wirkung.",
        projects: "Projekte",
        activeMembers: "Mitglieder",
        meetingPlace: "Treffpunkt",
        howToJoin: "Wie beitreten",

        // Services Section
        directionsTitle: "Richtungen",
        directionsSubtitle:
            "Wir setzen soziale und wohltätige Initiativen um, die Menschen unterstützen, Gemeinschaften stärken und positive Veränderungen vorantreiben.",
            serviceArmyTitle: "Unterstützung der Armee",
            serviceArmyText:
            "Wir helfen der ukrainischen Armee mit wichtigen Materialien und Unterstützung für Soldaten.",

            serviceWarTitle: "Hilfe für Kriegsopfer",
            serviceWarText:
            "Wir leisten humanitäre Hilfe für Menschen, die vom Krieg betroffen sind.",

        serviceChildrenTitle: "Hilfe für Kinder",
        serviceChildrenText:
            "Wir organisieren Spendenaktionen für Behandlung und Unterstützung von Kindern.",

        serviceOrphanTitle: "Hilfe für Waisenhäuser",
        serviceOrphanText:
            "Wir unterstützen Waisenhäuser mit wichtigen Dingen und organisieren Wohltätigkeitsaktionen.",

            serviceHumanTitle: "Humanitäre Hilfe",
            serviceHumanText:
            "Wir organisieren Spendenaktionen für Menschen in schwierigen Lebenssituationen.",

        serviceInternationalTitle: "Internationale Zusammenarbeit",
        serviceInternationalText:
            "Wir arbeiten mit internationalen Partnern an humanitären Projekten.",
        makeADifference: "Mach einen Unterschied!",
        makeADifferenceText:
            "Ihre Spende hilft uns, Menschen zu unterstützen, Gemeinschaften zu stärken und positive Veränderungen zu schaffen. Jede Spende bringt echte Hilfe für jemanden, der sie braucht.",

        // Portfolio Section
        activitiesTitle: "Unsere Aktivitäten",
        activitiesSubtitle:
            "Entdecken Sie unsere Wohltätigkeitsveranstaltungen und Initiativen, bei denen wir andere unterstützen, Gemeinschaften vereinen und positive Veränderungen schaffen.",

        loadMoreProjects: "Mehr Projekte laden",
        helpUsChangeLives: "Helfen Sie uns, Leben zu verändern",
        helpUsChangeLivesText:
            "Schon eine kleine Spende kann Menschen unterstützen, Gemeinschaften stärken und einen echten Unterschied machen.",

        // Team Section
        teamTitle: "Unser Team",
        teamSubtitle:
            "Wir sind eine Gemeinschaft von fürsorglichen Menschen, die sich dafür einsetzen, anderen zu helfen und die Welt besser zu machen.",

        supportOurWork: "Unterstütze unsere Arbeit",
        back: "Zurück",
        forward: "Vorwärts",

        // Support Section
        supportTitle: "Unterstützen Sie uns",
        supportSubtitle:
            "Ihre Unterstützung hilft uns, wohltätige Projekte zu entwickeln, wichtige Initiativen umzusetzen und denen zu helfen, die sie brauchen.",

        supportMissionTitle: "Unterstützen Sie uns",
        supportMissionText:
            "Ihr Beitrag hilft uns, wohltätige Projekte zu entwickeln, Initiativen zu organisieren und denen zu helfen, die sie am dringendsten benötigen.",
        donateNow: "Jetzt spenden",

        internalNeedsTitle: "Interne Bedürfnisse",
        internalNeedsText:
            "Spenden für interne Bedürfnisse helfen, unsere Arbeit zu unterstützen. Ein großer Teil dieser Mittel wird für Werbung verwendet, um mehr Menschen zum Spenden zu motivieren.",
        supportOurWork1: "Unterstützen Sie uns",

        becomeVolunteerTitle: "Freiwilliger werden",
        becomeVolunteerText:
            "Menschen, die sich unserer Gemeinschaft anschließen, helfen uns, Initiativen zu organisieren, wohltätige Projekte zu unterstützen und durch gute Taten positive Auswirkungen zu erzielen.",
        joinUs: "Begleiten Sie uns",

        transparencyTitle: "Transparenz & Verantwortung",
        transparencyText:
            "Spenden, die zur Unterstützung unserer allgemeinen Aktivitäten geleistet werden, werden vollständig erfasst. Wir veröffentlichen monatliche Berichte über alle Einnahmen und Ausgaben. Spenden für interne organisatorische Bedürfnisse helfen uns, die Organisation aufrechtzuerhalten und zu entwickeln sowie Betriebskosten wie Verwaltung, Infrastruktur, Werbung und Projektentwicklung zu decken. Diese Mittel werden nach Ermessen der Organisation verwaltet, um einen stabilen Betrieb und langfristige Wirkung zu gewährleisten. Für interne Bedürfnisse bestimmte Spenden sind nicht in den öffentlichen Finanzberichten enthalten. Wir danken allen, die unsere Mission unterstützen und uns helfen, unsere Arbeit fortzusetzen.",

        // Contact Section
        contactTitle: "Kontakt",
        contactSubtitle:
            "Haben Sie Fragen oder möchten Sie an unseren Initiativen teilnehmen? Wir sind immer offen für Kommunikation und Zusammenarbeit!",

        email: "E-Mail",
        address: "Adresse",
        yourName: "Ihr Name",
        yourEmail: "Ihre E-Mail-Adresse",
        messageSubject: "Betreff der Nachricht",
        yourMessage: "Ihre Nachricht",
        sendMessage: "Nachricht senden",
        messageSent: "✅ Nachricht gesendet!",

        // Footer
        links: "LINKS",
        supportFooter: "UNTERSTÜTZUNG",
        contactFooter: "KONTAKT",
        allRightsReserved: "Alle Rechte vorbehalten",
        footerText:
            "Eine Gemeinschaft von fürsorglichen Menschen, die sich dafür einsetzen, echte, messbare Auswirkungen zu erzielen. Zusammen laufen wir gemeinnützige Projekte, unterstützen Bedürftige und schaffen sinnvolle Veränderungen.",
    },
};

//   4️⃣ Функція зміни мови
//   4️⃣ Функція зміни мови
//   4️⃣ Функція зміни мови
//   4️⃣ Функція зміни мови
//   4️⃣ Функція зміни мови

function setLang(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll(".currentLang").forEach((el) => {
        el.textContent = lang.toUpperCase();
    });
}

// 5️⃣ Запам'ятовування мови
// 5️⃣ Запам'ятовування мови
// 5️⃣ Запам'ятовування мови
// 5️⃣ Запам'ятовування мови
// 5️⃣ Запам'ятовування мови
// 5️⃣ Запам'ятовування мови
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);
});
