// //alerta de producto agregado al carrito
function mostrarAlert(){

    Swal.fire({
        position: 'end',
        icon: 'success',
        title: 'Agregado al carrito correctamente',
        showConfirmButton: false,
        timer: 5500
    }) 
    

}

//manejo de alerts con carrito vacio o lleno
function carritoVacioAlert(){
    if(carrito.length === 0){
        Swal.fire({
            position: 'end',
            icon: 'error',
            title: 'No hay articulos en el carrito',
            showConfirmButton: false,
            timer: 5500
        });
        console.log("carrito vacio")
    }
    if(carrito.length > 0){
        Swal.fire({
            position: 'end',
            icon: 'sucess',
            title: '<a href="./pages/forms.html">Completar compra</a>',
            showConfirmButton: false,
        });
    }
    console.log("hola")
}


//alerta de formulario y compra completada exitosamente
function enviarFormulario(){
    Swal.fire({
        position: 'end',
        icon: 'success',
        title: 'Formulario enviado exitosamente! En la brevedad nos contactaremos con usted por Email',
        showConfirmButton: false,
        timer: 5500,
    })  
    
}
//alerta de saludo al ingresar a la home page
Swal.fire({
    title: 'Bienvenido a Mundo Gamer',
    text: 'Esperamos que consigas lo que buscas',
    timer: 4000,
    timerProgressBar: true,
}) 