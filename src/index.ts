import "./styles.css";

let dimension: number = Number(prompt(`Ingrese dimension del arreglo`));
let arreglo: number[] = new Array(dimension;
let contadorCeros:number = 0
let contadorPositivos:number = 0
let contadorNegativos:number = 0
for (let i = 0; i < dimension; i++) {
  let x: number = Number(
    prompt(`Ingrese ${dimension} numeros: `)
  );
  arreglo[i] = x;
  if(arreglo[i] === 0) {
    contadorCeros++
  } else if(arreglo[i] >= 1) {
    contadorPositivos++
  } else if(arreglo[i] < 0) {
    contadorNegativos++
  }
}

console.log(`Array: ${arreglo}`)
console.log(`Cantidad de positivos: ${contadorPositivos}`)
console.log(`Cantidad de negativos: ${contadorNegativos}`)
console.log(`Cantidad de ceros: ${contadorCeros}`)




