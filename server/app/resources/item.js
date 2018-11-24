class Item {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.price = {
            currency: data.currency_id,
            amount: data.price,
            decimals: this.getDecimal(data.price),
        };
        this.picture = data.thumbnail;
        this.condition = data.condition;
        this.free_shipping = data.shipping.free_shipping;
        this.sold_quantity = data.sold_quantity || 0;
        this.decription = data.description || '';
    }

    getDecimal(amount) {
        return parseInt(amount.toFixed(2).split('.').pop(), 10);
    }
}

module.exports = Item;
