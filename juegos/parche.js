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

// trace
var w = window.wrappedJSObject || window;
trace = w.alert;


// chr y asc http://jalaj.net/2007/03/08/asc-and-chr-in-javascript/

function asc(String) {
        return String.charCodeAt(0);
}

function chr(AsciiNum) {
        return String.fromCharCode(AsciiNum)
}


_root = $("body");
_level0 = $("body");

// http://jonathanhui.com/javascript-class
function MovieClip () {

} 

MovieClip.prototype.gotoAndStop = function(e) { 
        return e 
}

MovieClip.prototype.fondo = function() { 
}

MovieClip.prototype.halo = function() { 
}

// include ("js/Animation.js");

//-----fichas---

ficha0 = $(".ficha0");
ficha1 = $(".ficha1");
ficha2 = $(".ficha2");
ficha3 = $(".ficha3");
ficha4 = $(".ficha4");
ficha5 = $(".ficha5");
ficha6 = $(".ficha6");
ficha7 = $(".ficha7");
ficha8 = $(".ficha8");
ficha9 = $(".ficha9");
ficha10 = $(".ficha10");
ficha11 = $(".ficha10");

ficha0 = new MovieClip();
ficha1 = new MovieClip();
ficha2 = new MovieClip();
ficha3= new MovieClip();
ficha4 = new MovieClip();
ficha5 = new MovieClip();
ficha6 = new MovieClip();
ficha7 = new MovieClip();
ficha8 = new MovieClip();
ficha9 = new MovieClip();
ficha10 = new MovieClip();
ficha11 = new MovieClip();

