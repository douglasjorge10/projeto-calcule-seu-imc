function escopo() {
    //form
    let peso = document.querySelector('.peso');
    let altura = document.querySelector('.altura');
    let btn = document.querySelector('.calc')

    //divs
    let result = document.querySelector('.result')
    let resp = document.querySelector('.resposta')

    // li's da tabela IMC
    let li1 = document.querySelector('.li1')
    let li2 = document.querySelector('.li2')
    let li3 = document.querySelector('.li3')
    let li4 = document.querySelector('.li4')
    let li5 = document.querySelector('.li5')
    let li6 = document.querySelector('.li6')


    // VALIDACAO DE CAMPOS

    peso.addEventListener("blur", function () {
        let regex = /^[0-9]{2}?/;
        // validando se é vazio
        if (peso.value === "") {
            peso.style.border = "solid 2px red",
                result.innerHTML = `<p>O campo peso deve ser preenchido! Preenchido apenas com numeros "Ex: 89"</p>`
        }
        if (peso.value !== "") {
            peso.style.border = "none";
            result.innerHTML = ``
        }
        // validando numeral regex
        if (regex.test(peso.value) === false) {
            peso.style.border = "solid 2px red",
                result.innerHTML = `<p>O campo peso deve ser preenchido! Preenchido apenas com numeros "Ex: 89"</p>`
        }
        if (regex.test(peso.value) !== false) {
            peso.style.border = "none",
                result.innerHTML = ``;
        }
        else {
            result.innerHTML = `<p>O campo peso deve ser preenchido! Preenchido apenas com numeros "Ex: 89"</p>`
        }
    })

    altura.addEventListener("blur", function () {
        let regex = /^[0-9]{1}\.[0-9]{2}?/;
        // validando se é vazio
        if (altura.value === "") {
            altura.style.border = "solid 2px red";
            result.innerHTML = `<p>Por favor verifique os campos em vermelho</p>`
        }
        else if (altura.value !== "") {
            altura.style.border = "none";
            result.innerHTML = ``
        }
        // validando numeral regex
        if (regex.test(altura.value) === false) {
            altura.style.border = "solid 2px red";
            result.innerHTML = `<p>O campo altura deve ser preenchido! Preenchido apenas com numeros no padrão altura em metros. O <b>"."</b> é obrigatorio! "Ex: 1.89"</p>`
        }
        else if (regex.test(altura.value) !== false) {
            altura.style.border = "none";
            result.innerHTML = ``;
        }
    })
}
escopo()

