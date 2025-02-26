// Criando uma lista vazia para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    // Pegando o campo de entrada do usuário
    input = document.getElementById("amigo");
    nome = input.value.trim(); // Removendo espaços extras
    
    // Verificando se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    // Adicionando o nome ao array de amigos
    amigos.push(nome);
    input.value = ""; // Limpando o campo de entrada
    atualizarLista(); // Atualizando a lista na tela
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpando a lista antes de atualizar
    
    // Percorrendo o array e adicionando cada amigo na lista
    for (let i = 0; i < amigos.length; i++) {
        li = document.createElement("li"); // Criando um item de lista
        li.textContent = amigos[i]; // Adicionando o nome ao item
        lista.appendChild(li); // Colocando o item dentro da lista
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verificando se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um nome.");
        return;
    }
    
    // Gerando um número aleatório dentro do tamanho da lista
    indiceSorteado = parseInt(Math.random() * amigos.length);
    amigoSorteado = amigos[indiceSorteado]; // Pegando o nome sorteado
    
    // Exibindo o nome sorteado na tela
    document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}

