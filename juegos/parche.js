// trace
var w = window.wrappedJSObject || window;
trace = w.alert;
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
function MovieClip () {
        this.gotoAndStop = function (e) {
        }

				this.onRollOut = function (e){
						alert(e);
				}
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
        eval ('ficha'+n+' = $(".ficha'+n+'");');
        eval ('ficha'+n+' = new MovieClip();');
}


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
