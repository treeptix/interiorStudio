new Swiper('.image-slider', {


    spaceBetween: -35,
    slidesPerView: 1,
    
    breakpoints: {
        700: {
            spaceBetween: 128,
            slidesPerView:2, // Кількість слайдів при ширині екрану 1300px і більше
        },
        1000: {
            spaceBetween: -199,
            slidesPerView:2, // Кількість слайдів при ширині екрану 1300px і більше
        },
        1439: {
            spaceBetween: -146,
            slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
        },

    },
})

new Swiper('.image-slider-2', {


    spaceBetween: 0,
    slidesPerView: 1,
    
    breakpoints: {
        700: {
            spaceBetween: -98,
            slidesPerView:1, // Кількість слайдів при ширині екрану 1300px і більше
        }

    }
})