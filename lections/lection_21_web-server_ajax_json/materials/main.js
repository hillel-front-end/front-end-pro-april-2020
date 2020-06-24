class Goods {
    request(path, options) {
        return fetch(path, options)
            .then(function(data){
                return data.json();
            })
    }

    static renderTotal(){
        var cart;
        if (localStorage.cart) {
            var decodedCart = JSON.parse(localStorage.cart);
            cart = decodedCart;
        } else {
            cart = {total: 0, quantity: 0}
        }

        var detailedTemplate = '';
        if (cart.info) {
            for(var product in cart.info){
                detailedTemplate += `<div>${cart.info[product].name} - Count: ${cart.info[product].quantity}, price per 1: ${cart.info[product].price}</div>`;
            }
        }
        
        
        document.querySelector('#total').innerHTML = cart.total;
        document.querySelector('#quantity').innerHTML = cart.quantity;
        document.querySelector('#detail').innerHTML = detailedTemplate;
    }
}

class Lamp extends Goods {
    constructor(target, path = 'lamp.json'){
        super();
        this.path = path;
        this.target = target || document.body; // hard code
        this._goods = [];
    }

    render() {
        var self = this;
        this.request(this.path)
            .then(function(data){
                self.renderToTarget(data.goods);
                self._goods = data.goods;
            })
    }

    getGoods() {
        return this._goods;
    }

    renderToTarget(list) {
        var self = this;
        this.target.innerHTML += list.map(function(item){ return self.renderItem(item); }).join('');
    }

    renderItem(good) {
        var title = good.name || '';
        var img = good.imgPath || '';
        return `
            <div class="good-item">
                <div class="good-item__wrapper">
                <header class="good-item__title">${title}</header>
                <img src="${img}" alt="" class="good-item__image">
                <div class="good-item__price">${good.price || ''}$</div>
                </div>
                <button class="good-item__action" data-product-id="${good.id}" data-price="${good.price || 0}">Buy</button>
            </div>
        `;
    }
    
}



window.onload = function() {
    Goods.renderTotal();

    var target = document.querySelector('#goods');
    var lamp = new Lamp(target);
    lamp.render();

    document.querySelector('#goods').addEventListener('click', function(event){
        if (event.target.className != 'good-item__action') {
            return;
        }
        var productId = event.target.dataset.productId;
        var product = lamp.getGoods().find(function(item){ return item.id == productId });

        var decodedCart = (localStorage.cart && JSON.parse(localStorage.cart)) || { total: 0, quantity: 0 };
        decodedCart.total += parseFloat(event.target.dataset.price);
        decodedCart.quantity++;
        decodedCart.avg = decodedCart.total/decodedCart.quantity; // example

        addProductDataToStorage(product, decodedCart);

        localStorage.cart = JSON.stringify(decodedCart);

        Goods.renderTotal();
    })
}

function addProductDataToStorage(product, storage) {
    storage.info = storage.info || {};

    if (storage.info[product.id]) {
        storage.info[product.id].quantity++;
    } else {
        storage.info[product.id] = {
            name: product.name,
            price: product.price,
            quantity: 1
        }
    }
}
