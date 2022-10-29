//variables globales
let login = false;

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


const carritoContenido = document.getElementById("carritoContenido");
const verCarrito = document.getElementById("verCarrito");
const pushbarContainer = document.getElementById("pushbar-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "card"
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
    comprar.innerText = "Agregar al carrito";
    content.append(comprar);

    let descuento = document.createElement("div");
    descuento.className = "card-footer";
    descuento.innerHTML = `
        <small >${producto.descuento}</small>
    `;
    content.append(descuento);

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

//setear item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
    if (carrito.length === 0) {
        cantidadCarrito.style.display = "none";
    }
}

carritoCounter();