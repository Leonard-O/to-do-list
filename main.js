const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const addEnt = document.querySelector('#addEntry');
const container = document.querySelector('.container');

h1.style.color = '#fff';

// addEnt.addEventListener('keyup', (e) => {
//     e.preventDefault();
//     if (e.keyCode === 13) {
//         console.log('hello world');
//     }
// });

addEnt.addEventListener('click', () => {
    fn1 = () => {
        let inputField = document.querySelector('#inputField').value;
    };

    if (inputField.value === '') {
        addEnt.removeEventListener;
    }

    // create new div with id of entries
    const entries = document.createElement('div');
    entries.setAttribute('id', 'entries');

    // create new div with id of leftDiv
    const leftDiv = document.createElement('div');
    leftDiv.setAttribute('id', 'leftDiv');

    const p = document.createElement('p');
    p.innerText = inputField.value;
    leftDiv.append(p);

    // create new div with id of rightDiv
    const rightDiv = document.createElement('div');
    rightDiv.setAttribute('id', 'rightDiv');

    // create buttons
    const btn1 = document.createElement('button');
    btn1.innerHTML = 'Done';
    btn1.style.padding = '0.2rem 0.5rem';
    btn1.style.backgroundColor = 'rgba(0, 18, 184, 0.333)';
    btn1.style.borderRadius = '0.5rem';
    btn1.style.border = 'none';
    btn1.style.cursor = 'pointer';
    btn1.style.marginRight = '0.5rem';

    const btn2 = document.createElement('button');
    btn2.innerHTML = 'Delete';
    btn2.style.padding = '0.2rem 0.5rem';
    btn2.style.backgroundColor = 'rgb(214, 81, 81)';
    btn2.style.borderRadius = '0.5rem';
    btn2.style.border = 'none';
    btn2.style.cursor = 'pointer';

    rightDiv.append(btn1, btn2);

    // rightDiv.innerHTML('Iam the right div');

    entries.append(leftDiv, rightDiv);

    inputField.value = '';

    // style entries
    entries.style.display = 'flex';
    entries.style.padding = '0.2rem';
    entries.style.justifyContent = 'space-between';
    entries.style.borderBottom = '0.1rem solid black';

    container.append(entries);

    btn1.addEventListener('click', () => {
        p.style.textDecorationLine = 'line-through';
        p.style.color = 'red';
    });

    btn2.addEventListener('click', () => {
        container.removeChild(entries);
    });
});

// const mediaQuery = window.matchMedia('(min-width: 768px)');
// if (mediaQuery.matches) {
//     alert('Media Query Matched!');
// }

// mediaQuery();

// Enter key