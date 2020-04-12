$(document).ready(function(){

    // Things to Do sub-menu functionality
    
    $("#TTD").hide();
    $("#things").mouseenter(function(){
        $("#TTD").fadeIn();
    })
    $("#TTD").mouseleave(function(){
        $(this).fadeOut();
    })

})