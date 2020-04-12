// selects elements within .links div class
var li_links = document.querySelectorAll(".links ul li");

// selects view_wrap div element
var view_wraps = document.querySelectorAll(".view_wrap");

li_links.forEach(function(link){

    // add click event
    link.addEventListener("click", function(){
        li_links.forEach(function(item){
            // add class 
            item.classList.remove("active");
        })
        
        link.classList.add("active");

        var li_view = link.getAttribute("data-view");

        view_wraps.forEach(function(view){
            view.style.display = "none";
        })

        if(li_view == "list-view"){
            document.querySelector("." + li_view).style.display = "block";
        }else{
            document.querySelector("." + li_view).style.display = "block"; 
        }
    })
})