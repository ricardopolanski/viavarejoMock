/// <reference types="cypress"/>

module.exports = class Pedido {
    constructor(idPedido, idEntrega, idPontoControle, listaFormaPgto, nomeRestituicao, statusRest, indexPgto){
        this.idPedido = idPedido;
        this.idEntrega = idEntrega;
        this.idPontoControle = idPontoControle;
        this.listaFormaPgto = listaFormaPgto
        this.nomeRestituicao = nomeRestituicao;
        this.statusRest = statusRest;
        this.indexPgto = indexPgto
        
    }
}