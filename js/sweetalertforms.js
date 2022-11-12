//alerta de formulario y compra completada exitosamente
function enviarFormulario(){
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		Swal.fire({
        position: 'end',
        icon: 'success',
        title: 'Formulario enviado exitosamente! En la brevedad nos contactaremos con usted a traves de su correo electronico',
        showConfirmButton: true,
        timer: 5500,
    })  
	}
}