$(function() {

var sm = window.matchMedia('(min-width: 576px and (max-width: 767px)');
var md = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
var lg = window.matchMedia('(min-width: 992px) and (max-width: 1199px)');
var xl = window.matchMedia('(min-width: 1200px)');

var elem = document.querySelector('#powerange_slider');
 var init = new Powerange(elem, { 
	hideRange: true, 
	min: 0,
	max: 6,
	step: 1,
	start: 3
	 });

if (sm.matches) {
    // размер окна 479px или меньше
alert("sm");
} 
if (md.matches) {
    // размер окна 479px или меньше
alert("md");
} 
if (lg.matches) {
    // размер окна 479px или меньше
    alert("lg");
} 
if (xl.matches) {
    // размер окна 479px или меньше
   alert("xl");

} 




elem.onchange = function() {

$( "#slider_value" ).html(elem.value);

	switch(elem.value) {
		case "1":
			$( "div.item" ).attr('class', 'item col-sm-4 col-md-3 col-lg-2 col-xl-2');
		break;
		case "2":
			$( "div.item" ).attr('class', 'item col-sm-4 col-md-3 col-lg-5th col-xl-2');
		break;
		case "3":
			$( "div.item" ).attr('class', 'item col-sm-6 col-md-4 col-lg-3 col-xl-5th');
		break;
		case "4":
			$( "div.item" ).attr('class', 'item col-sm-12 col-md-6 col-lg-4 col-xl-3');
		break;
		case "5":
			$( "div.item" ).attr('class', 'item col-sm-12 col-md-12 col-lg-6 col-xl-4');
		break;
		case "6":
			$( "div.item" ).attr('class', 'item col-sm-12 col-md-12 col-lg-12 col-xl-6');
		break;

	}
	
	
}


var options = {
  strings: ["Свадьбу", "День Рождения", "Юбилей", "Корпоратив"],
  typeSpeed: 100,
  smartBackspace: true, // this is a default
  loop: true
}

var typed = new Typed(".typed_text", options);






});
