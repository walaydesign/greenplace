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
    $(".plan_space_nav li").removeClass("active");
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
        $(".plan_inner").fadeOut(300);
        $(target).fadeIn(300);
    }

    if($(this).hasClass("architecture-mode")) {
        $(".plan_nav-architecture").addClass("active");
    }
})

$(".plan_space_nav li").click(function() {
    $(this).addClass("active").siblings("li").removeClass("active");
    let target = $(this).data("target");
    $(".plan_inner").fadeOut(300);
    $(target).fadeIn(300);
})

$(".map_room").click(function() {
    let room = $(this).attr("id");
    $(".map_room").removeClass("active");
    $(this).addClass("active");
    let roomTarget = "#floor-pic-" + room;
    let index = $(roomTarget).index();
    floorInfoChange(index);
    $(roomTarget).addClass("active").siblings(".floor-pic_item").removeClass("active");
})

$(".map-item").click(function() {
    $(this).parents(".plan_inner-spacestandard").hide();
    $(".plan_nav_item").removeClass("active");
    $(".plan_space_nav").slideUp(300);
    $(".plan_nav-floor").addClass("active");
    $(".plan_inner-floor").show();
    let room = $(this).data("room");
    let roomFloor = "#" + room;
    $(".map_room").removeClass("active");
    $(".plan_inner-floor .map_room" + roomFloor).addClass("active");
    let roomTarget = "#floor-pic-" + room;
    let index = $(roomTarget).index();
    floorInfoChange(index);
    $(roomTarget).addClass("active").siblings(".floor-pic_item").removeClass("active");
})

$(".pic-3d_tab button").click(function() {
    let target = $(this).data("target");
    $(target).addClass("active").siblings(".pic-3d_pic_item").removeClass("active");
    $(this).addClass("active").parents("li").siblings("li").find("button").removeClass("active");
})



let floorInfo = [
    {
        room: "A1",
        size: "28.23",
    },
    {
        room: "A2",
        size: "26.9",
    },
    {
        room: "A3",
        size: "26.9",
    },
    {
        room: "A5",
        size: "28.23",
    },
    {
        room: "A6",
        size: "33.54",
    },
    {
        room: "A7",
        size: "23.34",
    },
    {
        room: "A8",
        size: "23.34",
    },
    {
        room: "A9",
        size: "33.54",
    },
    {
        room: "B1",
        size: "28.39",
    },
    {
        room: "B2",
        size: "27.05",
    },
    {
        room: "B3",
        size: "27.05",
    },
    {
        room: "B5",
        size: "28.39",
    },
    {
        room: "B6",
        size: "33.74",
    },
    {
        room: "B7",
        size: "23.46",
    },
    {
        room: "B8",
        size: "23.46",
    },
    {
        room: "B9",
        size: "33.74",
    }
];

function floorInfoChange(i) {
    let infoRoom = floorInfo[i].room;
    let infoSize = floorInfo[i].size;

    $(".floor-size_room").text(infoRoom);
    $(".floor-size_content .num").text(infoSize);
}

var swiperBasement = new Swiper(".plan-basement_swiper", {
    slidesPerView: 1,
    loop: true,
    observeParents:true,
    observer:true,
    allowTouchMove: false,
    navigation: {
        nextEl: ".plan-basement-next",
        prevEl: ".plan-basement-prev",
    },
})

var swiperBasementTitle = new Swiper(".plan-basement_title", {
    slidesPerView: 1,
    loop: true,
    observeParents:true,
    observer:true,
    allowTouchMove: false,
    navigation: {
        nextEl: ".plan-basement-next",
        prevEl: ".plan-basement-prev",
    },
})

$(".spaceall-btn button").click(function() {
    $(".popup-basement").fadeIn(300);
    let index = $(this).index() + 1;
    swiperBasement.slideTo(index, 1000, true);
    swiperBasementTitle.slideTo(index, 1000, true);
})

$(".popup-basement .btn-close").click(function() {
    $(this).parents(".popup-basement").fadeOut(300);
})