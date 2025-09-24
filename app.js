//Array para armazenar a lista de amigos
let amigos = [];

//adiciona um novo amigo à lista
function adicionarAmigo() {
    //seleciona o campo de input e a lista de exibição
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim(); // .trim() remove espaços extras

    //validação: verificando se o campo não está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite o nome do amigo.');
        return; // para a execução da função
    }
    
    //validação: verifica se o nome já existe na lista (ignora maiúsculas/minúsculas)
    if (amigos.map(amigo => amigo.toLowerCase()).includes(nomeAmigo.toLowerCase())) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        amigoInput.value = ''; //limpa o campo
        amigoInput.focus(); //coloca o cursor de volta no campo
        return;
    }

    //Adiciona o nome ao array
    amigos.push(nomeAmigo);

    //atualiza a lista de amigos exibida na tela
    atualizarLista();

    //limpa o campo de input e o prepara para o próximo nome
    amigoInput.value = '';
    amigoInput.focus();
}

//sorteia um amigo secreto da lista
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    //validação: verifica se há pelo menos 2 amigos para o sorteio
    if (amigos.length < 2) {
        resultado.textContent = 'Adicione pelo menos 2 amigos para sortear!';
        return;
    }

    //sorteia um índice aleatório do array
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    //exibe o resultado do sorteio na tela
    resultado.textContent = `O amigo secreto é: ${amigoSorteado}!`;
}

//Atualiza a exibição da lista de amigos na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de recriar

    //Percorre o array de amigos e cria um item de lista (<li>) para cada um
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

