Feature: API Pedidos

    Scenario: Consulta Pedidos Mock
        Given que o pedido "165231277" tenha sido pago com "Cartão de Crédito"
        And que a entrega "01" esteja no Ponto de Controle "_TMA"
        Then será retornado as informações do pedido