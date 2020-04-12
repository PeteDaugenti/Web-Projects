// JavaScript click event

var tabs = document.querySelectorAll(".tabs ul li");
var tabs_wrap = document.querySelectorAll(".tab_wrap");

tabs.forEach(function(tab, tab_index){
    tab.addEventListener("click", function(){
        
        tabs.forEach(function(tab){

            tab.classList.remove("active");     // remove current class
        })

        tab.classList.add("active");            // add class

        tabs_wrap.forEach(function(content, content_index){

            // if content matches tab name content is in block style; otherwise there is no display
            if(content_index == tab_index){
                content.style.display = "block";
            }else{
                content.style.display = "none";
            }
        })

    })
})

