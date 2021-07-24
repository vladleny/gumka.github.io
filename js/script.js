let pageSlider = new Swiper('.page', {
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction: 'horizontal',
    slideToClickedSlide:true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,

    },
    parallax:true,
    watchOverflow: true,
    speed: 1200,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active",
    },
    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        draggable: true,
    },
    init: false,
   
    on: {
        init: function () {
            paginationSlider();
        },
        slideChange: function () {
            paginationSliderRemove();
           
            paginationLinks[pageSlider.realIndex].classList.add('_active');
        },
    },
    
 
},
)
let paginationLinks = document.querySelectorAll('.pagination__link');

function paginationSlider() {
    if (paginationLinks.length > 0) {
        paginationLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < paginationLinks.length; index++) {
            const paginationLink = paginationLinks[index];
            paginationLink.addEventListener("click", function (e) {
                pageSlider.slideTo(index, 800);
                paginationLink.classList.add('_active');
                e.preventDefault();
            });

        }
    }
}
function paginationSliderRemove(params) {
    let = paginationLinkActive = document.querySelector('.pagination__link._active');

    if (paginationLinkActive) {
        paginationLinkActive.classList.remove('_active');
    }
}
pageSlider.init();
