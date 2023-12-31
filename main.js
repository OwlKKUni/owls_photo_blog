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
    //THOSE ARE THEORETHICAL VALUES - NOT BASED ON PIXELS IN THE CODE (Thats simply how Swiper is configured)
    // ""Ratio - width/height""
    // You can set those manually with 888 instead of '@1.00'
    // /*FOR SOME FUCKING REASON THEY HAVE TO BE IN THIS ORDER TO BE WORKING PROPERLY - JESUS FUCKING CHRIST */
    // /*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA*/
    breakpoints:{
        // If wievport > 1066 px - have 5 slides
        '@1.20':{
            slidesPerView: 5
        },
        // If wievport > 978 px - have 4 slides
        '@1.10':{
            slidesPerView: 4
        },
        // If wievport > 888px - have 3 slides
        '@1.00':{
            slidesPerView: 3
        },
        // If wievport > 0 - have 2 slides
        '@0':{
            slidesPerView: 2
        },
    }
})

