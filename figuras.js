// Código Cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código triángulo
console.group("triangulo");
// const lado1 = 6;
// const lado2 = 6;
// const base = 4;
// const altura = 5.5;
// console.log("Los lados del triángulo miden: " + " altura: " + altura + ", base: " + base + ", lado1: " + lado1 + ", lado2: " + lado2);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// const perimetroTriangulo = lado1 + lado2 + base;
// console.log("El perímetro del triangulo es de: " + perimetroTriangulo);

// const areaTriangulo = (base * altura) / 2;
// console.log("El área del triangulo es de: " + areaTriangulo);
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//Código circulo
console.group("Circulo");
// const radio = 4;
// const diametro; 
const PI = Math.PI;
// console.log("Las medidas del círculo son: radio: " + radio + ", diámetro: " + diametro + ", PI: " + PI);
// const perimetroCirculo = diametro * PI;
// console.log("El perímetro del circulo es de: " + perimetroCirculo);
// const areaCirculo = (radio * radio) * PI;
// console.log("El area del círculo es: " + areaCirculo);
function diametro(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametro(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//Interaccion con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Código del RETO

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const input3 = document.getElementById("base");

    const value1 = input1.value1;
    const value2 = input2.value2;
    const value3 = input3.value3;

    const perimetro = perometroTriangulo(value1, value2, value3);
    alert(perimetro);
}