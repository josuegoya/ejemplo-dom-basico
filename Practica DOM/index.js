const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btn-calcular');
const result = document.querySelector('#resultado');
const form = document.querySelector('#form');

// const btnOnClick = () => {
//     let res = parseInt(input1.value) + parseInt(input2.value);

//     result.innerText = 'Resultado: ' + res;
//     console.log(res);
// }

// btnCalcular.addEventListener('click', btnOnClick);

form.addEventListener('submit', sumarValues);

function sumarValues(){
    let res = parseInt(input1.value) + parseInt(input2.value);

    result.innerHTML = 'Resultado: ' + res;
    console.log(res);
}

