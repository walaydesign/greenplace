$(".plan_nav_item.architecture-mode").click(function() {
    if($(this).hasClass("light")) {
        $(this).removeClass("light").addClass("dark");
        $(".plan_inner-architecture").removeClass("mode-light").addClass("mode-dark");
    }else if($(this).hasClass("dark")) {
        $(this).removeClass("dark").addClass("light");
        $(".plan_inner-architecture").removeClass("mode-dark").addClass("mode-light");
    }
})

$(".plan_nav_item").click(function() {
    $(".plan_nav_item").removeClass("active");
    $(this).addClass("active");
    if($(this).hasClass("plan_nav-architecture")) {
        $(".architecture-mode").fadeIn(300);
    }

    if(!$(this).hasClass("plan_nav-architecture")) {
        if(!$(this).hasClass("architecture-mode")) {
            $(".architecture-mode").fadeOut(300);
        }
    }

    if($(this).hasClass("plan_nav-space")) {
        $(".plan_space_nav").slideDown(300);
    }else {
        $(".plan_space_nav").slideUp(300);
    }

    if(!$(this).hasClass("plan_nav-space")) {
        let target = $(this).data("target");
        $(".plan_inner").hide();
        $(target).show();
    }

    if($(this).hasClass("architecture-mode")) {
        $(".plan_nav-architecture").addClass("active");
    }
})

$(".plan_space_nav li").click(function() {
    $(this).addClass("active").siblings("li").removeClass("active");
    let target = $(this).data("target");
    $(".plan_inner").hide();
    $(target).show();
})