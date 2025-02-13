AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".nav_list_item.haschild").click(function() {
    $(this).children(".nav_list_second").slideDown(300);
    $(this).parents("li").siblings("li").find(".nav_list_second").slideUp(300);
    $(this).parents("li").addClass("active").siblings("li").removeClass("active");
})

nav();
function nav() {
    $(".nav_list").children("li").each(function() {
        if($(this).hasClass("active")) {
            let liIndex = $(this).index();
            let noborderIndex = liIndex - 1;
            $(".nav_list").children("li").eq(noborderIndex).addClass("noborder");
        }
    })
}