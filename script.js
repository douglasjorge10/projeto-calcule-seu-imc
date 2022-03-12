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
        // VALIDACAO DE OPERACOES

        btn.addEventListener('click', function (params) {
            params.preventDefault();
            let resultado = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value))
    
            //Validacao de resposta final
    
            if (resultado < 18.5) {
                li1.style.border = "solid 2px red";
                li1.style.padding = "10px";
                resp.innerHTML = `<p>Cuidado você esta muito abaixo do peso</p>`
                resp.style.color = "red"
            }
            else if (resultado >= 18.5 && resultado <= 24.9) {
                li2.style.border = "solid 2px blue";
                li2.style.padding = "10px";
                resp.innerHTML = `<p>Parabens! Você esta com o peso ideal, muito bom!</p>`
                resp.style.color = "blue"
            }
            else if (resultado >= 25 && resultado <= 29.9) {
                li3.style.border = "solid 2px red";
                li3.style.padding = "10px";
                resp.innerHTML = `<p>Cuidado você esta sobrepeso e o proximo grau é a obsidade</p>`
                resp.style.color = "red"
            }
            else if (resultado >= 30 && resultado <= 34.9) {
                li4.style.border = "solid 2px red";
                li4.style.padding = "10px";
                resp.innerHTML = `<p>Nada bom! você esta com obsidade de grau 1</p>`
                resp.style.color = "red"
            }
            else if (resultado >= 35 && resultado <= 39.9) {
                li5.style.border = "solid 2px red";
                li5.style.padding = "10px";
                resp.innerHTML = `<p>Nada bom! você esta com obsidade de grau 2 o proximo grau é a obesidade de grau 3 considerada obesidade mormida. É recomendado um nutricionista para uma dieta urgente!</p>`
                resp.style.color = "red"
            }
            else if (resultado >= 40) {
                li6.style.border = "solid 2px red";
                li6.style.padding = "10px";
                resp.innerHTML = `<p>Nada bom! você esta com obsidade de grau 3 considerada obesidade mormida. É recomendado um nutricionista para uma dieta urgente!</p>`
                resp.style.color = "red"
            }
            else {
                li6.style.border = "none";
                li6.style.padding = "none";
                resp.innerHTML = ``
                resp.style.color = "none"
            }
        })
}
escopo()

