const navigate=document.querySelector(".main-navigation")
const navlink=document.querySelector(".navbar-nav")
const overlay=navigate.querySelector(".overlay")
const toggler=navigate.querySelector(".navbar-toggler")

const opensidenav = () =>navigate.classList.add("active")
const closesidenav = () =>navigate.classList.remove("active")

$("body").on("swiped-left",closesidenav)

$(".navbar-toggler").click(function(){
  $(".main-navigation").toggleClass("active")
  $(".humberger-menu").toggleClass("open")
})
$(".overlay").click(function(){
  $(".main-navigation").removeClass("active")
  $(".humberger-menu").removeClass("open")

})
// $(".navbar-nav").click(function(){
//   $(".main-navigation").removeClass("active")
//   $(".humberger-menu").removeClass("open")

// })




var textWrapper = document.querySelector('.navbar-brand .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.letters',
    rotateY: [-95, 0],
    duration: 5000,
    delay: (el, i) => 100 + 30 * i
  })

  