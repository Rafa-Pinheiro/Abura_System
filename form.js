window.onload = function() {
    const atribuir = document.getElementById('sendCall');

    atribuir.addEventListener("click", function atribuindo() {
        const log = document.getElementById('log');
        const num = document.getElementById('num');
        const bai = document.getElementById('bairro');
        const cit = document.getElementById('cidade');
        const cep = document.getElementById('cep');
        const est = document.getElementById('estado');
        const pai = document.getElementById('pais');
        let endereco ={
            logradouro: log.value,
            numero: num.value,
            bairro: bai.value,
            cidade:  cit.value,
            estado:  est.value,
            pais:  pai.value
        }
        console.log(endereco);

        function buscar() {
            localStorage.setItem('endereco',JSON.stringify(endereco)); // de Objeto para String
            window.open('teladomed3.html','_target');
        }
        buscar();
    });
};