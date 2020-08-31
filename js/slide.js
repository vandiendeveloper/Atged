$(document).ready(function () {
    // //Smooth Scroll code

    var btnJump = document.querySelectorAll('.jump');
    for(item of btnJump) {
       item.addEventListener('click',linkClick)   
    }


    function linkClick(event) {
        smoothScroll(event)
    }
    function smoothScroll(event) {
        event.preventDefault();
        var targetId = event.currentTarget.children[0];
        var hrefId = targetId.getAttribute('href')
        $('html, body').animate({
            scrollTop: $(hrefId).offset().top
          }, 800, function () {
      
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hrefId;
          });
    }
});