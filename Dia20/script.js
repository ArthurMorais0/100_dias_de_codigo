paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '99.99' // Preço do produto
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pagamento concluído por ' + details.payer.name.given_name);
        });
    }
}).render('#paypal-button-container'); // Renderiza o botão do PayPal no div
