
function funcionA(pos){
    var vector=["slider-0", "slider-2", "slider-3", "slider-4"]
    var cont=document.getElementById('contenedor-slider');
    cont.className = vector[pos];
    }       
function mostrarLateral(){

	var nav=document.getElementById('botonera-lateral'); 
	
	if (nav.classList.contains('mostrar')){
        nav.classList.remove('mostrar');
    } else {
        nav.classList.add ('mostrar')
    };
}

function ocultarBotoneraInstitucional(){

    var nav=document.getElementById('institucional'); 
    var nav2=document.getElementById('jardin-oculto'); 
    var nav3=document.getElementById('primaria-oculto'); 
	
	if (nav.classList.contains('mostrar')){
        nav.classList.remove('mostrar');
    } else {
        nav.classList.add ('mostrar');
        nav2.classList.remove('mostrar');
        nav3.classList.remove('mostrar')
    };
}

function ocultarBotoneraJardin(){

    var nav2=document.getElementById('jardin-oculto'); 
    var nav=document.getElementById('institucional'); 
    var nav3=document.getElementById('primaria-oculto'); 
	
	if (nav2.classList.contains('mostrar')){
        nav2.classList.remove('mostrar');
    } else {
        nav2.classList.add ('mostrar')
        nav.classList.remove('mostrar');
        nav3.classList.remove('mostrar')
    };
}

function ocultarBotoneraPrimaria(){

    var nav3=document.getElementById('primaria-oculto'); 
    var nav=document.getElementById('institucional'); 
    var nav2=document.getElementById('jardin-oculto'); 
	
	if (nav3.classList.contains('mostrar')){
        nav3.classList.remove('mostrar');
    } else {
        nav3.classList.add ('mostrar')
        nav2.classList.remove('mostrar');
        nav.classList.remove('mostrar')
    };
}


function ocultarBotoneraInstitucional2(){

	var nav2=document.getElementById('institucional2'); 
	
	if (nav2.classList.contains('mostrar')){
        nav2.classList.remove('mostrar');
    } else {
        nav2.classList.add ('mostrar')
    };
}

