document.addEventListener("DOMContentLoaded", () => {

    /*
     * ============================================
     * SCROLL REVEAL
     * ============================================
     */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.10
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(element);

        }
    );


    /*
     * ============================================
     * NAVBAR
     * ============================================
     */

    const navbar =
        document.getElementById("navbar");


    if (navbar) {

        const updateNavbar =
            () => {

                if (window.scrollY > 35) {

                    navbar.classList.add(
                        "scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "scrolled"
                    );

                }

            };


        window.addEventListener(
            "scroll",
            updateNavbar,
            {
                passive: true
            }
        );


        updateNavbar();

    }


    /*
     * ============================================
     * MOBILE MENU
     * ============================================
     */

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (mobileMenu && navbar) {

        mobileMenu.addEventListener(
            "click",
            () => {

                navbar.classList.toggle(
                    "mobile-open"
                );

            }
        );


        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navbar.classList.remove(
                            "mobile-open"
                        );

                    }
                );

            });

    }


    /*
     * ============================================
     * FEATURE CARD MOUSE LIGHT
     * ============================================
     */

    document
        .querySelectorAll(".feature-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    card.style.background =
                        `
                        radial-gradient(
                            260px circle at
                            ${x}px ${y}px,
                            rgba(255,212,59,.065),
                            rgba(255,255,255,.025)
                        )
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.background =
                        "";

                }
            );

        });


    /*
     * ============================================
     * UPTIME BARS
     * ============================================
     */

    const uptimeBars =
        document.getElementById("uptimeBars");


    if (uptimeBars) {

        const statuses = [
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good",
            "good"
        ];


        statuses.forEach(
            (status, index) => {

                const bar =
                    document.createElement(
                        "span"
                    );

                bar.className =
                    "uptime-bar";

                bar.title =
                    `Day ${index + 1}: Operational`;

                uptimeBars.appendChild(bar);

            }
        );

    }


    /*
     * ============================================
     * STATUS TOOLTIP EFFECT
     * ============================================
     */

    document
        .querySelectorAll(".uptime-bar")
        .forEach(bar => {

            bar.addEventListener(
                "mouseenter",
                () => {

                    bar.style.cursor =
                        "pointer";

                }
            );

        });


});
