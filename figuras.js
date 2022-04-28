// Código Cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código triángulo
console.group("triangulo");
const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;
console.log("Los lados del triángulo miden: " + " altura: " + altura + ", base: " + base + ", lado1: " + lado1 + ", lado2: " + lado2);

const perimetroTriangulo = lado1 + lado2 + base;
console.log("El perímetro del triangulo es de: " + perimetroTriangulo);

const areaTriangulo = (base * altura) / 2;
console.log("El área del triangulo es de: " + areaTriangulo);
console.groupEnd();

//Código circulo
console.group("Circulo");
const radio = 4;
const diametro = 4 * 2;
const PI = Math.PI;
console.log("Las medidas del círculo son: radio: " + radio + ", diámetro: " + diametro + ", PI: " + PI);
const perimetroCirculo = diametro * PI;
console.log("El perímetro del circulo es de: " + perimetroCirculo);
const areaCirculo = (radio * radio) * PI;
console.log("El area del círculo es: " + areaCirculo);
console.groupEnd();