$(".inner_tab button").click(function() {
    let target = $(this).data("target");
    $(this).addClass("active").parents("li").siblings("li").find("button").removeClass("active");
    $(target).addClass("active").siblings(".inner_tabContent_item").removeClass("active");
})