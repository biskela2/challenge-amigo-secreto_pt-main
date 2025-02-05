let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        document.getElementById('amigo').value = '';
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += '<li>' + amigos[i] + '</li>';
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = 'Amigo sorteado: ' + amigoSorteado;
    }
}

