/*
creando un objeto backpack
*/
const backpack ={
    name: "Mochila diaria",
    volumen: 30,
    color: "grey",
    pocketNum: 10,
    strapLength: {
        left: 26,
        right: 27
    },

    lidOpen: false,
    toggleLid: function(lidStatus){
        this.lidOpen = lidStatus
    },

    newStrapLength: function (Lengthleft, Lengthrigth){
        this.strapLength.left = Lengthleft;
        this.strapLength.right = Lengthrigth;
    }

};
//console.log(backpack)
console.log("El nombre de la mochila es: " + backpack.name);
console.log("El tamaño de correa derecha es: " + backpack.strapLength.right) 
var query = "color";
console.log(backpack[query]);


const Lentes ={
    marca : "made in china" , // caracteres con ""
    color : "rojo",
    aumento : 10,
    lente : {
        lenteIzquiero : 6, //numero sin comilla
        lenteDerecho : 5  //declarar variables formatos
    },
    statusLente : false,
    lenteGuardado : function (statusGuardado)
    
     { 
         this.statusLente = statusGuardado;
     }

}
/* Array parte de cero, es el que cuenta*/
/* collection era para usar en array*/ let collection = ["Enchiladas" /*0*/, "Tamales" /*1*/, "Chiles en nogada" /*2*/, "Empanadas", "Churros", 5, true]
console.log(collection[2]);
collection[5] = "Tacos";
console.log(collection);
console.log(collection.length);
collection[6] = "Chilaquiles";
collection.toUppercase(collection[1]);
console.log(collection);
