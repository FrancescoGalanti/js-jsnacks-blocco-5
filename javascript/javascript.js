/*
**javascript
**/




 // Jquerys //

 $(document).ready(function(){
 //
 //
 //  var biciclette = [
 //      {
 //        nome: "gianni",
 //        peso:  10
 //
 //      },
 //
 //      {
 //        nome: "Franca",
 //        peso: 8
 //      },
 //      {
 //        nome: "Scott",
 //        peso: 11
 //      }
 //
 //  ];
 //
 //
 //  // handlebars
 //
 //  var source = $("#bike-template").html();
 //  var template = Handlebars.compile(source);
 //
 //
 //  // default
 //
 //  var biciclettaLeggera = biciclette[0];
 //
 //  // Ricerca sull array
 //  for(var i = 1; i < biciclette.length; i++){
 //      // comparazione sull array
 //      if(biciclette[i].peso < biciclettaLeggera.peso ){
 //        biciclettaLeggera = biciclette[i];
 //      }
 //  };
 //
 //
 //  // console.log(biciclettaLeggera);
 //
 //
 //  // Print the result //
 //
 //  var data = {
 //      nome: biciclettaLeggera.nome,
 //      peso: biciclettaLeggera.peso
 //  }
 //
 //
 //  var html = template(data);
 //
 //  $(".container").append(html);

 // secondo esercizio //


 var myarray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
 var tot = myarray.length - 1;
 var min = parseInt(prompt("indici di inizio tra 0 e " + tot) );
 var max = parseInt(prompt("indice di fine (superiore a indici di inizio), tra 0 e " + tot) );


var newarray = [];

for(var i = 0; i < myarray.length; i++){
   if(min <= 1 && max >= i){
     newarray.push(myarray[i]);
   }
};

console.log("original: " + myarray);
console.log("indexes: " + min, max);
console.log("New: " + newarray);












 }); //<-- end here//
