$(function() {

var sm = window.matchMedia('(min-width: 576px) and (max-width: 767px)');
var md = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
var lg = window.matchMedia('(min-width: 992px) and (max-width: 1199px)');
var xl = window.matchMedia('(min-width: 1200px)');

var elem = document.querySelector('#powerange_slider');
var init = new Powerange(elem, { hideRange: true, min: 0, max: 6, step: 1, start: 3 });


function set_sm_slider(){
	setTimeout(function(){
		if (sm.matches){
		$(".range-bar").remove();
		init = new Powerange(elem, { hideRange: true, min: 0, max: 6, step: 1, start: 3 });
		}
	}, 3000);
	
}
function set_md_slider(){
	setTimeout(function(){
		if (md.matches){
			$(".range-bar").remove();
			init = new Powerange(elem, { hideRange: true, min: 0, max: 6, step: 1, start: 3 });
		}
	}, 3000);
}
function set_lg_slider(){
	setTimeout(function(){
		if (lg.matches){
			$(".range-bar").remove();
			init = new Powerange(elem, { hideRange: true, min: 0, max: 6, step: 1, start: 3 });
		}
	}, 3000);
}
function set_xl_slider(){
	setTimeout(function(){
		if (xl.matches){
			$(".range-bar").remove();
			init = new Powerange(elem, { hideRange: true, min: 1, max: 6, step: 1, start: 3 });
		}
	}, 3000);
}

sm.addListener(set_sm_slider);
md.addListener(set_md_slider);
lg.addListener(set_lg_slider);
xl.addListener(set_xl_slider);


/*elem.onchange = function() {
$( "#slider_value" ).html(elem.value);
	switch(elem.value) {
		case "0": $( "div.item" ).attr('class', 'item col-xl-7th col-lg-7th'); //7  6
		break;
		case "1": $( "div.item" ).attr('class', 'item col-xl-7th col-lg-2'); //7  6
		break;
		case "2": $( "div.item" ).attr('class', 'item  col-lg-5th col-xl-2'); //6  5 col-lg-5th
		break;
		case "3": $( "div.item" ).attr('class', 'item col-xl-5th col-lg-3'); //5  4    ****main
		break;
		case "4": $( "div.item" ).attr('class', 'item col-xl-3 col-lg-4'); //4  3
		break;
		case "5": $( "div.item" ).attr('class', 'item col-xl-4 col-lg-6'); //3  2
		break;
		case "6": $( "div.item" ).attr('class', 'item col-xl-6 col-lg-12'); //2  1
		break;
	}
}*/
elem.onchange = function() {
$( "#slider_value" ).html(elem.value);
	switch(elem.value) {
		case "0":
			$( "div.item" ).attr('class', 'item col-sm-4 col-md-3 col-lg-7th col-xl-7th');
		break;
		case "1":
			$( "div.item" ).attr('class', 'item col-sm-4 col-md-3 col-lg-2 col-xl-7th');
		break;
		case "2":
			$( "div.item" ).attr('class', 'item col-sm-4 col-md-3 col-lg-5th col-xl-2');
		break;
		case "3":
			$( "div.item" ).attr('class', 'item col-sm-6 col-md-4 col-lg-3 col-xl-5th'); //main
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
