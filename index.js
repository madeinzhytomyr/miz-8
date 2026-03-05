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
            title: "Educational Activities",
            icon: "bi bi-fire",
            description:
                "Trainings, workshops, and non-formal education programs for all age groups.",
        },
        {
            title: "Social Support and Humanitarian Assistance",
            icon: "bi bi-people",
            description:
                "Aid and humanitarian support for vulnerable populations.",
        },
        {
            title: "Charitable and Fundraising Activities",
            icon: "bi bi-graph-up-arrow",
            description:
                "Fundraising and donation collection to support charitable programs.",
        },
        {
            title: "Psychological and Legal Support",
            icon: "bi bi-heart-fill",
            description:
                "Free counseling, consultations, and legal assistance.",
        },
        {
            title: "Cultural and Community Development",
            icon: "bi bi-stars",
            description:
                "Cultural events and initiatives that strengthen communities.",
        },
        {
            title: "International Cooperation and Partnerships",
            icon: "bi bi-compass",
            description:
                "Collaboration with local and international partners.",
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
                    <a href="#contact" class=" read-more ">
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
        // {
        //     name: "Coming Soon",
        //     img: "https://i.postimg.cc/jjDjYd4c/photo-2026-03-03-23-56-04.jpg",
        //     category: "Coming Soon",
        //     tags: ["Coming", "Soon"],
        //     date: "Coming Soon",
        //     linkDetails: "https://www.instagram.com/p/DT8KW-Bja2W/",
        //     filter: "2026",
        // },
        {
            name: "Developmental Activity for Preschoolers",
            img: "https://i.postimg.cc/4xCBDHhm/project-3-1.jpg",
            category: "COMPLETED",
            tags: ["Krakow", "Poland"],
            date: "18 August 2023",
            linkDetails: "/",
            filter: "2023",
        },
        {
            name: "Dance Workshop for Girls",
            img: "https://i.postimg.cc/LsjKdMX5/project-2-1.jpg",
            category: "COMPLETED",
            tags: ["Krakow", "Poland"],
            date: "20 July 2023",
            linkDetails: "/",
            filter: "2023",
        },
        {
            name: "Drawing Workshop for Kids",
            img: "https://i.postimg.cc/tCD4fWcm/project-1-1.jpg",
            category: "COMPLETED",
            tags: ["Krakow", "Poland"],
            date: "30 Juny 2023",
            linkDetails: "/",
            filter: "2023",
        },
        {
            name: "Donate for a child (Siepomaga)",
            img: "https://i.postimg.cc/vTr1XD9D/photo-2026-03-05-14-39-12.jpg",
            category: "COMPLETED",
            tags: ["Krakow", "Poland"],
            date: "30 Februar 2023",
            linkDetails: "/",
            filter: "2024",
        },
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
            currentIndex =
                (currentIndex - 1 + products.length) % products.length;
            openLightbox(currentIndex);
        });
        
        lightboxNext.addEventListener("click", () => {
            currentIndex =
                (currentIndex + 1) % products.length;
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

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", function (e) {
            e.preventDefault();
            body.classList.toggle("mobile-nav-active");

            // Змінюємо іконку (бургер <-> хрестик)
            this.classList.toggle("bi-list");
            this.classList.toggle("bi-x");
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

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // зупиняємо стандартну відправку

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
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
  const text = document.getElementById(elementId).innerText.replace(/\s+/g, '');
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = '<i class="bi bi-check-lg"></i>';
    setTimeout(() => {
      btn.innerHTML = '<i class="bi bi-clipboard"></i>';
    }, 1500);
  });
}


