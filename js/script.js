const btnEx01 = document.querySelector("#ex1")
const btnEx02 = document.querySelector("#ex2")
const btnEx03 = document.querySelector("#ex3")
const btnEx04 = document.querySelector("#ex4")
const btnEx05 = document.querySelector("#ex5")
const btnEx06 = document.querySelector("#ex6")
const btnEx07 = document.querySelector("#ex7")
const btnEx08 = document.querySelector("#ex8")
const btnEx09 = document.querySelector("#ex9")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")
const btnEx16 = document.querySelector("#ex16")
const btnEx17 = document.querySelector("#ex17")
const btnEx18 = document.querySelector("#ex18")
const btnEx19 = document.querySelector("#ex19")

function ex1() {
    let nome = prompt("Digite seu Nome : ")
    alert("Seja Bem vindo : " + nome)
}

btnEx01.addEventListener('click', ex1)

function ex2() {
    let numero = parseInt(prompt("Digite um Número : "))
    let numero02 = parseInt(prompt("Digite outro Número : "))
    let soma = numero + numero02
    alert("O Resultado da soma é = " + soma)
}

btnEx02.addEventListener('click', ex2)

function ex3() {
    let numero = parseInt(prompt("Digite um Número : "))
    let numero02 = parseInt(prompt("Digite outro Número : "))
    let subtracao = numero - numero02
    alert("O Resultado da Subtração é = " + subtracao)
}

btnEx03.addEventListener('click', ex3)

function ex4() {
    let numero = parseInt(prompt("Digite um Número : "))
    let numero02 = parseInt(prompt("Digite outro Número : "))
    let multiplicacao = numero * numero02
    alert("O Resultadado da Multiplicação é : " + multiplicacao)

}

btnEx04.addEventListener('click', ex4)

function ex5() {
    let numero = parseFloat(prompt("Digite um Número : "))
    let numero02 = parseFloat(prompt("Digite outro Número : "))
    let divisao = numero / numero02
    alert("O Resultado da Divisão é : " + divisao)
}

btnEx05.addEventListener('click', ex5)

function ex6() {
    let numero = parseInt(prompt("Digite um Número : "))
    numero++;
    let numero02 = numero
    alert("Resultado " + numero02)
}

btnEx06.addEventListener('click', ex6)

function ex7() {
    let numero = parseInt(prompt("Digite um Número : "))
    numero--;
    let numero02 = numero
    alert("Resultado " + numero02)
}

btnEx07.addEventListener('click', ex7)

function ex8() {
    let base = parseInt(prompt("Digite a Base do Retangulo : "))
    let altura = parseInt(prompt("Digite a Altura do Retangulo : "))
    let area = base * altura
    alert("A Area de um Retangulo é : " + area)
}

btnEx08.addEventListener('click', ex8)

function ex9() {
    let base = parseInt(prompt("Digite a Base do Triangulo : "))
    let altura = parseInt(prompt("Digite a Altura do Triangulo : "))
    let area = base * altura / 2
    alert("A Area do Triangulo é : " + area)
}

btnEx09.addEventListener('click', ex9)

function ex10() {
    let lado = parseInt(prompt("Digite o Lado do Quadrado : "))
    let area = lado * lado
    alert("A Area do Quadrado é : " + area)
}

btnEx10.addEventListener('click', ex10)

function ex11() {
    let raio = parseFloat(prompt("Digite o raio do circulo : "))
    let pi = Math.PI
    let area = raio * raio / pi
    alert("A area do circulo é : " + area)
}

btnEx11.addEventListener('click', ex11)

function ex12() {
    let nota = parseFloat(prompt("Digite a sua nota : "))
    let nota02 = parseFloat(prompt("Digite a sua nota : "))
    let nota03 = parseFloat(prompt("Digite a sua nota : "))
    let media = (nota + nota02 + nota03) / 3
    alert("Sua média é : " + media)
}

btnEx12.addEventListener('click', ex12)

function ex13() {
    let numero = parseInt(prompt("Digite um número que irei lhe mostrar o dobro : "))
    let dobro = numero * 2
    alert("O dobro de seu valor é : " + dobro)
}

btnEx13.addEventListener('click', ex13)

function ex14() {
    let numero = parseInt(prompt("Digite um número: "))
    let parteInteira = parseInt(numero);
    alert("A parte inteira do número é: " + numero + " é " + parteInteira)
}

btnEx14.addEventListener('click', ex14)

function ex15() {
    let peso = parseFloat(prompt("Digite seu peso: "))
    let altura = parseFloat(prompt("Digite sua altura: "))
    let imc = peso / (altura * altura)
    alert("O seu IMC é: " + imc);
}

btnEx15.addEventListener('click', ex15)

function ex16() {
    let produto = parseFloat(prompt("Digite o nome do produto: "))
    let preço = parseFloat(prompt("Digite o preço do produto: "))
    let desconto = (preço * 0.12)
    alert("O valor do produto com desconto é: " + desconto)
}

btnEx16.addEventListener('click', ex16)

function ex17() {
    var nome01 = prompt("Digite o nome da primeira pessoa: ")
    let idade01 = parseInt(prompt("Digite a idade da primeira pessoa: "))
    var nome02 = prompt("Digite o nome da segunda pessoa: ")
    let idade02 = parseInt(prompt("Digite a idade da segunda pessoa: "))
    var nome03 = prompt("Digite o nome da terceira pessoa: ")
    let idade03 = parseInt(prompt("Digite a idade da terceira pessoa: "))
    media = (idade01 + idade02 + idade03) / 3
    alert("A media das idades é " + media)
}

btnEx17.addEventListener('click', ex17)

function ex18() {
    let metro = parseFloat(prompt("Digite o valor em metros: "))
    let centimentos = metro * 100
    let milimetros = metro * 1000
    alert("metros é igual a: " + centimentos + " centimentos " + " e " + milimetros + "milimetros")
}

btnEx18.addEventListener('click', ex18)

function ex19() {
    let base = parseFloat(prompt("Digite a base do triângulo: "))
    let altura = parseFloat(prompt("Digite a altura do triângulo: "))
    let hipotenusa = (base * base) + (altura * altura)
    alert("O valor da hipotenusa é: " + hipotenusa)
}


btnEx19.addEventListener('click', ex19)
