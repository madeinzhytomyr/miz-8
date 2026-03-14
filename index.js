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
            description: "Collaboration with local and international partners.",
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
            tags: ["Zhytomyr", "Ukraine"],
            date: "October 18, 2025",
            category: "Completed",
            filter: "2025",
            goal: "0.00",


            description:
                "Training attention, memory, motor skills and communication",

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

            
            date: "2025",
            category1: "Workshop",
            client: "Children",

            text01: "We strive to create conditions where children can learn, develop their skills and gain valuable experience through play and interaction. Our activity became a great opportunity for kids to broaden their horizons in a comfortable environment.",

            title1: "How the Activity Went",
            text1: "Children completed educational exercises, participated in team games, and trained their motor skills, logic, and imagination. The interactive format made learning interesting and engaging.",

            moment_title: "Key Moments",
            moment_1: "Play-based developmental activities",
            moment_2: "Group work and team exercises",
            moment_3: "Training attention, logic and motor skills",
            moment_4: "Friendly atmosphere and mentor support",

            title2: "Why Is This Important?",
            text2: "Development activities help children build key skills needed for future learning. Such events promote confidence, creative thinking and socialization.",

            coordinator_desc:
                "“The best learning is learning through play. We are happy to see children discovering new things and showing their abilities.”",

            coordinator_img:
                "https://i.postimg.cc/V5Ps9Nrw/anastasia-diachenko.jpg",

            coordinator_name: "Anastasiia Diachenko",
            coordinator_position: "Project Coordinator",

            text02: "The project became another step toward creating useful, meaningful and warm events for children in our community.",

            location: "Zhytomyr • Ukraine",
            categoryy: "Workshop",
            members: "Preschoolers • Parents • Volunteers",

            num1: "5+ Participants",
            num2: "2 Hours of Activities",
            num3: "4 Skills",
            num4: "Teamwork",
            num5: "Interactive Learning",
            num6: "Game-Based Learning",
            num7: "Warm Atmosphere",
            num8: "Creativity",
            num9: "Community",
            num10: "Development",
        },

        {
            name: "Dance Workshop for Girls",
            tags: ["Zhytomyr", "Ukraine"],
            date: "September 20, 2025",
            category: "Completed",
            filter: "2025",
            goal: "0.00",

            description: "Developing Rhythm, Grace and Self-Confidence Together",

            images: [
                "https://i.postimg.cc/LsjKdMX5/project-2-1.jpg",
                "https://i.postimg.cc/mZmxWjbs/project-2-2.jpg",
                "https://i.postimg.cc/kgtL8dWj/project-2-3.jpg",
                "https://i.postimg.cc/QtSzsNrM/project-2-4.jpg",
                "https://i.postimg.cc/wMGbyWMK/project-2-5.jpgg",
                "https://i.postimg.cc/CMP2QKNs/project-2-6.jpg",
                "https://i.postimg.cc/FsY65QWP/project-2-7.jpg",
                "https://i.postimg.cc/NfZzQPZK/project-2-8.jpg",
                "https://i.postimg.cc/QtN66LKR/project-2-9.jpg",
                "https://i.postimg.cc/85yZ9yhr/project-2-10.jpg",
                "https://i.postimg.cc/zvVxrnjj/project-2-11.jpg",
                "https://i.postimg.cc/zDcdkczF/project-2-12.jpg",
            ],

            date: "2025",
            category1: "Workshop",
            client: "Children",

            text01: "We believe that dance is a way of self-expression, confidence and inner harmony. Our workshop gave girls the opportunity to feel free, beautiful and inspired. The project showed how important such events are for youth development and creating a supportive environment.",

            title1: "How the Workshop Went",
            text1: "Professional choreographers helped participants learn basic and modern dance movements. The girls worked as a team, learning rhythm, flexibility and interaction. The workshop took place in a warm atmosphere where everyone could feel part of a creative community.",

            moment_title: "Key Moments",
            moment_1: "Dance workshop conducted",
            moment_2: "Professional mentors and support",
            moment_3: "Atmosphere of motivation and energy",
            moment_4: "New skills and self-confidence",

            title2: "Why Was It Important?",
            text2: "Dance helps develop not only physical fitness but also emotional well-being. For many girls, this workshop became an opportunity to open up, overcome shyness, make new friends and discover a new side of themselves.",

            coordinator_desc:
                "“This workshop allowed girls to feel their strength, beauty and individuality. Dance is about freedom of movement, energy and emotions. We are happy we could create such an atmosphere.”",

            coordinator_img:
                "https://i.postimg.cc/V5Ps9Nrw/anastasia-diachenko.jpg",

            coordinator_name: "Anastasiia Diachenko",
            coordinator_position: "Project Coordinator",

            text02: "The completed dance workshop is an important contribution to the development of young women, supporting their self-expression and building a healthy and confident community.",

            location: "Zhytomyr • Ukraine",
            categoryy: "Workshop",
            members: "Girls • Youth • Volunteers",

            num1: "7+ Participants",
            num2: "2 Hours of Dancing",
            num3: "4 Dance Activities",
            num4: "Warm-up and Rhythm",
            num5: "Stage Movements",
            num6: "Team Choreography",
            num7: "Energetic Atmosphere",
            num8: "Musicality",
            num9: "Community",
            num10: "Movement and Creativity",
        },

        {
            name: "Drawing Workshop for Children",
            tags: ["Zhytomyr", "Ukraine"],
            date: "August 30, 2025",
            category: "Completed",
            filter: "2025",
            goal: "0.00",

            description: "Developing creativity and imagination through learning, exploration, play, and expression.",

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

            date: "2025",
            category1: "Workshop",
            client: "Children",

            text01: "Our goal is to create a space where children can discover their talents and experience genuine emotions. The workshop became an important event that showed how much children need creative meetings and support for their development.",

            title1: "How the Workshop Went",
            text1: "Children worked with different art materials, learned new techniques and created their own paintings under the guidance of mentors. Each participant received personal attention, support and the opportunity to express themselves through art.",

            moment_title: "Key Moments",
            moment_1: "Creative workshop for children held",
            moment_2: "All art materials provided",
            moment_3: "Friendly and supportive atmosphere",
            moment_4: "Positive emotions and new skills",

            title2: "Why Is This Important?",
            text2: "Such events help children develop emotionally and creatively. Our workshop became a place for inspiration, communication and a sense of support. We believe that art can bring warmth and confidence to children even in difficult times.",

            coordinator_desc:
                "“For us it is important to give children moments of joy. Every painting is a small story created by the child. We are grateful to everyone who joined us and supported this idea.”",

            coordinator_img:
                "https://i.postimg.cc/V5Ps9Nrw/anastasia-diachenko.jpg",

            coordinator_name: "Anastasiia Diachenko",
            coordinator_position: "Project Coordinator",

            text02: "The completed project is another step in the development of children's creativity and strengthening our community.",

            location: "Zhytomyr • Ukraine",
            categoryy: "Workshop",
            members: "Children • Families • Volunteers",

            num1: "5+ Participants",
            num2: "2 Hours of Creativity",
            num3: "10+ Finished Artworks",
            num4: "Basics of Composition",
            num5: "Painting Techniques",
            num6: "Imagination Development",
            num7: "Warm Atmosphere",
            num8: "Individual Approach",
            num9: "Group Creativity",
            num10: "Art for Children",
        },
    ];

    function createCard(product) {
        const card = document.createElement("div");
        card.className = `py-2 col-12 col-md-6 col-lg-6 col-xxl-4 portfolio-item isotope-item mb-auto filter-${product.filter}`;
        card.style.cssText = "padding: 12px; margin: 0;";
        card.innerHTML = `


              <div class="fundraiser-card neo-card h-100 shadow-lg">
        
                    <!-- Image Block -->
                    <div class="fundraiser-img position-relative">
                        <img src="${product.images[0]}">
        
                        <!-- Category Circle -->
                             <span class="project-category ${
                                product.category === "Completed"
                                    ? "bg-primary"
                                    : product.category === "Relative"
                                    ? "bg-danger"
                                    : ""
                            }">
                                ${product.category}
                            </span>
        
                
                    </div>
        
                    <!-- Content -->
                    <div class="fundraiser-content">
                        <h5 class="fundraiser-title fw-semibold mt-2">
                            ${product.name}
                        </h5>
        
                        <p class="fundraiser-desc text-secondary mb-4 small">
                            ${product.description}
                        </p>
    
    
    
        
                        <!-- Buttons -->
                        <div class="fundraiser-actions d-flex justify-content-between">
    
                            <!-- Goal Block -->
                            <div class="goal-badge d-inline-flex align-items-center justify-content-center col me-0 rounded-end-0">
    
                            <span class="m-0 p-0 pe-2 fw-bold fs-6 ps-2">${product.goal}</span>
                                <span class="m-0 p-0 pe-2 fw-normal small"> USD</span>
    
                            </div>
    
                            <a href="${product.link}" class="btn btn-outline-light btn-custom  d-flex align-items-center justify-content-center col ms-0 rounded-start-0 border-secondary">
                                Learn more
                            </a>
        
                          
                        </div>
                    </div>
                </div>






                
       
        `;

        // ====== При кліку на продукт відкриваємо card.html з даними ======
        const linkButton = card.querySelector("a");
        linkButton.addEventListener("click", function (e) {
            e.preventDefault();
            const query = new URLSearchParams({
                name: product.name,
                tags: product.tags,
                date: product.date,
                category: product.category,
                filter: product.filter,

                description: product.description,
                images: JSON.stringify(product.images),

                date1: product.date,
                category1: product.category1,
                client1: product.client,

                text01: product.text01,
                title1: product.title1,
                text1: product.text1,
                moment_title: product.moment_title,
                moment_1: product.moment_1,
                moment_2: product.moment_2,
                moment_3: product.moment_3,
                moment_4: product.moment_4,
                title2: product.title2,
                text2: product.text2,

                coordinator_desc: product.coordinator_desc,
                coordinator_img: product.coordinator_img,
                coordinator_name: product.coordinator_name,
                coordinator_position: product.coordinator_position,
                text02: product.text02,

                location: product.location,
                categoryy: product.categoryy,
                members: product.members,

                num1: product.num1,
                num2: product.num2,
                num3: product.num3,
                num4: product.num4,
                num5: product.num5,
                num6: product.num6,
                num7: product.num7,
                num8: product.num8,
                num9: product.num9,
                num10: product.num10,
            }).toString();
            console.log("Redirect URL:", `index_project.html?${query}`);
            window.location.href = `index-project.html?${query}`;
        });

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
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
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
