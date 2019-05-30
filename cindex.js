function init(){
	
var cal = document.getElementById('calcular');


	cal.onclick = function(e){
		var comprobar1 = document.getElementById('valor').value|0;
		
		
		var num = parseInt(document.getElementById('valor').value|0);
		
		respuestaParImpar.textContent = pares(num);
		respuestaParImpar.textContent = comprobar(comprobar1);
	}	
	
	function pares(e){
		if(e % 2 == 0) {//se da condicion para que retorne par
        return "par";
      }
      else {
        return "Impar";//si modulo de n es distinto de 0, será impar
      }
	}
	
	function comprobar(e){
		if(e.indexOf('E') != -1){
			return "Error letra E";
			}
	}
	
}