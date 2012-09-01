//trace = function () {};

var $fichas;
var render_fichas;


$(document).ready(function() {

try {

desbichador_init();

$fichas = jQuery('.ficha');
var n=1;
setInterval(function(){

	//ficha2.gotoAndStop(n++);
	ficha2.toggle();
},1000);



} catch (e) {
        //----------------dump------------------------
        alert( "error:'" + e.message + "'" || "error: '" + e + "'");
}        

});

