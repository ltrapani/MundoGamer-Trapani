let precioViaje = 0;
let cantidadCuotas = 0;

let nombreUsuario = prompt("Ingrese su nombre de usuario");
alert("Buenos dias "+nombreUsuario);

let viajeElegido = parseInt(prompt("Ingrese el numero de destino al que desea viajar:\n1.Paris\n2.New York\n3.Buenos Aires"));
let cantidadPasajes = parseInt(prompt("Ingrese la cantidad de pasajes que va a abonar: "));

const precioTotal = (precioViaje, cantidadPasajes) => {return precioViaje*cantidadPasajes}
const precioPorCuota = (precioTotal, cantidadCuotas) => {return precioTotal/cantidadCuotas}


function ingresarPasajes(){
    if(0<cantidadPasajes){
        for(let veces=0; veces<cantidadPasajes; veces++){
            let nombrePasajero = prompt("Ingrese nombre y apellido del pasajero");
            alert("Nombre de pasajero numero "+veces+" |"+nombrePasajero+"| "+"registrado correctamente");
        }
    }
}

function calcularPrecio(){
    switch(viajeElegido){
        case 1:
            alert("Su viaje a Paris se ha añadido al carrito");
            precioViaje = 270000;
            alert("El precio total a abonar es de "+precioTotal(precioViaje, cantidadPasajes)+" pesos argentinos");
            ingresarPasajes();
        break;

        case 2:
            alert("Su viaje a New York se ha añadido al carrito");
            precioViaje = 310000;
            alert("El precio total a abonar es de "+precioTotal(precioViaje, cantidadPasajes)+" pesos argentinos");
            ingresarPasajes();
        break;

        case 3:
            alert("Su viaje a Buenos Aires se ha añadido al carrito");
            precioViaje = 75000;
            alert("El precio total a abonar es de "+precioTotal(precioViaje, cantidadPasajes)+" pesos argentinos");
            ingresarPasajes();
        break;
        default:
            alert("Error, verifique ingresar correctamente el numero de destino al que desea viajar");
            
        break;
    }
}

function metodoPago(){
    let metodoPago = parseInt(prompt("Ingrese el metodo de pago que desea:\n1.Efectivo\n2.Transferencia bancaria"));
    switch(metodoPago){
        case 1:
            alert("Usted ha elegido pagar en efectivo, por lo que debera abonar la totalidad en un solo pago");
        break        
        
        case 2:
            alert("Usted ha elegido pagar con trasnferencia bancaria");
            cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea:\n1 cuota\n3 cuotas sin interes\n6 cuotas sin interes"));
            console.log("cantidad de cuotas es de "+cantidadCuotas)
            alert("El precio por cuota es de "+precioPorCuota(precioTotal(precioViaje, cantidadPasajes), cantidadCuotas)+" pesos argentinos"); 
        break;    
        
        default:
            alert("Error, verifique ingresar correctamente metodo de pago");
        break;
    }
}

calcularPrecio();
metodoPago();
