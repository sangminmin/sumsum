// 탑버튼
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$('.top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});


$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.sum').fadeIn();
    } else {
        $('.sum').fadeOut();
    }
});

$('.sum').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});
// 슬라이드

$(function () {
    var swiper = new Swiper('.gallery-center_inner ', {
        slidesPerView: 5,//보여지는 갤러리 수
        spaceBetween: 12,//갤러리 사이 간격
        centeredSlides: true,//센터모드
        speed: 1000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2000,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.gallery-center .swiper-button-next',
            prevEl: '.gallery-center .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.gallery-center .swiper-pagination',
            clickable: true,
        },
    });
});

//올라가는 숫자
$(function () {
    var executed2 = false;



    $('.section2').waypoint(function () {
        var targetNumber = $('.animate2').attr('data-rate');
        if (!executed2) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate2').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 2000);
            executed2 = true;
        }
    },
        {
            offset: '80%'
        }
    );

});





// 숨숨모임
$(function () {

    $('.category_sub li:nth-child(1)').show(function () {
        $('.b1').show();
        $('.b2, .b3').hide();
    });




    $('.category_sub li:nth-child(1)').click(function () {
        $('.b1').show();
        $('.b2, .b3, .b4').hide();
    });


    $('.category_sub li:nth-child(2)').click(function () {
        $('.b2').show();
        $('.b1, .b3, .b4').hide();
    });

    $('.category_sub li:nth-child(3)').click(function () {
        $('.b3').show();
        $('.b1, .b2, .b4').hide();
    });

    $('.category_sub li:nth-child(4)').click(function () {
        $('.b4').show();
        $('.b1, .b2, .b3').hide();
    });
});




// 애니메이션
AOS.init({
    duration: 1200 //aos 나타나는 속도
});




// 형광펜

// IntersectionObserver 를 등록한다.
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('on');
        }
        // 그 외의 경우 'on' 클래스 제거
        else {
            entry.target.classList.remove('on');
        }
    });
});

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.highlight');
boxElList.forEach((el) => {
    io.observe(el);
});



// 숨숨책
$(function () {

    $('.tag_bar a:nth-child(1)').show(function () {
        $('.c1').show();
        $('.c2, .c3').hide();
    });



    $('.tag_bar a:nth-child(1)').click(function () {
        $('.c1').show();
        $('.c2, .b3, .b4').hide();
    });


    $('.tag_bar a:nth-child(2)').click(function () {
        $('.c2').show();
        $('.c1, .b3, .b4').hide();
    });


});




// 숨숨샵
$(function () {

    $('.tag_bar a:nth-child(1)').show(function () {
        $('.d1').show();
        $('.d2, .d3').hide();
    });



    $('.tag_bar a:nth-child(1)').click(function () {
        $('.d1').show();
        $('.d2, .d3, .d4').hide();
    });


    $('.tag_bar a:nth-child(2)').click(function () {
        $('.d2').show();
        $('.d1, .d3, .d4').hide();
    });


    $('.tag_bar a:nth-child(3)').click(function () {
        $('.d3').show();
        $('.d1, .d2, .d4').hide();
    });
});
