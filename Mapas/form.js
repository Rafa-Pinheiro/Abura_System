const log;
const num;
const bai;
const cit;
const cep;
const est;
const pai;

function atribuir() {
    alert("teste");
    log = document.getElementById('logradouro').value;
    num = toString(document.getElementById('num').value);
    bai = document.getElementById('bairro').value;
    cit = document.getElementById('cidade').value;
    cep = toString(document.getElementById('cep').value);
    est = document.getElementById('estado').value;
    pai = document.getElementById('pais').value;
    buscar();
};

const endereco = {
    this: logradouro = log,
    this: numero = num,
    this: bairro = bai,
    this: cidade = cit,
    this: cep = cep,
    this: estado = est,
    this: pais = pai,
}


function buscar() {
    window.open('index.html');
}