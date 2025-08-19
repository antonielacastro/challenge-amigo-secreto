let listaDeamigos = [];  
let lista = document.getElementById('listaAmigos');  
let inputNomeInserido = document.getElementById('amigo');  
let resultado = document.getElementById('resultado');  
let contador = 1;
let buttonSortear = document.querySelector('.button-draw');  


function adicionarAmigo() {
    let nomeAmigo = inputNomeInserido.value.trim();  

    
    if (nomeAmigo === '') {
        alert('Informe o nome do amigo.');
        return;
    }

    
    if (listaDeamigos.some(amigo => amigo.nome === nomeAmigo)) {
        alert('Amigo já adicionado.');
        return;
    }

    
    listaDeamigos.push({ numero: contador, nome: nomeAmigo });
    contador++;  
    atualizarLista();  
    inputNomeInserido.value = '';  
    inputNomeInserido.focus();  

    
    if (listaDeamigos.length > 0) {
        buttonSortear.disabled = false;
    }
}


function atualizarLista() {
    lista.innerHTML = '';  

    
    listaDeamigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = `${amigo.numero}. ${amigo.nome}`;
        lista.appendChild(item);  
    });
}


function sortearAmigo() {
    
    if (listaDeamigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    
    let amigoSorteado = listaDeamigos[Math.floor(Math.random() * listaDeamigos.length)];

    
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado.numero}. ${amigoSorteado.nome}</strong></li>`;

    
    listaDeamigos = [];
    contador = 1;  
    atualizarLista();  

    
    buttonSortear.disabled = true;
}


function limparLista() {
    listaDeamigos = [];  
    contador = 1;  
    atualizarLista();  
    resultado.innerHTML = '';
    buttonSortear.disabled = true;
}


