//variables globales
let precioProducto=0;
let cantidadCuotas=0;
let login = false;

//funciones flecha
const precioTotal = (precioProducto, cantidadProductos) => {return precioProducto*cantidadProductos} //calgula precio total del carrito
const precioPorCuota = (precioTotal, cantidadCuotas) => {return precioTotal/cantidadCuotas} //calcula precio si se elige pagar en cuotas

//saluda al usuario
function bienvenido(usuario) {
    return alert(`Buenos dias ${usuario}`);
}

//cargar pedido
function realizarPedido() {
    let nombreUsuario = prompt("Ingrese su nombre de usuario");
    bienvenido(nombreUsuario);
    let email = prompt("Ingrese su email: ")

    let productoElegido = prompt("Ingresa el producto que desea: \nTeclado \nMonitor \nProcesador");
    if (productoElegido.toLowerCase() === "teclado" || productoElegido.toLowerCase() === "monitor" || productoElegido.toLowerCase() === "procesador") {
        console.log(productoElegido);
    } else {
        while (productoElegido.toLowerCase() != "teclado" && productoElegido.toLowerCase() != "monitor" && productoElegido.toLowerCase() != "procesador") {
            productoElegido = prompt("Elegir un producto disponible. Los productos en stock son: \nTeclado \nMonitor \nProcesador");
        }
        console.log(productoElegido);
        }

    let cantidadProductos = parseInt(prompt("Ingresa la cantidad de productos que quiere abonar: "));
    if (parseInt(cantidadProductos === 1)) {
        alert(`Tu orden es de ${cantidadProductos} ${productoElegido}.`);
    } else if (parseInt(cantidadProductos)) {
        alert(`Tu orden es de ${cantidadProductos} ${productoElegido}.`);
    } else {
        while (!parseInt(cantidadProductos)) {
        cantidadProductos = parseInt(prompt("Debes ingresar un numero valido. Vuelve a ingresar el numero de productos que desea abonar"));
        }
        if (parseInt(cantidadProductos) === 1) {
            alert(`Tu orden es de ${cantidadProductos} ${productoElegido}.`);
        }else {
            alert(`Tu orden es de ${cantidadProductos} ${productoElegido}.`);
        }
    }

    if(productoElegido.toLowerCase() === "teclado"){
        alert("Su telcado se ha añadido al carrito");
        precioProducto = 12000;
        alert("El precio total a abonar es de "+precioTotal(precioProducto, cantidadProductos)+" pesos argentinos");
    }if(productoElegido.toLowerCase() === "monitor"){
        alert("Su monitor se ha añadido al carrito");
        precioProducto = 67000;
        alert("El precio total a abonar es de "+precioTotal(precioProducto, cantidadProductos)+" pesos argentinos");
    }if(productoElegido.toLowerCase() === "procesador"){
        alert("Su procesador ha añadido al carrito");
        precioProducto = 56000;
        alert("El precio total a abonar es de "+precioTotal(precioProducto, cantidadProductos)+" pesos argentinos");
    }else{console.log(productoElegido)}


    let metodoPago = parseInt(prompt("Ingrese el metodo de pago que desea:\n1.Efectivo\n2.Transferencia bancaria"));
    switch(metodoPago){
        case 1:
            alert("Usted ha elegido pagar en efectivo, por lo que debera abonar la totalidad en un solo pago");
        break        
        
        case 2:
            alert("Usted ha elegido pagar con transferencia bancaria");
            cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea:\n1 cuota\n3 cuotas sin interes\n6 cuotas sin interes"));
            console.log("cantidad de cuotas es de "+cantidadCuotas)
            alert("El precio por cuota es de "+precioPorCuota(precioTotal(precioProducto, cantidadProductos), cantidadCuotas)+" pesos argentinos"); 
        break;    
        
        default:
            alert("Error, verifique ingresar correctamente metodo de pago");
            cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea:\n1 cuota\n3 cuotas sin interes\n6 cuotas sin interes"));
        break;
    }
    alert(`Tus productos estan reservados, mas tarde nos contactaremos con usted para el envio enviando mas informacion a ${email}`);
}

