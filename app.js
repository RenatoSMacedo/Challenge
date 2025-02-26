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


