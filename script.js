let arrcards = document.querySelectorAll('.card');
arrcards.forEach((el) => {
    el.style.backgroundColor = "#" + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    el.children[0].addEventListener('click', (cl) => {
        cl.target.parentNode.remove();
    })
});