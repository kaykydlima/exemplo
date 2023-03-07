// import { v4 as uuidv4 } from 'uuid';

const data = new Date().toLocaleString().split(',')[0].split('/').reverse().join('-')

export class Categoria {

    private _id: string
    private _status: string
    private _data: string 

    constructor(private _nome: string){
        this._id = '88888'
        this._status = "ATIVO"
        this._data = data
    }

    get id() {
        return this._id
    }

    get nome() {
        return this._nome
    }

    get status() {
        return this._status
    }

    get data() {
        return this._data
    }
}

export class Produto {

    constructor(private _nome: string, private _descricao: string, private _preco: string, private _url:string, private _quantidade: string, private _categoria: string) {}

    get nome() {
        return this._nome
    }

    get quantidade() {
        return this._quantidade
    }

    get descricao() {
        return this._descricao
    }

    get preco() {
        return this._preco
    }

    get url() {
        return this._url
    }

    get categoria() {
        return this._categoria
    }
}

export class Cliente {
    
    constructor(private _nome: string, private _sobrenome: string, private _cpf:string, private _telefone: string, private _endereco: Object) {}

    get nome() {
        return this._nome
    }

    get sobrenome() {
        return this._sobrenome
    }

    get cpf() {
        return this._cpf
    }

    get telefone() {
        return this._telefone
    }

    get endereco() {
        return this._endereco
    }

}

/* 
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