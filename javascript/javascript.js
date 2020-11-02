/*
**javascript
**/




 // Jquerys //

 $(document).ready(function(){


  var biciclette = [
      {
        nome: "gianni",
        peso:  10

      },

      {
        nome: "Franca",
        peso: 8
      },
      {
        nome: "Scott",
        peso: 11
      }

  ];


  // handlebars

  var source = $("#bike-template").html();
  var template = Handlebars.compile(source);


  // default

  var biciclettaLeggera = biciclette[0];

  // Ricerca sull array
  for(var i = 1; i < biciclette.length; i++){
      // comparazione sull array
      if(biciclette[i].peso < biciclettaLeggera.peso ){
        biciclettaLeggera = biciclette[i];
      }
  };


  // console.log(biciclettaLeggera);


  // Print the result //

  var data = {
      nome: biciclettaLeggera.nome,
      peso: biciclettaLeggera.peso
  }


  var html = template(data);

  $(".container").append(html);














 }); //<-- end here//
