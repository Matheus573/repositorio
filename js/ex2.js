document.querySelector('#button').addEventListener('click', () => {
    let n1,n2,total;
    n1 = parseInt (document.getElementById('n1').value);
    n2 = parseInt (document.getElementById('n2').value);
    total = n1+n2;
    alert('resultado: ' +total);
})