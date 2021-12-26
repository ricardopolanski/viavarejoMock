/* global Given, Then, When */

import * as funcPedidos from "../requests/functionPedido"

const Pedido = require("../requests/classPedido")
const pedido = new Pedido


Given(/^que o pedido "([^"]*)" tenha sido pago com "([^"]*)"$/, (idPedido, formaPgto) => {
	pedido.idPedido = idPedido
	pedido.listaFormaPgto = [formaPgto]
	pedido.indexPgto = 0
	while (pedido.indexPgto < 1){
		funcPedidos.formaPgto(pedido.idPedido, pedido.listaFormaPgto[pedido.indexPgto], pedido.indexPgto)
		pedido.indexPgto++
	}
});

And(/^o pedido tenha sido pago com "([^"]*)" e "([^"]*)"$/, (formaPgto1, formaPgto2) => {
	pedido.indexPgto = 0
	pedido.listaFormaPgto = [formaPgto1, formaPgto2]
	while (pedido.indexPgto < 2){
		funcPedidos.formaPgto(pedido.idPedido, pedido.listaFormaPgto[pedido.indexPgto], pedido.indexPgto)
		pedido.indexPgto++
	}
});

Then(/^que a entrega "([^"]*)" esteja no Ponto de Controle "([^"]*)"$/, (idEntrega, idPontoControle) => {
	pedido.idEntrega = idEntrega
	pedido.idPontoControle = idPontoControle

	funcPedidos.entrega(pedido.idPedido, pedido.idEntrega)
	funcPedidos.pontoControle(pedido.idPedido, pedido.idPontoControle, pedido.idEntrega)
});


Then(/^será retornado as informações do pedido$/, () => {

});



Given(/^que o operador crie um protocolo novo com a categoria "([^"]*)" para o pedido "([^"]*)"$/, (idCategoria, idPedido) => {
	pedido.idPedido = idPedido
	pedido.idCategoria = idCategoria
});

Then(/^o entrega "([^"]*)" está com restituição NULA, forma de restituição = Vale, forma de pagamento = "([^"]*)"$/, (idEntrega, formaPgto) => {
	pedido.idEntrega = idEntrega
	pedido.formaPgto = formaPgto
	pedido.idPontoControle = '_TMA'
	pedido.nomeRestituicao = 'Vale'
	if (pedido.idPedido == 254925292) {
		pedido.statusRest = null
	} else {
		pedido.statusRest = 'Aberto'
	}

	funcPedidos.pontoControle(pedido.idPedido, pedido.idPontoControle, pedido.idEntrega)
	funcPedidos.formaPgto(pedido.idPedido, pedido.formaPgto, idEntrega)
	funcPedidos.tipoRestituicao(pedido.idPedido, pedido.nomeRestituicao)
	funcPedidos.statusRestituicao(pedido.idPedido, pedido.statusRest)
});

Then(/^o protocolo deve encontrar o ID "([^"]*)"$/, (args1) => {

});




And(/^o status da entrega "([^"]*)" seja "([^"]*)" e ponto de controle "([^"]*)"$/, (idEntrega, status, idPontoControle) => {
	pedido.idEntrega = idEntrega
	pedido.idPontoControle = idPontoControle
	pedido.status = status
	funcPedidos.pontoControle(pedido.idPedido, pedido.idPontoControle, pedido.idEntrega)

});