//guarda el mail y password para logearse
function capturarUsuario(){
    
    function Persona(email, password){
        this.email = email;
        this.password = password;
    }

    var emailCapturar = document.getElementById("email").value;
    // console.log(emailCapturar);
    var passwordCapturar = document.getElementById("password").value;
    // console.log(passwordCapturar);

    nuevoUsuario = new Persona(emailCapturar, passwordCapturar);
    console.log(nuevoUsuario);
    agregarUsuario();
    if (login == true){
        logearUsuario();
    }
}

//pushea al usuario en la base de datos
var baseDatos = [];
function agregarUsuario(){
    baseDatos.push(nuevoUsuario);
    console.log(baseDatos);
    login = true;
}

//logea al usuario
function logearUsuario(){
    let logear = document.getElementById("login");
    logear.innerText = `${nuevoUsuario.email}`
    let boxlogin = document.getElementById("boxlogin")
    boxlogin.innerHTML = `<a href="#" class="btn btn-danger btn-login" id="cancelar" onclick="deslogearUsuario();" style="display:inline-block !important;">Log out</a>`;
}

//desloguea al usuario y da lugar a otro logeo
function deslogearUsuario(){
    let deslog = document.getElementById("boxlogin");
    deslog.innerHTML = `<p class="text-center">
                            <form action="">
                                <div class="form-group">
                                    <label for="email"><i class="fa fa-envelope" aria-hidden="true"></i> E-mail</label>
                                    <input type="text" class="form-control" name="email" id="email">
                                </div>
                                <div class="form-group">
                                    <label for="password"><i class="fa fa-lock" aria-hidden="true"></i> Contraseña</label>
                                    <input type="text" class="form-control" name="password" id="password">
                                </div>
                                <a href="#!">No recuerdo mi contraseña</a>
                                <br>
                                <p class="text-center">
                                    <a href="#" class="btn btn-danger btn-login" id="cancelar" style="display:inline-block !important;">CANCELAR</a>
                                    <button type="reset" class="btn btn-primary" onclick="capturarUsuario();">INICIAR SESIÓN</button>
                                </p>
                            </form>
                            <hr>
                            <p class="text-center">¿Aún no tienes cuenta?</p>
                            <a href="#!">CRÉATE UNA GRATIS</a>
                        </p>`;
    let logear = document.getElementById("login");
    logear.innerText = "Log in";
}

realizarPedido();

const carritoContenido = document.getElementById("carritoContenido")
const verCarrito = document.getElementById("verCarrito");
const pushbarContainer = document.getElementById("pushbar-container")

let carrito = []

productos.forEach((producto)=>{
    let content = document.createElement("div");
    content.className= "card"
    content.innerHTML = `
    <img class="card-img-top" src="${producto.img}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-price">${producto.precio}</p>
            <p class="card-text">${producto.descripcion}</p>
    `;

    carritoContenido.append(content)

    let comprar = document.createElement("button");
    comprar.className = "btn btn-outline-primary";
    comprar.innerText = "Agregar al carrito" ;
    content.append(comprar);

    let descuento = document.createElement("div");
    descuento.className = "card-footer";
    descuento.innerHTML = `
        <small >${producto.descuento}</small>
    `;
    content.append(descuento)

    comprar.addEventListener("click", () =>{
        carrito.push({
            id : producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
        })
        console.log(carrito)
    })
})

verCarrito.addEventListener("click", () =>{
    const pushbar = document.createElement("div");
    pushbar.className = "pushbar-carrito-header"
    pushbar.innerHTML = `
    <h2 class="carrito-titulo">Carrito de compras</h2>
    `;
    console.log("hola")
    pushbarContainer.append(pushbar)
})