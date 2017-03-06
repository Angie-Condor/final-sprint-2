function mostrarCoders(){
var listaCoders = document.getElementById('listaCoders');
var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

listaCoders.innerHTML = "";

    coders.forEach(function(e){
    listaCoders.innerHTML += "<div><ul><li>" + "Nombre: " + e.nombre + "</li>"+
                             "<li>" + "Apellido: " + e.apellido + "</li>"+
                             "<li>" + "Promoción: " + e.promocion + "</li>"+
                             "<li>" + "Estado: " + e.estado + "</li></ul></div>";
    })
}
mostrarCoders();
