// Dominó triangular: Generador de fichas

domino_triangular = function ()
{
  var n = 4;
  
  // Notación CDU (centena,decena,unidad)
  
  var fichas = [];
  var c,d,u;
  var f;
  
  f = 0;
  c = d = u = 0;
  var $listado = $( "#fichas" );
  
  for ( c=0; c<n; c++ ){
    u = d = c;
    fichas[f] = String(c) + " " + String(d) + " " + String(u);
    $listado.append( "<li>"+fichas[f]+"</li" );
    f++;
    for( d=c; d<n; d++ ){
      for( u=c+1; u<n; u++){
        fichas[f] = String(c) + " " + String(d) + " " + String(u);
        $listado.append( "<li>"+fichas[f]+"</li" );
        f++;
      }
    }
  }
};
