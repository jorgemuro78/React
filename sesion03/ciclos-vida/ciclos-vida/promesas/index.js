// console.log("1");

// const promesa = new Promise(function (resolve) {
//   setTimeout(function () {
//     //Este codigo se va a ejecutar de manera asincrona
//     console.log("2");
//     resolve();
//   });
// });

// promesa.then(function () {
//   console.log("3");
// });

console.log("1. Cargando lista de mascotas...");

fetch("http://bedu-dog-api.herokuapp.com/breeds")
  .then(function (response) {
    console.log("3. Recibi una respuesta del backend...");
    console.log(response);
    return response.ok ? response.json() : Promise.reject(); //Convertimos la respuesta en JSON (asincronamente)
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function () {
    console.log("Ocurrio un error");
  });

console.log("2. Peticion realizada al backend...");
