let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse"); //Select both div's with "collapse" class at the same time 

toggle.addEventListener('click' , function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})