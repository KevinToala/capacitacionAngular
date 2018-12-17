class Persona {
    private _nombres: string;
    private _apellidos: string;

    constructor(nombres: string, apellidos: string){
        this._nombres = nombres;
        this._apellidos = apellidos;
    }

    public get nombres(): string {
        return this._nombres;
    }

    public set nombres(nombres: string){
        this._nombres = nombres;
    }

    public obtenerNombreCompleto(): string {
        return this._nombres + " " + this._apellidos;
    }
}