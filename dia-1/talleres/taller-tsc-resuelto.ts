//Crear una interfaz que sirva para definir el contenido del siguiente objeto
interface Factura {
    id: number;
    anulado: boolean;
    numero: string;
    cliente: Cliente;
    items: ItemFactura[];
}

interface ItemFactura {
    producto: string,
    precioUnitario: number,
    cantidad: number,
    total: number
}

interface Cliente {
    id: number,
    nombres: string,
    apellidos: string,
    activo: boolean
}

let factura: Factura = {
    id: 1,
    anulado: false,
    numero: '001-001-00000001',
    cliente: {
        id: 1,
        nombres: "Kevin Gabriel",
        apellidos: "Toala Mosquera",
        activo: true
    },
    items: [
        {
            producto: 'Zapato Nike ABC123',
            precioUnitario: 99.99,
            cantidad: 1,
            total: 9.99
        },
        {
            producto: 'Zapato Adidas XYZ987',
            precioUnitario: 99.99,
            cantidad: 1,
            total: 9.99
        }
    ]
}

console.log(factura);


//Convertir la siguiente funcion a una funcion flecha
let calculo = (a: number, b: number, c: number) => (a * b) + c;
console.log('Calculo: ' + calculo(2,2,3));


//Utilizar los metodos para el manejo de arreglos con programacion funcional
//para filtrar las siguientes facturas que no han sido anuladas y obtener el total de ellas

interface FacturaSimple {
    cliente: string;
    total: number;
    anulado: boolean;
}

let facturas: FacturaSimple[] = [
    {
        cliente: 'Kevin Toala',
        total: 50,
        anulado: false
    },
    {
        cliente: 'Rosalinda Estrada',
        total: 100,
        anulado: false
    },
    {
        cliente: 'Juan Perez',
        total: 10,
        anulado: true
    },
    {
        cliente: 'Juan Perez',
        total: 25,
        anulado: false
    },
    {
        cliente: 'Carlos Perez',
        total: 75,
        anulado: true
    },
    {
        cliente: 'Juan Perez',
        total: 25,
        anulado: false
    },
    {
        cliente: 'Kevin Toala',
        total: 75,
        anulado: true
    }
];

let totalFacturas = facturas
        .filter(factura => factura.anulado == false)
        .map(factura => factura.total)
        .reduce((a, b) => a + b, 0);
console.log("Total Facturas: " + totalFacturas);



//Crear una funcion que utilice plantillas literales y los siguientes parametros y restricciones para construir un mensaje
//  propiedad: sera obligatorio
//  mensaje: con valor por defecto "Ocurrio un error."
//  valorInvalido: opcional
//Ejemplo 1: 
//  propiedad: "idCliente"
//  mensaje: "No existe el cliente con el id seleccionado"
//  Resultado: No existe el cliente con el id seleccionado (Propiedad invalidad: idCliente)
//Ejemplo 2: 
//  propiedad: "idCliente"
//  mensaje: "No existe el cliente con el id seleccionado"
//  valorInvalido: 7
//  Resultado: No existe el cliente con el id seleccionado (Propiedad invalida: idCliente) (Valor introducido: 7)
//Recuerde definir el tipo de dato de cada parametro y del valor de retorno
function mensajeError(propiedad: string, mensaje: string = 'Ocurrio un error', valorInvalido?: string){
    if (valorInvalido) {
        return `${mensaje} (Propiedad invalida: ${propiedad}) (Valor introducido: ${valorInvalido})`;
    }
    else {
        return `${mensaje} (Propiedad invalida: ${propiedad})`;
    }
}

console.log(mensajeError('idCliente', 'No existe el cliente con el id seleccionado'));
console.log(mensajeError('idCliente', 'No existe el cliente con el id seleccionado', '7'));