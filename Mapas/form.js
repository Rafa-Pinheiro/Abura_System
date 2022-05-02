window.onload = function() {
    const atribuir = document.getElementById('sendCall');

    atribuir.addEventListener("click", function atribuindo() {
        const log = document.getElementById('logradouro').value;
        const num = toString(document.getElementById('num').value);
        const bai = document.getElementById('bairro').value;
        const cit = document.getElementById('cidade').value;
        const cep = toString(document.getElementById('cep').value);
        const est = document.getElementById('estado').value;
        const pai = document.getElementById('pais').value;
        const endereco: () {
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
    });
};