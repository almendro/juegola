#include "lib/funciones.as"
#include "lib/animacion.as"
#include "BD/objetos.as"


mostrar_fondo_btn = true;



/* 
	fn_GC (respuesta:Number, elementos:Array, cantidad:Number, repite:Boolean)
	fn_progresion (cantidad:Number, rango:Array, progresion:Array, negativo:Boolean)
	fn_fichas (mc:String, opciones:Array, respuesta:Number, icognita:Array)

*/

var objetos:Array = new Array();

for (k=0; k < 4; k++)  {
	do {
		obj_nuevo = fn_GC(null, bd_objetos[fn_GC(null, bd_objetos,1,false)],1,false);
		trace (" OBJETOS ----------->" + objetos + " " + obj_nuevo );
	} while (!(fn_cual_contiene(objetos, obj_nuevo) == null))
	objetos[k] = obj_nuevo;
}

do {
	nodo_no_repetido = fn_GC(null,  bd_objetos[fn_GC(null, bd_objetos,1,false)],1,false);
} while (!(fn_cual_contiene(objetos, nodo_no_repetido) == null)) // no es igual al anterior

trace (" OBJETOS ----------->" + objetos);

 // elije un objeto al azar que no es del mismo reino

fichas = fn_GC(null,fn_unir([nodo_no_repetido], fn_unir(objetos, objetos)) , 9, false);
trace ("RESULTADO FICHAS ---> "+ fichas);

fn_fichas ("ficha", fichas, null, null);
// delay para que no actuen los botones
fn_tiemp_dispara (20, function () {fn_fichas ("ficha", fichas, [fichas[fn_cual_contiene(fichas, nodo_no_repetido)]], null);});




function fundido () {
	for (k=0; k < 9; k++)  fn_ani_pop ("ficha"+k, [0,0,0,0, -100], [5,5]); //fundido final

}
//--- animacion cuando se presiona un elemento
function  acierto_custom  (eleccion) {
	// fade y la pieza se adelanta
	fn_ani_pop (eleccion+".dibu", [0,0,50,50, -30], [0,10], 'cos');
	fundido();
}

function desacierto_custom (eleccion) {
 	// se mueve de forma negativa (bibra) 

	fn_ani_pop (eleccion+".halo", [0,0,0,0, -100], [0,1]); // desaparece el halo
	//----------
	fn_ani_pop (eleccion+".dibu", [0,0,0,0, 10, 60], [0,2], 'cos');		
	fn_ani_pop (eleccion+".dibu", [0,0,0,0, -10, -120], [1,2], 'cos');		
	fn_ani_pop (eleccion+".dibu", [0,0,0,0, 0, 90], [2,2], 'cos');
	fn_ani_pop (eleccion+".dibu", [0,0,0,0, 0, -60], [3,2], 'cos');
	fn_ani_pop (eleccion+".dibu", [0,0,0,0, 0, 45], [4,2], 'cos');
	fn_ani_pop (eleccion+".dibu", [0,0,0,0, 0, -15], [5,2], 'cos');
	fundido();
}

//stop();
