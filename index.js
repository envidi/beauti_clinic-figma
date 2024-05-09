const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
body.addEventListener("click", function (e) {
    const target = e.target
    if(!menu.contains(target) && !openBtn.contains(target)){
        menu.classList.remove('show')
        return 
    }

});
openBtn.addEventListener('click', function(){
    menu.classList.add('show')
})
closeBtn.addEventListener('click', function(e){
    menu.classList.remove('show')
})
// const content 
const content = closeBtn

