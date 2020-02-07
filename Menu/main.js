let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");

    //getSidebarA will grab all of the links in the sidebar class
    let getSidebarA = document.querySelectorAll(".nav-sidebar a");


    if(toggleNavStatus === false){
        // shows content inside sidebar
        getSidebarUl.style.visibility = "visible";

        // width of sidebar when opened
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity ="0.5";

        let arrayLength = getSidebarA.length;
        for(let i = 0; i < array.length; i++){
            getSidebarA[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }
}