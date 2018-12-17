interface Persona2 {
    nombres: string;
    apellidos: string;
}

let carlos: Persona2 = {
    nombres: 'Carlos',
    apellidos: 'Perez'
};

console.log(carlos);

class Cliente implements Persona2 {
    public nombres: string;
    public apellidos: string;
    public identificacion: string;

    public constructor(nombres: string, apellidos: string, identificacion: string){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
    }
}

let nuevoCliente: Cliente = new Cliente("Carlos", "Perez", "0925006447");
console.log(nuevoCliente);