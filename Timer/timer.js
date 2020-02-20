

var $ = function(id){
    return document.getElementById(id);
};

// global timer and counter variables to hold timer and the current count
var timer;
var counter = 0;

// create function that the timer calls
var updateCounter = function(){
    counter++;
    $("counter").firstChild.nodeValue = counter;  // this is the span element that will hold counter
};

// clear timer on web page
var stopTimer = function(){
    clearInterval(timer);
};

var toggle = function(){
    var h2 = this;
    var div = h2.nextElementSibling;

    if (h2.hasAttribute("class")){
        h2.removeAttribute("class");
    }else{
        h2.setAttribute("class", "minus");
    }

    if (div.hasAttribute("class")){
        div.removeAttribute("class");
    }else{
        div.setAttribute("class", "open");
    }
};

window.onload = function(){
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");

    for (var i = 0; i < h2Elements.length; i++){
        h2Elements[i].onclick = toggle;
    }
    
    // create timer that calls the updateCounter function repeatedly
    timer = setInterval(updateCounter, 1000);
    $("clearTime").onclick = stopTimer;
    h2Elements[0].firstChild.focus();
};