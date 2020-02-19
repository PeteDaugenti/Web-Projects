

var $ = function(id){
    return document.getElementById(id);
};

window.onload = function(){
    var listNode = $("image_list");
    var captionNode = $("caption");
    var imageNode = $("main_image");

    var imageLinks = listNode.getElementsByTagName("a");

    // process image links
    var i, image, linkNode, link;
    for (i = 0; i < imageLinks.length; i++){
        linkNode = imageLinks[i];

        // preload image
        image = new Image();
        image.src = linkNode.getAttribute("href");

        // attach event handler
        linkNode.onclick = function(evt){
            link = this;  // "this" is the link that was clicked

            // set new image and caption
            // the image selected is the "href" and the caption is the title of each image link
            imageNode.src = link.getAttribute("href");
            captionNode.firstChild.nodeValue = link.getAttribute("title");

            // cancel the default action of the event
            if (!evt){
                evt = window.event;
            }
            if (evt.preventDefault){
                evt.preventDefault();
            }else{
                evt.returnFalse = false;
            }
        };
    }
    // set focus on first image link
    imageLinks[0].focus();
};
