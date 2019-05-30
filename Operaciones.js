	var CountId = 10;
	var CuentaColor = 10000;

	function CambioColor(NotaId,color){
		document.getElementById(NotaId).style.backgroundColor = color;
	}	
	function CambioColorTotal(NotaId,CuentaColor){
		var x = document.getElementById(CuentaColor).value;
		document.getElementById(NotaId).style.backgroundColor = x;
	}
	
	function CambioColorFondoCalculadora(){
		document.body.style.backgroundImage= " radial-gradient(circle, #172841, #154967, #006d8b, #0094a7, #16bbbb)";	
		
	}
	function CambioColorFondoParImpar(){
		document.body.style.backgroundImage = "linear-gradient(90deg,#ff0844 0,#ffb199)";
	}
	function CambioColorFondoCalendario(){
		document.body.style.backgroundImage = "radial-gradient(circle, #172841, #0b3750, #00475c, #005763, #046666)";
	}
	function CambioColorFondoNotas(){
		document.body.style.backgroundImage = "radial-gradient(circle, #00f27e, #00f2a3, #00f1c2, #00efda, #12ebeb)";
	}
	
	function Eliminar(NotaId) {
		let node = document.getElementById(NotaId);
			if (node.parentNode) {
		node.parentNode.removeChild(node);
}
	}
	
	
	
	function createCard() {
  var div = document.createElement('div');

  div.innerHTML =`<div id="${CountId}" class="shadow p-3 mb-5  rounded">
	<div class="dropdown">
	<button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		COLOR
		<button type="button" class="close"  onclick="Eliminar(${CountId})" >
			x
        </button>
	</button>
	<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
		<button type="button" class="btn btn-outline-primary" value="AQUA" onclick="CambioColor(${CountId},value)">Azul</button>
		<button type="button" class="btn btn-outline-danger" value="RED" onclick="CambioColor(${CountId},value)">Rojo</button>
		<button  type="button" class="btn btn-outline-warning" value="YELLOW" onclick="CambioColor(${CountId},value)">Amarillo</button>
		<input type="color" id="${CuentaColor}">
		<button  type="button" class="btn btn-outline-dark"  onclick="CambioColorTotal(${CountId},${CuentaColor})">Acualizar</button>
		
	</div>
	</div>
	<div class="input-group">
	<div class="input-group-prepend">
	</div>\
	<textarea id="text"class="form-control" aria-label="With textarea"></textarea>
	</div>
	</div>`;
	
	CuentaColor++;
	CountId++; 
	document.getElementById("list-Notas").appendChild(div);

}
