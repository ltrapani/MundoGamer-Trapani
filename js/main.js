let precioViaje = 0;
let viajeElegido = parseInt(prompt("Ingrese el numero de destino que desea abonar:\n1.Paris\n2.New York\n3.Buenos Aires"));
let cantidadPasajes = parseInt(prompt("Ingrese la cantidad de pasajes que desea: "));

const precioTotal = (precioViaje, cantidadPasajes) => {return precioViaje*cantidadPasajes}

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
            alert("El precio total a abonar es de "+precioTotal(precioViaje, cantidadPasajes));
        break;

        case 2:
            alert("Su viaje a New York se ha añadido al carrito");
            precioViaje = 310000;
            alert("El precio total a abonar es de "+precioTotal(precioViaje, cantidadPasajes));
        break;

        case 3:
            alert("Su viaje a Buenos Aires se ha añadido al carrito");
            precioViaje = 75000;
            alert("El precio total a abonar es de "+precioTotal(precioViaje, cantidadPasajes));
        break;
        default:
            alert("El numero ingresado es incorrecto, pruebe de nuevo mas tarde");
        break;
    }
}

calcularPrecio();
ingresarPasajes();
