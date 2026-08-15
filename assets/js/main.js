document.addEventListener(
    "DOMContentLoaded",
    () => {

        const elements =
            document.querySelectorAll(
                ".reveal"
            );


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("show");

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        elements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );


        // Simple page-load animation

        document.body
            .classList
            .add("loaded");

    }
);
