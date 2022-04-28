let bread = .2;
let saborPan = .4;
let cuidadoPan = .3;
let consistenciaPan = .3;

let calcularPan = () =>
{   
    let breadFlav = parseInt(document.getElementById('breadFlav').value);
    let breadCons = parseInt(document.getElementById('breadCons').value);
    let breadCare = parseInt(document.getElementById('breadCare').value);

    let a = breadFlav * saborPan;
    let b = breadCons * consistenciaPan;
    let c = breadCare * cuidadoPan;
    let x = (a+b+c) * bread;
    return x
}

let meat = .2;
let saborCarne = .5;
let consistenciaCarne = .5;

let calcularCarne = () =>
{
    let meatFlav = parseInt(document.getElementById('meatFlav').value);
    let meatCons = parseInt(document.getElementById('meatCons').value);
    let a = meatFlav * saborCarne;
    let b = meatCons * consistenciaCarne;
    let x = (a+b) * meat;
    return x
}

let condiments = .2;
let salsita = .3;
let quesos = .4;
let adiciones = .3;

let calcularCondimentos = () =>
{
    let sauces = parseInt(document.getElementById('sauces').value);
    let cheese = parseInt(document.getElementById('cheese').value);
    let aditions = parseInt(document.getElementById('aditions').value);
    let a = sauces * salsita;
    let b = cheese * quesos;
    let c = aditions * adiciones;
    let x = (a+b+c) * condiments;
    return x
}

let vegetables = .2;
let fescura = .5;
let disposicion = .5;

let calcularVegetales = () =>
{
    let vegFresh = parseInt(document.getElementById('vegFresh').value);
    let vegDispo = parseInt(document.getElementById('vegDispo').value);
    let a = vegFresh * fescura;
    let b = vegDispo * disposicion;
    let x = (a+b) * vegetables;
    return x
}

let fullFlavor = .2;

let calcularConjunto = ()=>
{
    let fullFlav = parseInt(document.getElementById('fullFlav').value);
    let x = fullFlav * fullFlavor;
    return x
}

let resultado = document.getElementById('resultado');

let imprimirResultado = (n) =>
{
    resultado.innerHTML = n;
}

let calcBtn = document.querySelector('.calc-btn');

let calcularTotal = () =>
{
    let a = calcularPan();
    let b = calcularCarne();
    let c = calcularCondimentos();
    let d = calcularVegetales();
    let e = calcularConjunto();
    return a + b + c + d + e
}

calcBtn.addEventListener('click', ()=>{
    let x = calcularTotal();
    console.log(x);
    imprimirResultado(x)
})