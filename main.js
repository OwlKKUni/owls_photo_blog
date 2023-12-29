let toggle = document.querySelector("#header .toggle-button"); //Select element with ID-"Header" and class of "toggle-button"
let collapse = document.querySelectorAll("#header .collapse"); //Select both div's with "collapse" class at the same time 

toggle.addEventListener('click' , function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

//with Masonry
new Masonry("#posts .grid", {
    itemSelector:'.grid-item',
    gutter: 20
});

// swiper libray initialization
new Swiper('.swiper-container', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 5,
    autoplay : {
        delay : 3000
    },
    //responsive breakpoints
})

