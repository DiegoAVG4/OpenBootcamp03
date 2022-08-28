// Este archivo debe calcular el factorial de 10 utilizando un solo bucle for.
let num = 10;
  if (num === 0 || num === 1)
    console.log (1);
    for(let i = num - 1; i >= 1; i--){
    num *= i;
      }
      console.log(num); 