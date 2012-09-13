var w = window.wrappedJSObject || window;
/*trace = w.alert;*/


// parche
_root = $("body");
_level0 = $("body");


function loadfile(filename, filetype){
        if (filetype=="js"){
                var fileref=document.createElement('script') ;
                fileref.setAttribute("type","text/javascript") ;
                fileref.setAttribute("src", filename) ;
        } else if (filetype=="css"){
                var fileref=document.createElement("link");
                fileref.setAttribute("rel", "stylesheet") ;
                fileref.setAttribute("type", "text/css") ;
                fileref.setAttribute("href", filename);
        } if (typeof fileref!="undefined") document.getElementsByTagName("head")[0].appendChild(fileref);

}

// parche para include
function include (filename) {
        /*
                Esto reemplza el include
                #include "\(.*\)"       ->      include ("\1");
        */
        loadfile (filename, "js")
}



// chr y asc http://jalaj.net/2007/03/08/asc-and-chr-in-javascript/

function asc(String) {
        return String.charCodeAt(0);
}

function chr(AsciiNum) {
        return String.fromCharCode(AsciiNum)
}



// http://jonathanhui.com/javascript-class

// Aquí también sobre objetos, clases y prototype: http://panicoenlaxbox.blogspot.com.ar/2010/12/poo-en-javascript-ii.html


// y esta me parece la solucion: http://jsmovieclip.jeremypetrequin.fr/


/*
function MovieClip () {
	alert("soy MovieClip "+this.toString()+" "+" "+this.valueOf());
}


MovieClip.prototype.gotoAndStop = function(frame) { 
        //this._currentframe = this.valueOf();
    //    trace($(this).parent().attr('id') + " "+frame);
}

MovieClip.prototype.onRollOut = function() { 
        $(this).hover(function () {
                alert("up!, funciona");
        });
}

MovieClip.prototype.fondo = function() { 
        return this.$(".fondo")
}

MovieClip.prototype.halo = function() { 
        return this.$(".halo")
}

// include ("js/Animation.js");

//-----fichas---

for (n=0; n < 9; n++)  {
	alert("ficha"+n+" = new MovieClip");
  // eval ('ficha'+n+' = $(".ficha'+n+'");');
	eval ('ficha'+n+' = new MovieClip();');
}
*/


$("div").each( function (e){
alert("creando MC "+$(this).attr('id'));
	if ( $(this).attr('id')!=''){
		$(this).movieclip({
			'width' : 154,
			'framerate' : 25,
			'frames' : 11,
			'url' : 'inline',
			'debug' : false,
			'callBack' : null,
			'mode' : 'div',
			'div' : '.figura'
		});
	
		eval($(this).attr("id")+" = $(this).data('Movieclip');"); 		
		
	}
});




//www.pluginmedia.net/dev/infector/ // mirar como animan


//---------------------------------------------------------------------

function fn_tiemp_dispara (delay, funcion, parametros) {
        var soy_fn="fn_tiemp_dispara";
        // hardcodie 24 cuadros por segundo
        return $.fn.delay(delay * 24, funcion(parametros))
}

function fn_ani_pop (mc, escala, fts, tipo, funcion) {
	var soy_fn="fn_ani_pop";

	/*
		mc: MovieClip en string
		escala:[ x, y , w, h, alfa ,... ]
		fts: [0, 0] 
			0- Delay
			1- largo de la animacion en fotogramas 
			
	*/

	$("."+mc).delay(fts[0]*24).animate({
		left: "+="+escala[0],
		top: "+="+escala[1],
    width: "+="+escala[2],
    height: "+="+escala[3],
    opacity: '+='+((escala[4])/100),
  }, fts[1]*24, 'linear', funcion);

}
