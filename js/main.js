$(document).ready(function () {


  $('.multiple-items').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  var btnSee = document.getElementById('btn-see-more');
  btnSee.addEventListener('click', () => {
    window.location.href = "#"
  })
  //Set size Element function
  function setSizeElement() {
    var content = document.querySelectorAll('.technology-box--content p')
    var maxHeight = content[0].offsetHeight;
    console.log(maxHeight);

    for (var i = 1; i < content.length; i++) {
      console.log(content[i].offsetHeight);
      if (content[i].offsetHeight > maxHeight) {
        maxHeight = content[i].offsetHeight;
      }
    }
    for (var i = 0; i < content.length; i++) {
      content[i].setAttribute('style', 'height:' + maxHeight + 'px')
    }
  }
  setSizeElement()
  // clear Size Element function

  function clearSize() {
    var content = document.querySelectorAll('.technology-box--content p');
    var maxHeight = content[0].offsetHeight;
    console.log(maxHeight);

    for (var i = 1; i < content.length; i++) {
      console.log(content[i].offsetHeight);
      if (content[i].offsetHeight > maxHeight) {
        maxHeight = content[i].offsetHeight;
      }
    }
    for (var i = 0; i < content.length; i++) {
      content[i].setAttribute('style', 'height: auto')
    }
  }

  //Resize height element function 
  function resizeElement() {
    clearSize();
    setSizeElement()
  }
  // Change screen window
  window.addEventListener('resize', resizeElement)


});