$("#btnAgregarCarrito").click(function(){

    Swal.fire({
        position: 'end',
        icon: 'success',
    title: 'Agregado al carrito correctamente',
        showConfirmButton: false,
        timer: 5500
    }) 
    console.log("true")

})

function mostrarAlert(){
    Swal.fire({
        position: 'end',
        icon: 'success',
        title: 'Formulario enviado exitosamente! En la brevedad nos contactaremos con usted por Email',
        showConfirmButton: false,
        timer: 5500,
    })  
}

Swal.fire({
    title: 'Bienvenido a Mundo Gamer',
    text: 'Esperamos que consigas lo que buscas',
    timer: 4000,
    timerProgressBar: true,
}) 