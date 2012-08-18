var $fichas;
var render_fichas;

fn_inicio = function (){
	
	/* ajustamos el desplazamiento de la imagen segun la numero de ficha, y mantenemos la proporción cuadrada de las fichas */
	
	$fichas = jQuery('.ficha');
	
	render_fichas = setInterval(function(){
		$fichas.each(function(e){
			jQuery(this).css({
				height: jQuery(this).css('width')
			});
			jQuery('.figura img',this).css({
				top: -e * (jQuery('.figura img',this).height()/11)+'px',
				left: -e * (jQuery('.figura img',this).width()/11)+'px'
			});
		});
	},200);
	
	return false;
	
}
