/// <reference types="cypress"/>

import Pedido from "./classPedido"
const pedido = new Pedido

function pontoControle(idPedido, idPontoControle, idEntrega) {
    idEntrega = idEntrega - 1
    cy.fixture(idPedido + '.json').then((response) => {
        expect(response.pedido.entregas[`${idEntrega}`].trackings[0].pontoControle.idPontoControle).eq(idPontoControle)
    })
}

function formaPgto(idPedido, formaPgto, index) {
    cy.fixture(idPedido + '.json').then((response) => {
        expect(response.pedido.formasPagamento[`${index}`].nomeFormaPagamento).to.contains(formaPgto)
    })
}

function entrega(idPedido, idEntrega) {
    cy.fixture(idPedido + '.json').then((response) => {
        expect(JSON.stringify(response.pedido.entregas[0].idEntrega)).to.eq(idPedido + idEntrega)
    })
}

function tipoRestituicao(idPedido, tipoRestituicao) {
    cy.fixture(idPedido + '.json').then((response) => {
        expect(response.pedido.entregas[1].estornos[0].nomeTipoPagamento).to.contains(tipoRestituicao)
    })
}

function statusRestituicao(idPedido, statusRest) {
    cy.fixture(idPedido + '.json').then((response) => {
        expect(response.pedido.entregas[1].estornos[0].status.valorStatus).to.eq(statusRest)

    })
}



export {
    pontoControle,
    formaPgto,
    entrega,
    tipoRestituicao,
    statusRestituicao
}