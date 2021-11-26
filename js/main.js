
/* Declaracion de variables */
let servicioIngresado = prompt("Ingrese el servicio deseado: masaje, limpieza facial o sauna");
let descuento = parseInt(prompt("Ingrese su porcentaje de descuento: 15, 20, 50"))
let descuentovalido1 = parseInt(15)
var descuentovalido2 = parseInt(20)
var descuentovalido3 = parseInt(50)
let precioTotal = 0
let precio = 0


/* Condicional para establecer el precio de cada servicio */

/* Condicional para Masaje */

if  ((servicioIngresado == "masaje") &&  (descuento == descuentovalido1)) {
    alertDescuento ()
    precio = parseInt("100")
     calculoDescuento ()
    }

else if  ((servicioIngresado == "masaje") &&  (descuento == descuentovalido2)) {
    alertDescuento ()
    precio = parseInt("100")
           calculoDescuento ()
       }

else if  ((servicioIngresado == "masaje") &&  (descuento == descuentovalido3)) {
    alertDescuento ()
        precio = parseInt("100")
               calculoDescuento ()
           }

/* Condicional para Limpieza Facial */

else if  ((servicioIngresado == "limpieza facial") &&  (descuento == descuentovalido1)) {
    alertDescuento ()
    precio = parseInt("40")
           calculoDescuento ()
       }

else if  ((servicioIngresado == "limpieza facial") &&  (descuento == descuentovalido2)) {
    alertDescuento ()
    precio = parseInt("40")
           calculoDescuento ()
       }

else if  ((servicioIngresado == "limpieza facial") &&  (descuento == descuentovalido3)) {
    alertDescuento ()
        precio = parseInt("40")
               calculoDescuento ()
           }

/* Condicional para Sauna */


else if  ((servicioIngresado == "sauna") &&  (descuento == descuentovalido1)) {
    alertDescuento ()
    precio = parseInt("70")
           calculoDescuento ()
       }

else if  ((servicioIngresado == "sauna") &&  (descuento == descuentovalido2)) {
    alertDescuento ()
    precio = parseInt("70")
           calculoDescuento ()
       }

else if  ((servicioIngresado == "sauna") &&  (descuento == descuentovalido3)) {
    alertDescuento ()
        precio = parseInt("70")
               calculoDescuento ()
           }


/* En caso de ingreso erroneo de datos */

else {
    alert("Ha ingresado un dato erroneo")
}

/* Funcion de de notificación de descuento ingresado */

function alertDescuento () {
    alert("Has ingresado " + descuento + "% de descuento")
}

/* Funcion de calculo del descuento */

function calculoDescuento () {
    precioTotal = parseFloat(precio) - ( (precio * parseFloat(descuento/100) ));
    alert ("El precio final es de " + parseFloat(precioTotal))
}








