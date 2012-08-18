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



function keyListener(e){
if(!e){
        //for IE
        e = window.event;
}

if(e.keyCode==37 && paddleLeft > 0){
//keyCode 37 is left arrow
paddleLeft -= 4;
paddle.style.left = paddleLeft + 'px';
}
if(e.keyCode==39 && paddleLeft < 436){
//keyCode 39 is right arrow
paddleLeft += 4;
paddle.style.left = paddleLeft + 'px';
}
// FYI - keyCode 38 is up arrow,
// keyCode 40 is down arrow
}
