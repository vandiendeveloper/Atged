$(document).ready(function () {
  var btnChat = document.querySelectorAll(".btn-contact-us a")[0];
  var btnFeedback = document.querySelectorAll(".btn-contact-us a")[1];
  var sectionChat = document.getElementById("contact-chat");
  var sectionFeedback = document.getElementById("feedback");
  btnChat.addEventListener("click", showSectionChat);
  btnFeedback.addEventListener("click", showSectionFeedback);
  btnChat.addEventListener("click", linkClick);

  btnFeedback.addEventListener("click", linkClick);

  function linkClick(event) {
    smoothScroll(event);
  }
  function showSectionChat() {
    sectionChat.classList.add("show-section");
  }
  function showSectionFeedback() {
    sectionFeedback.classList.add("show-section");
  }

  function smoothScroll(event) {
    event.preventDefault();
    var targetId = event.target.getAttribute("href");
    var positionElement = document.querySelector(targetId).offsetTop;
    $("html, body").animate(
      {
        scrollTop: positionElement,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = targetId;
      }
    );
  }
  function smoothScrollA(event) {
    var target = document.querySelector(event);
    // target.preventDefault();
    var positionElement = $(event).offset().top;
    $("html, body").animate(
      {
        scrollTop: positionElement,
      },
      800
    );
  }

  var positionStart = 0;
  let scrollDown = 1;
  var listSection = ["#section1", "section2", "section3"];
  var drop = function() {

    $(window).scroll(() => {
      // var positionScroll = window.scrollY;
      // if (positionScroll > positionStart) {
      //   scrollDown ++;
      // } else {
      //   if (scrollDown > 0) {
      //     scrollDown--;
      //   }
      // }
      // positionStart = positionScroll;
      // for(item of listSection) {
      //   if(item.includes(scrollDown.toString())) {
      //     smoothScrollA(item);
      //   }
      //   scrollDown ++;
      // }
    });
    console.log(scrollDown);
   
  }
  drop()
});
