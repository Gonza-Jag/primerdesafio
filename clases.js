class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }
    addBook(nombre, autor){
        const newBook ={nombre:nombre, autor: autor};
        console.log(newBook);
        this.libros.push(newBook)
    }
    addMascota(nombre){
        const newMascota = {nombre:nombre};
        console.log(newMascota);
        this.mascotas.push(newMascota);
    }
    countMascotas(){
        const contar = this.mascotas.length
        console.log(contar)

    }

    getFullName(){
        console.log(`Mi nombre completo es ${this.nombre} ${this.apellido}`)
    }
    getBookNames(){
        let coleccion = this.libros
        let nombre = [];
        coleccion.map(libro=>{
            nombre.push(libro.nombre)
            
        })
        
        console.log(nombre)


    }
}
    
    
    
    
    
    const usuarioUno = new Usuario("Gonzalo", "Godoy",[{nombre:"Drácula", autor:"Bram Stocker"}],["León","George"]);
    
    console.log(usuarioUno)
    usuarioUno.addBook("Demian","Hermann Hesse")
    usuarioUno.addMascota("Lola")
    usuarioUno.countMascotas()
    usuarioUno.getFullName()
    usuarioUno.getBookNames()
    

