const Order = require('../models/Order');

module.exports = {
    async store(request, response) {
        const test = request.body;
        const { lista, end, obs, data, dataEntrega} = test
        const id = Math.random();

        let pedido = await Order.findOne({data});
    
        if(!pedido) {
            pedido = await Order.create({
                id,
                lista,
                end,
                obs,
                data,
                dataEntrega,
            })
            console.log("Cadastrado")
        }
       
        return response.json(pedido);
    }
}