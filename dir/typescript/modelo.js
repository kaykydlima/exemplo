import { v4 as uuidv4 } from 'uuid';
const data = new Date().toLocaleString().split(',')[0].split('/').reverse().join('-');
export class Categoria {
    _nome;
    _id;
    _status;
    _data;
    constructor(_nome, _id = uuidv4(), _status, _data = data) {
        this._nome = _nome;
        this._id = _id;
        this._status = _status;
        this._data = _data;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get status() {
        return this._status;
    }
    get data() {
        return this._data;
    }
}
/*
export const criaProduto = (nome, descricao, preco, url, quantidade, categoria) => {
    return{
        id: uuidv4(),
        nome,
        descricao,
        preco,
        quantidade,
        url,
        categoria,
        criacao: data
    }
}

export const criaCliente = (nome, sobrenome, cpf, telefone, endereco) => {
    return{
        id: uuidv4(),
        nome,
        sobrenome,
        cpf,
        telefone,
        endereco
    }
}


 */ 
