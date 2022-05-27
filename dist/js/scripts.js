/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//FOR MODAL IMAGE GALLERY IN PROJECTS SECTION.
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("myImages");
var modalImg = document.getElementById("img-src");
var captionText = document.getElementById("caption");
//go through all images 
for (var i = 0; i < images.length; i++) {
    var img = images[i];
img.onclick = function(event){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt; //caption = alt
}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
/*
 * Get constant change of width so not just on first page load
 * If width is between 425 and 0 call mobileExit to close screen
 * Otherwise remove event listener.
 */

window.onresize = window.onload = function() {
    let width;
    width = this.innerWidth;
    if (width <= 425 && width >= 0) {
        modal.addEventListener('click',mobileExit);
    }
    else {
        modal.removeEventListener('click',mobileExit);
    }
}

function mobileExit() {
    modal.style.display = "none";
}

/* Mouse over for links */
const link_popup = document.getElementsByClassName("link");
const iframeover = document.getElementsByClassName("iframe-preview");
const iframeout = document.getElementsByClassName("iframe-preview");

link_popup[0].onmouseover = function() {hoverLink()};
iframeover[0].onmouseover = function() {mouseOver()};
iframeout[0].onmouseout = function() {mouseOut()};

function mouseOver() {
    iframeover[0].style.display = "block";
}

function mouseOut() {
    iframeout[0].style.display = "none";
}

function hoverLink() {
    iframeover[0].style.display = "block";
}