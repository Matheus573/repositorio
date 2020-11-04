/*fdpofjdp*/
document.querySelector('#botao').addEventListener('click', () =>{
    let nome;
    nome = document.getElementById('nome').value;
    let sobrenome=document.getElementById('sobrenome').value;
    document.write('o nome digitado é '+nome+' '+sobrenome);

})
document.querySelector('#botao').addEventListener('dblclick', () =>{
    let nome = document.getElementById('nome'),
     sobrenome = document.getElementById('sobrenome').value;
    
    alert('o nome digitado é '+nome+''+sobrenome);
})