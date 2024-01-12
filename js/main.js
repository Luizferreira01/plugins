$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });

    $('#cep').mask('00000-000',{
        placeholder: '_____-___'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true,
                endereço: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'por favor, insira o seu Nome',
            email: 'por favor, insira o seu E-mail',
            telefone: 'por favor, insira o seu Telefone',
            cpf: 'por favor, insira o seu CPF',
            endereço: 'por favor, insira o seu Endereço',
            cep: 'por favor, insira o seu CEP',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento,validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})