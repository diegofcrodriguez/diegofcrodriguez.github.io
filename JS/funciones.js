//Cambia a los colores de Argentina al hacer click
document.addEventListener('click',function(){
    document.getElementById('JRR').style.backgroundColor='white';
    document.getElementById('JRR').style.borderColor='lightskyblue'; 
})

//Cambia a los colores de Boca al hacer doble click
document.addEventListener('dblclick',function(){
    document.getElementById('JRR').style.backgroundColor='gold';
    document.getElementById('JRR').style.borderColor='darkblue';     
})

//Se agranda la imagen al pasar el mouse y vuelve a su tamaño al salir
function cambiarTamanioImagen(img,size) {
    img.style.width = size;
}

//Función para abrir el video externo de YouTube con las mejores jugadas de Román
function abrirVentana() {
    var ventana = window.open("https://www.youtube.com/watch?v=LegII79VtUM", "ventanaVideo", "width=800,height=600");
}