<h1>JUEGOS en bruto</h1>
<h2><a href="../index.html">VOLVER AL INDEX</a></h2>
<ul>
<?php 
$ruta = "./";
$dir = opendir($ruta);

while (($file = readdir($dir)) !== false) {

	$es_dir = is_dir($ruta.$file);
	
	if($file!="." && $file!=".."){
		
		$ftmp = explode(".",$file);
		$fExt = strtolower($ftmp[count($ftmp)-1]);
		if($fExt=="html"){
			echo '<li><a href="'.$file.'">'.$file.'</a></li>';
		}
	}
}
closedir($dir);
?>
</ul>
