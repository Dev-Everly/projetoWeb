

let amigo = [];  
let sorteio = "";

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();
    
    if (nomeAmigo) {
  
        amigo.push(nomeAmigo);
        
       
        const novoItem = document.createElement('li');
        novoItem.textContent = nomeAmigo;
        const lista = document.getElementById('listaAmigos');
        lista.appendChild(novoItem);

     
        input.value = '';

      
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>${nomeAmigo} foi adicionado à lista!</li>`;
    } else {
  
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>Por favor, digite um nome válido.</li>`;
    }
}

function sortearAmigo() {
 
    if (amigo.length === 0) {
        alert("Adicione um amigo");
        return;
    }

    
    sorteio = amigo[Math.floor(Math.random() * amigo.length)];
    
    
    const sorteando = document.getElementById("resultado");
    sorteando.innerHTML = `O seu amigo secreto é ${sorteio}`;
}
