const inputs = document.querySelectorAll('.side-input');
const findAreaBtn = document.querySelector('#find-area-btn');
const outputEl = document.querySelector('#output');

function findArea(){
    const area = (0.5)*Number(inputs[0].value)*Number(inputs[1].value);
    outputEl.innerText = `Area is ${area}`;

}

findAreaBtn.addEventListener('click', findArea);