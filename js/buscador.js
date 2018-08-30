function busqueda(){
	var tablaReg = document.getElementById('datos');
	var busquedaText = document.getElementById('terminoBuscado').value.toLowerCase();
	var celdaDeFila = "";
	var found = false;
	var compare = "";


	for (var i =1; i < tablaReg.rows.length; i++)
	{
		celdaDeFila = tablaReg.rows[i].getElementsByTagName('td');
		found = false;
		for (var j = 0; j < celdaDeFila.length && !found; j++)
		{
			compare = celdaDeFila[j].innerHTML.toLowerCase();
			if (busquedaText.length == 0 || (compare.indexOf(busquedaText) > -1))
			{
				found = true;
			}
		}
		if (found) {
			tablaReg.rows[i].style.display = '';
		} else{
			tablaReg.rows[i].style.display = 'none'; 
		}
	}
}