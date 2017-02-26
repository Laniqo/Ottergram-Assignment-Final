var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECTS_CLASS = 'is-tiny';
var ESC_KEY = 27;
var NUM_KEYS = [49, 50, 51, 52, 53, 54, 55, 56, 57];



function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;

}


function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}


function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}


function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    console.log("Thumbnail Arrays");
    console.log(thumbnailArray);
    return thumbnailArray;
}

function hideDetails(){
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails(){
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECTS_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECTS_CLASS);}, 100);
    
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event){
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode === ESC_KEY){
            hideDetails();
        }
    });
}


function thumbNav(){
    'use strict';
    var thumbList = document.getElementsByTagName("li");
    var numPhotos = thumbList.length;
    var thumbs = getThumbnailsArray();

    addEventListener('keyup', function(event) {
        
    if(event.keyCode >= NUM_KEYS[0] & event.keyCode <= NUM_KEYS[8])
    { 
        console.log("run");
        for(var i = 0; i < numPhotos; i++)
        {
            if(event.keyCode === NUM_KEYS[i])
            {
            event.preventDefault();
            setDetailsFromThumb(thumbs[i]);
            showDetails();
            }
        }
    }
    });
}


function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
    thumbNav();
}


initializeEvents();
