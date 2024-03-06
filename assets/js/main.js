$(window).ready(function(){
    console.log("document is ready!")
    $('.forceClose').dropdown("toggle");
})
$("#burger").on("click", function(e){
    $("#sidenav").toggleClass("mobile");
    $("#burger").toggleClass("active");
    console.log("navbar expand");
    e.stopPropagation();
})
$('body,html').click(function(e){
    // console.log("body clicked")
    $('#sidenav').removeClass('mobile');
    // doesn't work on mobile chrome but works on desktop version
 });
 document.onclick = function(a){
    let menu_icon_box = document.querySelector("#burger");
    let box = document.querySelector("#sidenav");
    if (!menu_icon_box.contains(a.target) && !box.contains(a.target) ) {
        $('#sidebar').removeClass('mobile');
    }
}