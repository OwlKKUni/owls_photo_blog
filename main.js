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

