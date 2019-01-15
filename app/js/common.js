$(function() {

var sm = window.matchMedia('(min-width: 576px) and (max-width: 767px)');
var md = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
var lg = window.matchMedia('(min-width: 992px) and (max-width: 1199px)');
var xl = window.matchMedia('(min-width: 1200px)');

var elem = document.querySelector('#powerange_slider');
var position = 3;

/*const event = new KeyboardEvent("keypress", {
  view: window,
  keyCode: 13,
  bubbles: true,
  cancelable: true
});*/





$("#btn_smaller").click(function() {
	if(position - 1 >= min_val && position - 1 <= max_val){
		position = position - 1;
		document.getElementById("powerange_slider").value = position;
		set_class();
	}
    
    /*document.querySelector(".powerange_slider").dispatchEvent(event);*/
});
$("#btn_bigger").click(function() {
	if(position + 1 >= min_val && position + 1 <= max_val){
		position = position + 1;
		document.getElementById("powerange_slider").value = position;
		set_class();
	}
    /*position = position + 1;
    alert(position);
    document.getElementById("powerange_slider").value = position;
    set_class();*/
    /*document.querySelector(".powerange_slider").dispatchEvent(event);*/

});

setInterval(function(){
  $( "#slider_val_inside" ).html(elem.value);
}, 100); 


set_slider();

function set_slider(){
		if (sm.matches){
			$(".range-bar").remove();
			init = new Powerange(elem, { min: 0, max: 4, step: 1, start: position });
		}
		if (md.matches){
			$(".range-bar").remove();
			init = new Powerange(elem, { min: 0, max: 5, step: 1, start: position });
		}
		if (lg.matches){
			$(".range-bar").remove();
			init = new Powerange(elem, { min: 0, max: 6, step: 1, start: position });
		}
		if (xl.matches){
			$(".range-bar").remove();
			init = new Powerange(elem, { min: 1, max: 6, step: 1, start: position });
		}
/*console.log($('.range-min').html());
console.log($('.range-max').html());*/
}
var min_val = parseInt($('.range-min').html());
var max_val = parseInt($('.range-max').html());
/*console.log(min_val);
console.log(max_val);*/



$(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
        set_slider();
    }, 250);
});

elem.onchange = set_class;

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

var options = {
  strings: ["Свадьбу", "День Рождения", "Юбилей", "Корпоратив"],
  typeSpeed: 100,
  smartBackspace: true, // this is a default
  loop: true
}

var typed = new Typed(".typed_text", options);






});
