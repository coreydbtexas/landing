const swiperCarousel = new Swiper(
    ".swiper-container.swiper-container-carousel",
    {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }
);

const swiperSlider = new Swiper(".swiper-container.swiper-container-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
