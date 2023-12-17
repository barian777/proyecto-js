// funciones globales
const agregarProducto = (array, producto) => {
    array.push(producto);
    productID++;
};

const validacionDeExistencia = (array, idProducto) => {
    let existe = array.some(elemento => elemento.id === idProducto);
    return existe;
}


const eliminarProducto = (array, idPr, categoria) => {
    if (validacionDeExistencia(array, idPr)) {
        categoria = array.filter(producto => producto.id !== idPr);
    } else{
        alert ("No existe ningun producto con ese ID.");
    }
};

const mostrarProductos = (array) => {
    let nombreCategoria = array.map(producto => `ID: ${producto.id} - Nombre: ${producto.nombreProducto}`);

    if(nombreCategoria.length > 0){
        alert(nombreCategoria.join("\n"));
    }else {
        alert("No hay productos cargados.")
    }
};

let productID = 1;
let tabacos = [];
let papelillos = [];
let filtros = [];
let accesorios = [];

class Producto {
    constructor(nombreProducto, precioProducto){
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.id = productID;
    }
}

// menu tabacos
const menuTabacos= () => {
    let estado1 = true;

    while(estado1){
        let opcion = parseInt(prompt(
            `
            Seleccione una accion:
            1- Agregar producto.
            2- Eliminar producto.
            3- Mostrar productos.
            4- Volver al menu de categorias.
            `
        ));
        switch (opcion) {
            case 1:
                let nombreProducto = prompt("Ingrese el nombre del producto.");
                let precioProducto = prompt("Ingrese el precio del producto."); 
                const producto = new Producto(nombreProducto, precioProducto);
                agregarProducto(tabacos, producto);  
                break;
            case 2:
                let idProducto = parseInt(prompt("Ingrese el ID del producto que desea eliminar."));
                eliminarProducto(tabacos, idProducto, tabacos);
                break;
            case 3: 
                mostrarProductos(tabacos); 
                break;
            case 4:
                estado1 = false;
                menuAdmin();
                break;    
            default:
                alert("Ingrese una opcion valida.");
                break;
        }  
    } 
}

//menu papelillos
const menuPapelillos= () => {
    let estado = true;

    while(estado){
        let opcion = parseInt(prompt(
            `
            Seleccione una accion:
            1- Agregar producto.
            2- Eliminar producto.
            3- Mostrar productos.
            4- Volver al menu de categorias.
            `
        ));
        switch (opcion) {
            case 1:
                let nombreProducto = prompt("Ingrese el nombre del producto.");
                let precioProducto = prompt("Ingrese el precio del producto."); 
                const producto = new Producto(nombreProducto, precioProducto);
                agregarProducto(papelillos, producto);
                break;
            case 2:
                let idProducto = parseInt(prompt("Ingrese el ID del producto que desea eliminar."));
                eliminarProducto(papelillos, idProducto, papelillos);
                break;
            case 3:
                mostrarProductos(papelillos); 
                break;
            case 4:
                estado = false;
                menuAdmin();
                break;    
            default:
                alert("Ingrese una opcion valida.");
                break;
        }
    }
    
}

//menu filtros
const menuFiltros= () => {
    let estado = true;

    while(estado){
        let opcion = parseInt(prompt(
            `
            Seleccione una accion:
            1- Agregar producto.
            2- Eliminar producto.
            3- Mostrar productos.
            4- Volver al menu de categorias.
            `
        ));
        switch (opcion) {
            case 1:
                let nombreProducto = prompt("Ingrese el nombre del producto.");
                let precioProducto = prompt("Ingrese el precio del producto."); 
                const producto = new Producto(nombreProducto, precioProducto);
                agregarProducto(filtros, producto);
                break;
            case 2:
                let idProducto = parseInt(prompt("Ingrese el ID del producto que desea eliminar."));
                eliminarProducto(filtros, idProducto, filtros);
                break;
            case 3:
                mostrarProductos(filtros); 
                break;
            case 4:
                estado = false;
                menuAdmin();
                break;    
            default:
                alert("Ingrese una opcion valida.");
                break;
        }
    }
    
}

//menu accesorios
const menuAccesorios= () => {
    
    let estado = true;

    while(estado){
        let opcion = parseInt(prompt(
            `
            Seleccione una accion:
            1- Agregar producto.
            2- Eliminar producto.
            3- Mostrar productos.
            4- Volver al menu de categorias.
            `
        ));
        switch (opcion) {
            case 1:
                let nombreProducto = prompt("Ingrese el nombre del producto.");
                let precioProducto = prompt("Ingrese el precio del producto."); 
                const producto = new Producto(nombreProducto, precioProducto);
                agregarProducto(accesorios, producto);
                break;
            case 2:
                let idProducto = parseInt(prompt("Ingrese el ID del producto que desea eliminar."));
                eliminarProducto(accesorios, idProducto, accesorios);
                break;
            case 3:
                mostrarProductos(accesorios); 
                break;
            case 4:
                estado = false;
                menuAdmin();
                break;    
            default:
                alert("Ingrese una opcion valida.");
                break;
        }
    }
}

// Seccion de opciones de administrador

const menuAdmin = () => {
    let estado = true;
    while (estado) {
        let opcion = parseInt(
            prompt(`
            Bienvenido al menu de control de productos.
            Seleccione una categoria:
            1- Tabacos.
            2- Papelillos.
            3- Filtros.
            4- Accesorios.
            5- Salir. 
            `)
        );
        switch (opcion) {
            case 1:
                //seccion tabacos
                menuTabacos();
                break;   
            case 2:
                //seccion papelillos
                menuPapelillos();
                break;
            case 3:
                //seccion filtros
                menuFiltros();
                break;
            case 4:
                //seccion accesorios
                menuAccesorios();
                break;
            case 5:
                estado = false;
                break;
            default:
                alert("Por favor ingrese una opción válida.");
                break;
        }
    }
}

menuAdmin();