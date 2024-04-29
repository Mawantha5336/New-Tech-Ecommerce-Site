function login() {
    alert("You Logged");
}
$(document).ready(function(){

    $('.toggle-btn').click(function() {
    $(this).toggleClass('active').siblings().removeClass('active');
    });
    
    });

function login() {
    window.location.href = "Home.html";
}
function register() {
    window.location.href = "Home.html";
}