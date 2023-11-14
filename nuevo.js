const SI= 'si'
const NO='no'

let cliente;
let verduraFruta;
let precio;
let cantidad;
let total= 0;
let continuar;
let fila;

let ticket= 'Nombre         Cantidad            Precio unidad           Importe \n';

cliente= prompt('Bienvenido a verduleria Pela la Chaucha!\n Ingrese su nombre:');
do{
    verduraFruta= prompt( 'ingrese verdura o fruta: \n' )
    precio=  +prompt('Ingrese el precio: \n')
    cantidad= +prompt('Ingrese el peso en kg:')
    fila= `${verduraFruta}              ${cantidad}Kg           $${precio}              $${precio*cantidad}\n`;
    ticket= ticket + fila;
    total= total + precio*cantidad;
    continuar= prompt('Desea agregar otra fruta o verdura \n').toLowerCase();
}while (continuar === SI);
ticket= ticket+ `Total: $${total}`;
alert (`Gracias ${cliente} por comprar en Pela la Chaucha!\n`+ticket);