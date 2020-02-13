"use strict";
var $ = function(id){
    return document.getElementById(id);
};

//event handler fo rthe click event of each h2 element
var toggle = function(){
    var h2 = this;                      //refers to the clicked h2 tag
    var div = h2.nextElementSibling;    // div = h2's sibling div; each div is a sibling

    //toggle + and - image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")){
        h2.removeAttribute("class");
    }else{
        h2.setAttribute("class", "minus");
    }
    
    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")){
        div.removeAttribute("class");
    }else{
        div.setAttribute("class", "open");
    }
};

window.onload = function(){
    //get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");

    // attach event handler for each h2 tag
    for (var i = 0; i < h2Elements.length; i++){
        h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();
};
