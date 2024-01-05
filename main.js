const form = document.querySelector('#form-atividade');
const imgAprovado = '<img src="images/aprovado.png" />';
const imgReprovado = '<img src="images/reprovado.png" />';
const aprovado = `<span class="resultado resultado-ap">Aprovado</span>`;
const reprovado = `<span class="resultado resultado-rep">Reprovado</span>`;

const notaMinima = parseFloat( prompt('Insira a nota mínima: '));

const inputNomeAtividade = document.querySelector('#nome-atividade');
const inputNotaAtividade = document.querySelector('#nota-atividade');

let linhas = '';
var arrayNotas = [];
var arrayAtividades = [];
let somatoria = 0;  

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(arrayAtividades.includes(inputNomeAtividade.value)){
        return alert(`Essa disciplina : ${inputNomeAtividade.value} já foi incluída `);
    }
    else {
        adicionarLinha();
        atualizarLinha();
        calculaMedia();
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

});

function adicionarLinha() {
    arrayNotas.push(inputNotaAtividade.value);
    arrayAtividades.push(inputNomeAtividade.value);
    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value} </td>`;
    linha += `<td>${inputNotaAtividade.value} </td>`;
    linha += `<td>${inputNotaAtividade.value>=notaMinima ? imgAprovado:imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha; 
}

function atualizarLinha(){
    const corpoDaTabela = document.querySelector('tbody');
    corpoDaTabela.innerHTML = linhas; 
}
function calculaMedia() {
    somatoria+= parseFloat(inputNotaAtividade.value);

    let media = somatoria/arrayNotas.length;

    let linhaMedia = `<tr>`;
    linhaMedia += `<td>Nota Média</td>`;
    linhaMedia += `<td>${media.toFixed(2)}</td>`;
    linhaMedia+= `<td>${media >=notaMinima ? aprovado:reprovado}</td>`;
    linhaMedia += `</tr>`;


    const rodapeTabela = document.querySelector('tfoot');
    rodapeTabela.innerHTML = linhaMedia; 
}