$(document).ready(function () {
  var btnSend = document.getElementById("btn-send");
  btnSend.addEventListener('click', function () {
    alert("Send Success");
    console.log("click");
  })

  var inPutName = document.getElementById("name");
  var inputEmail = document.getElementById("email");
  var inputPhone = document.getElementById("phone");
  var inputCompany = document.getElementById("company");
  var inputAeraBox = document.getElementById("content-areabox")




  var btnImport = document.getElementById("btn-import");
  btnImport.addEventListener('click',resetForm)


  function resetForm() {
    inPutName.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
    inputCompany.value = "";
    inputAeraBox.value = "";
  }

  $(function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      focusOnSelect: true,

    });
  });

  var toggle = document.getElementById("toggle")
  toggle.addEventListener('click',toggleMenu)
  function toggleMenu(){
    var sec = document.getElementById("sec");
    var nav = document.getElementById("navigation");
    var toggle = document.getElementById("toggle");
    sec.classList.toggle('active');
    nav.classList.toggle('menu-active');
    toggle.classList.toggle('change-toggle');
    sec.setAttribute('style','z-index: 99');
    nav.setAttribute('style','z-index: 500');
  }
});
