$(function(){



    $("#button01").on("click",function(){
        $(".back-red").slideUp();
    })

    $("#button02").on("click",function(){
        $(".back-blue").slideUp();
    })

    $("#button03").on("click",function(){
        $("#box03,#box07").slideUp();
    })

    $("#button04").on("click",function(){
        $("#box01,#box02,#box03,#box04,#box05,#box06,#box07,#box08").slideDown();
    })

    


})





