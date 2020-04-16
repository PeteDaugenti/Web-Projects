$(document).ready(function(){
    $(".btn").click(function(){
        var attr = $(this).attr("data-li");     // calls items based on data-li attribute

        $(".btn").removeClass("active");        // removes "active" class from .btn when another is clicked
        $(this).addClass("active");             // this = .btn; gives .btn "active" class

        $(".item").hide();

        if(attr == "folders"){
            $(".folders").show();
        }else if(attr == "files"){
            $(".files").show();
        }else if(attr == "images"){
            $(".images").show();
        }else if(attr == "sheets"){
            $(".sheets").show();
        }else if(attr == "pdf"){
            $(".pdf").show();
        }else if(attr == "documents"){
            $(".documents").show();
        }else{
            $(".item").show();
        }

        // you can also do
        //if(attr == "folders"){
        //  $("." + attr).show();
        //}else if(attr == "files"){
        //  $("." + attr).show();
        //}else if ...
    })
})