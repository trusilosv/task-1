let arrcards = document.querySelectorAll('.card');

arrcards.forEach((el) => {
    el.style.backgroundColor = `#${(Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()}`;
    el.children[0].addEventListener('click', (cl) => {
        cl.target.parentNode.remove();
    })
});
const CardField = document.getElementById('cardfield');
const InputSmile = document.getElementById('checker');
const LableSmile = document.getElementById('labelSmile');
LableSmile.addEventListener('click', () => {
    if (InputSmile.checked) CardField.classList.add('grid')
    else CardField.classList.remove('grid');
});




// function rot(strng) {
//     return strng.split('').reverse().join('')
// }

// function selfieAndRot(strng) {
//     const dots = '.'.repeat(strng.split('\n')[0].length)
//     return strng.split('\n').join(dots + '\n') + dots + '\n' + dots + rot(strng).split('\n').join('\n' + dots)
// }

// function oper(fct, s) {
//     return fct(s);
// }
// alert(oper(selfieAndRot, 'rkKv\ncofM\nzXkh\nflCB'));