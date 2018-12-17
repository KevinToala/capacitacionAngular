function mostrarTexto(texto?: string){
    if(texto){
        console.log(texto);
    }
    else {
        console.log("Llamado Sin parametro");
    }
}

mostrarTexto();
mostrarTexto("Hola Mundo");