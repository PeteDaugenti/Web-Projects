// selector variables 
var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");

// loop to give and remove selected element's active class 
for(var i = 0; i < li_elements.length; i++){
    li_elements[i].addEventListener("click", function(){
        li_elements.forEach(function(li){       // list item in parameter
            li.classList.remove("active");      // removes active class from selected element
        })
        this.classList.add("active");           // gives active class to selected element

        var li_value = this.getAttribute("data-li");
        // variable calls attribute in order to match wrapper_right data with selected element
        // alert(li_value);  // tests for data-view name matching

        // code below gives everything except the selected element a display of none;
        item_elements.forEach(function(item){
            item.style.display = "none";
        })
        
        // conditional statement below gives selected element style of display:block
        if(li_value == "angular"){
             document.querySelector("." + li_value).style.display = "block";
        }else if(li_value == "node"){
            document.querySelector("." + li_value).style.display = "block";
        }else if(li_value == "react"){
            document.querySelector("." + li_value).style.display = "block";
        }else if(li_value == "vue"){
            document.querySelector("." + li_value).style.display = "block";
        }

    });
}