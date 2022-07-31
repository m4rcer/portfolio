$(function() {


    // Filter
    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();
        
        let category = $(this).data("filter");

        if(category === "all") {
            $("[data-category]").removeClass('hide');
        } else {
            $("[data-category]").each(function() {
            
                let workCategory = $(this).data("category");
    
                if(workCategory !== category) {
                    $(this).addClass('hide');
                }
                else {
                    $(this).removeClass('hide');
                }
            });
        }
    })

    // Modals

    const modalCall = $("[data-modal]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let modal = $(this).data('modal');
        
        ShowModal(modal);
    });

    function ShowModal(modal) {
        $(modal).addClass("show");
        $("body").addClass("no-scroll");

        setTimeout(function() {
            $(modal).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);

        if(modal==="#modal_project_1") {
            $(modal).find(".slick-track").css({
                width: "100%"
            });
            $(modal).find(".slick-slide.slick-current.slick-active").css({
                width: "100%"
            });
        }
    }


    // Close 

    function CloseModal(modal) {
        modal.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function() {
            modal.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200);
    }

    let modalCloseBtn = $("[data-close]");

    modalCloseBtn.on("click", function(event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');

        CloseModal(modal);
    });

    $(".modal").on("click", function() {

        let modal = $(this);

        CloseModal(modal);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });


    // Slider

    const worksSlider = $(`[data-slider="slick"]`);

    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true
    });

    $(".slick-prev").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents(".modal").find(`[data-slider="slick"]`);

        currentSlider.slick("slickPrev");
    })

    $(".slick-next").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents(".modal").find(`[data-slider="slick"]`);

        currentSlider.slick("slickNext");
    })

    // Nav

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })
});
