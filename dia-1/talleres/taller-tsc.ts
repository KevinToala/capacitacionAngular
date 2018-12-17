//Crear las interfaces necesarias para definir el contenido del siguiente objeto
let factura = {
    id: 1,
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

//Convertir la siguiente funcion a una funcion flecha
function calculo(a: number, b: number, c: number) {
    return (a * b) + c;
}


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