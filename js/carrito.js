const imprimirCarrito = () => {
    pushbarContainer.innerHTML = ""
    const pushbarOn = document.createElement("div");
    pushbarOn.className = "pushbar-carrito-header"
    pushbarOn.setAttribute("id", "pushbarTittle");
    pushbarOn.innerHTML = `
    <h2 class="carrito-titulo">Carrito de compras</h2>
    `;
    pushbarContainer.append(pushbarOn);

    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "pushbar-carrito-content";
        carritoContent.setAttribute("id", "pushbarCarritoContent")
        carritoContent.innerHTML = `
        <hr style="height:10px;width:100%;text-align:center;margin:0;color:black;">
        <h3>${producto.nombre}</h3>
        <img src="${producto.img}">
        <p>Precio: ${producto.precio} $</p>
        <div class="cantidades">
            <span class="restar"> - </span>
            <p>Cantidad: ${producto.cantidad}</p>
            <span class="sumar"> + </span>
        </div>
        <p class="precio-unidad"> Total: ${producto.cantidad * producto.precio} $</p>  
        `;
        pushbarContainer.append(carritoContent)
        console.log(carrito.length)

        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click", () => {
            if (producto.cantidad != 1) {
                producto.cantidad--;
            }
            saveLocal();
            imprimirCarrito();
        })

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            producto.cantidad++;
            saveLocal();
            imprimirCarrito();
        })

        let eliminar = document.createElement("button")
        eliminar.className = "bi bi-bag-dash icon-carrito"
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", () => {
            eliminarProducto(producto.id);
        });
    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalComprar = document.createElement("div");
    totalComprar.className = "pushbar-total-content";
    totalComprar.setAttribute("id", "pushbarPrecioTotal");
    totalComprar.innerHTML = `Total a pagar: ${total} $`;
    pushbarContainer.append(totalComprar);

    
    

};

verCarrito.addEventListener("click", imprimirCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })
    carritoCounter();
    saveLocal();
    imprimirCarrito();
}

