const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const addEnt = document.querySelector('#addEntry');
let inputField = document.querySelector('#inputField');

inputField = 'Car Wash';

addEnt.addEventListener('click', function() {
    // create new div with id of entries
    const entries = document.createElement('div');
    entries.setAttribute('id', 'entries');

    // create new div with id of leftDiv
    const leftDiv = document.createElement('div');
    leftDiv.setAttribute('id', 'leftDiv');

    const p = document.createElement('p');
    p.innerText = inputField;
    leftDiv.append(p);

    // create new div with id of rightDiv
    const rightDiv = document.createElement('div');
    rightDiv.setAttribute('id', 'rightDiv');

    // create buttons
    const btn1 = document.createElement('button');
    btn1.innerHTML = 'Done';
    const btn2 = document.createElement('button');
    btn2.innerHTML = 'Delete';
    const btn3 = document.createElement('button');
    btn3.innerHTML = 'New';
    rightDiv.append(btn1, btn2, btn3);

    // rightDiv.innerHTML('Iam the right div');

    entries.append(leftDiv, rightDiv);

    // style entries
    entries.style.display = 'flex';
    entries.style.justifyContent = 'space-between';
    rightDiv.style.display = 'flex';
    // rightDiv.style.justifyContent = 'space-between';
    // rightDiv.style.backgroundColor = 'red';

    body.append(entries);
    // hide button
});