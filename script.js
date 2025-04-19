const form = document.getElementById('form-atividade');
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome');
    const inputTelefoneContato = document.getElementById('telefone');

    // Verifica se o nome já foi adicionado
    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato "${inputNomeContato.value}" já está na lista.`);
        return;
    }

    nomes.push(inputNomeContato.value);
    telefones.push(inputTelefoneContato.value);

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    // Limpa os campos
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
