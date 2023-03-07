export default function CPFValido(campo) {
    const cpf = campo.value.replace(/\.|-/g, '');
    if (validaNumerosRepetidos(cpf) || primeiroDigito(cpf) || segundoDigito(cpf))
        return true;
    else
        return false;
}
function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];
    return numerosRepetidos.includes(cpf);
}
function primeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;
    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11)
        soma = 0;
    return soma != cpf[9];
}
function segundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;
    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11)
        soma = 0;
    return soma != cpf[10];
}
