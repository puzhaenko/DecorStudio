$(function() {

var elem = document.querySelector('#powerange_slider');
var init = new Powerange(elem, { hideRange: true });


var options = {
  strings: ["Свадьбу", "День Рождения", "Юбилей", "Корпоратив"],
  typeSpeed: 100,
  smartBackspace: true, // this is a default
  loop: true
}

var typed = new Typed(".typed_text", options);


});
