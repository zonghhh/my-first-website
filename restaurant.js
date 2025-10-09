function show_side_bar(){
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'flex';
};
function hide_side_bar(){
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'none';
};

document.addEventListener("DOMContentLoaded", function() {
var topbutton = document.getElementById("jumptotop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topbutton.style.display = "block";
    } else{
        topbutton.style.display = "none";
    }
};
});
function JumpTop() {
    document.body.scrollTo({top:0, behavior: 'smooth'});
    document.documentElement.scrollTo({top:0, behavior: 'smooth'});
};