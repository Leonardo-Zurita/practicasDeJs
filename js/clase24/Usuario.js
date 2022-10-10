export class Usuario{
    constructor(nombre,apellido,email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estaActivo = true;
        this.localidad = "Tucumán"
    }

    loguear(){
        console.log("El usuario ha sido logueado")
    }
    get nombre(){
        return this.nombre;
    }
}

//ver el tema de get nombre