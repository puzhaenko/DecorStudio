$(function() {

var sm = window.matchMedia('(min-width: 576px) and (max-width: 767px)');
var md = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
var lg = window.matchMedia('(min-width: 992px) and (max-width: 1199px)');
var xl = window.matchMedia('(min-width: 1200px)');

var elem = document.querySelector('#powerange_slider');
var position = 3;
var slider = new Powerange(elem, { min: 0, max: 6, step: 1, start: position });

set_slider();

$(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
        set_slider();
    }, 250);
});

elem.onchange = set_class;


// Для отладки
/*setInterval(function(){
  $( "#slider_val_inside" ).html(" Position"+position+"MIN: " + slider.options.min + " Elem.value"+elem.value+" MAX: " + slider.options.max);
}, 100); */




function set_slider(){

		if (sm.matches){
			slider.options.min = 0;
			slider.options.max = 4;
			if(elem.value < slider.options.min) position = slider.options.min;
			if(elem.value > slider.options.max) position = slider.options.max;
		}
		if (md.matches){
			slider.options.min = 0;
			slider.options.max = 5;
			if(elem.value < slider.options.min) position = slider.options.min;
			if(elem.value > slider.options.max) position = slider.options.max;
		}
		if (lg.matches){
			slider.options.min = 0;
			slider.options.max = 6;
			if(elem.value < slider.options.min) position = slider.options.min;
			if(elem.value > slider.options.max) position = slider.options.max;
		}
		if (xl.matches){
			slider.options.min = 1;
			slider.options.max = 6;
			if(elem.value < slider.options.min) position = slider.options.min;
			if(elem.value > slider.options.max) position = slider.options.max;
		}
		slider.setStart(position);
}


function set_class() {

	position = parseInt(elem.value);
	switch(elem.value) {
		case "0":
			$( "div.item" ).attr('class', 'item col-sm-5th col-md-2 col-lg-7th col-xl-7th');
		break;
		case "1":
			$( "div.item" ).attr('class', 'item col-sm-3 col-md-5th col-lg-2 col-xl-7th');
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


$("#btn_smaller").click(function() {
	if(position - 1 >= slider.options.min){
		position = position - 1;
		slider.setStart(position);
	}
});
$("#btn_bigger").click(function() {
	if(position + 1 <= slider.options.max){
		position = position + 1;
		slider.setStart(position);
	}
});




var options = {
  strings: ["Свадьбу", "День Рождения", "Юбилей", "Корпоратив"],
  typeSpeed: 100,
  smartBackspace: true, // this is a default
  loop: true
}

var typed = new Typed(".typed_text", options);

});
