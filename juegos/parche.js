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

trace = alert;
