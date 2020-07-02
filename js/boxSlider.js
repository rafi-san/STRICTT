
// down slider
jQuery.fn.downSlideOne = function(backcolor,buttonText){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).append("<div class='box-container-one' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-one").css({"bottom": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-one").css({"bottom": 100 + "%"});
    });
};

jQuery.fn.downSlideTwo = function(backcolor,buttonText){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).append("<div class='box-container-two' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-two").css({"bottom": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-two").css({"bottom": 100 + "%"});
    });
};

jQuery.fn.downSlideThree = function(backcolor,buttonText){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).append("<div class='box-container-three' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-three").css({"bottom": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-three").css({"bottom": 100 + "%"});
    });
};


jQuery.fn.downSlideFour = function(backcolor,buttonText){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).append("<div class='box-container-four' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-four").css({"bottom": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-four").css({"bottom": 100 + "%"});
    });
};

jQuery.fn.downSlideFive = function(backcolor,buttonText){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).append("<div class='box-container-five' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-five").css({"bottom": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-five").css({"bottom": 100 + "%"});
    });
};

jQuery.fn.downSlideSix = function(backcolor,buttonText){

    var element = $(this);

    var boxHeight = $(element).height();
    var boxWidth = $(element).width();

    $(this).append("<div class='box-container-six' style='height:"+ boxHeight +"px; width: "+ boxWidth +"px; background:"+ backcolor +"'><div>");

    $(this).css({"position": "relative", "overflow": "hidden"});

    $(this).mouseenter(function(e){
        e.preventDefault();
            $(".box-container-six").css({"bottom": 0});
    });

    $(this).mouseleave(function(e){
        e.preventDefault();
            $(".box-container-six").css({"bottom": 100 + "%"});
    });
};
