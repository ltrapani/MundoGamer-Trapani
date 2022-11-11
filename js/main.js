//variables globales
const carritoContenido = document.getElementById("carritoContenido");
const verCarrito = document.getElementById("verCarrito");
const pushbarContainer = document.getElementById("pushbar-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const vaciarCarrito = document.getElementById("vaciarCarrito")
let carritoLength
let login = false;
//carrito y verificacion para despues imprimirlo con el localstorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//(BOCETO)
//guarda el mail y password para logearse
function capturarUsuario() {

    function Persona(email, password) {
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
    if (login == true) {
        logearUsuario();
    }
}
//pushea al usuario en la base de datos
var baseDatos = [];
function agregarUsuario() {
    baseDatos.push(nuevoUsuario);
    console.log(baseDatos);
    login = true;
}
//logea al usuario
function logearUsuario() {
    let logear = document.getElementById("login");
    logear.innerText = `${nuevoUsuario.email}`
    let boxlogin = document.getElementById("boxlogin")
    boxlogin.innerHTML = `<a href="#" class="btn btn-danger btn-login" id="cancelar" onclick="deslogearUsuario();" style="display:inline-block !important;">Log out</a>`;
}


//desloguea al usuario y da lugar a otro logeo
function deslogearUsuario() {
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


// cargar productos en cards
productos.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img class="card-img-top" src="${producto.img}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-price">$${producto.precio}</p>
            <p class="card-text">${producto.descripcion}</p>
    `;

    carritoContenido.append(content)

    //btn agregar carrito
    let comprar = document.createElement("button");
    comprar.setAttribute("id", "btnAgregarCarrito")
    comprar.setAttribute("onclick", "mostrarAlert()")
    comprar.className = "btn btn-outline-primary";
    comprar.innerText = "Agregar al carrito";
    content.append(comprar);

    //descuento en cards
    let descuento = document.createElement("div");
    descuento.className = "card-footer";
    descuento.innerHTML = `
        <small >${producto.descuento}</small>
    `;
    content.append(descuento);
    
    //control de cantidad de un producto con su id
    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id)
        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad++;
                }
            })
        } else {
            carrito.push({
                id: producto.id,
                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            })
        }
        carritoCounter();
        saveLocal();
    })
})


//setear item del carrito
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//contar si hay algo en el local storage
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
    if (carrito.length === 0) {
        cantidadCarrito.style.display = "none";
    }
}

//valor dolar traida desde API con fetch
function valorDolar() {
    const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest"
    fetch(URLDOLAR)
        .then(respuesta => respuesta.json())
        .then(cotizaciones => {
            const dolarBlue = cotizaciones.blue;
            console.log(dolarBlue);
            let dolarPrecio = dolarBlue.value_buy
            console.log("precio del dolar " + dolarPrecio)
            document.getElementById("valorDolar").innerHTML += `
        <p class="textoDolar">Ajustamos los mejores precios teniendo en cuenta la cotizacion del dolar a tiempo real!</p>
        <p class="precioDolar">Dolar Compra: $ ${dolarBlue.value_buy}</p>
        <p class="precioDolar">Dolar Venta: $ ${dolarBlue.value_sell}</p>
        `;

        })
}

//borro carro
function borrarCarro(){
    pushbarContainer.innerHTML = ""
    const pushbarOn = document.createElement("div");
    pushbarOn.className = "pushbar-carrito-header"
    pushbarOn.setAttribute("id", "pushbarTittle");
    pushbarOn.innerHTML = `
    <h2 class="carrito-titulo">Carrito de compras</h2>
    `;
    pushbarContainer.append(pushbarOn);

    let carritoContent = document.createElement("div");
    carritoContent.innerHTML = ` `;
    pushbarContainer.append(carritoContent)

    //calculo de precio total
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalComprar = document.createElement("div");
    totalComprar.className = "pushbar-total-content";
    totalComprar.setAttribute("id", "pushbarPrecioTotal");
    totalComprar.innerHTML = `Total a pagar: ${total} $`;
    pushbarContainer.append(totalComprar);

    cantidadCarrito.style.display = "none";
    }
    

//vacio el array y el local storage ademas de que imprimo el carro en blanco
function vaciarCarro (){
    carrito = []
    localStorage.clear();
    borrarCarro();
}



vaciarCarrito.addEventListener("click", vaciarCarro)


valorDolar();
carritoCounter();