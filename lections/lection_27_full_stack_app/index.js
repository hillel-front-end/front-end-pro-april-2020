console.log('Lection_27');

const PROTOCOL = 'http';
const HOST = 'localhost';
const PORT = 6000;
const MOCK_PATH = `${PROTOCOL}://${HOST}:${PORT}`;
let index = 0;

// Initial phase - start
startup();
// Initial phase - end


function request({ path, spinner, target, method = "GET", body, headers }) {
    if (spinner && spinner.enabled) {
        createSpinner(target, spinner);
    }
    return fetch(MOCK_PATH + path, {
        method,
        body: JSON.stringify(body),
        headers
    }).then(resp => resp.json());
}

function startup() {
    const uniqueId = localStorage.uniqueId || undefined;
    request({ 
        path: '/init', 
        method: 'POST', 
        body: {
            uniqueId
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!localStorage.uniqueId) {
            localStorage.uniqueId = response.user.id
        }
        if (!response.user) { return; }
        if (response.user.viewed && response.user.viewed.length) {
            RenderProduct.renderViewed(document.querySelector('.viewed-list'), response.user.viewed);
        }
    });
}


function createSpinner(target, spinner) {
    let div = document.createElement('div');
    div.classList.add('spinner', 'show')
    div.dataset.id = `id-${index++}`;
    div.innerHTML = `<img src="${spinner.imgUrl}" />`;
    spinner.source = div.dataset.id;
    target.appendChild(div);
}

function userViewProduct(userId, viewedProductId) {
    request({ 
        path: '/view-product', 
        method: 'POST', 
        body: {
            userId,
            viewedProductId
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => {
        console.log('Status - View product', resp);
    })
}

class RenderProduct {
    static render({
        target = document.body, 
        source = [], 
        spinner = { enabled: false }
    }){
        if (spinner.enabled) {
            // spinner.source.classList.remove('show');
            document.querySelector(`[data-id="${spinner.source}"]`).classList.remove('show');
        }
        // target.innerHTML += source.map(item => RenderProduct.renderItem(item)).join('');
        source.forEach(item => {
            target.appendChild(RenderProduct.renderItem(item));
        });
    }

    static renderViewed(target = document.body, source) {
        target.innerHTML += `<ul>${source.map(item => `<li>${item}</li>`).join('')}</ul>`
    }

    static renderItem(good) {
        const title = good.name || '';
        const img = good.imgPath || '';

        const htmlItem = document.createElement('div');
        htmlItem.classList.add('good-item');
        htmlItem.innerHTML = `
            <div class="good-item__wrapper">
            <header class="good-item__title">${title}</header>
            <img src="${img}" alt="" class="good-item__image">
            <div class="good-item__price">${good.price || ''}$</div>
            </div>
            <button class="good-item__action" data-product-id="${good.id}" data-price="${good.price || 0}">Buy</button>
        `;

        htmlItem.addEventListener('click', () => {
            userViewProduct(localStorage.uniqueId, good.id);
        })


        return htmlItem;
    }
}


window.addEventListener('load', () => {
    const PRODUCTS = {
        lamp: {
            path: '/products/lamp',
            target: document.querySelector('.goods-container'),
            spinner: {
                enabled: true,
                imgUrl: 'https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif',
                source: ''
            }
        },
        keyboard: {
            path: '/products/keyboard',
            target: document.querySelector('.goods-container'),
            spinner: {
                enabled: true,
                imgUrl: 'https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif',
                source: ''
            }
        },
        laptop: {
            path: '/products/laptop',
            target: document.querySelector('.goods-container'),
            spinner: {
                enabled: true,
                imgUrl: 'https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif',
                source: ''
            }
        }
    };
    
    let productsAsync = [
        request(PRODUCTS.lamp),
        request(PRODUCTS.keyboard),
        request(PRODUCTS.laptop)
    ];
    
    Promise.all(productsAsync).then(([r1, r2, r3]) => {
            RenderProduct.render({
                target: PRODUCTS.lamp.target,
                source: r1.goods,
                spinner: PRODUCTS.lamp.spinner
            });
    
            RenderProduct.render({
                target: PRODUCTS.keyboard.target,
                source: r2.goods,
                spinner: PRODUCTS.keyboard.spinner
            });
    
            RenderProduct.render({
                target: PRODUCTS.laptop.target,
                source: r3.goods,
                spinner: PRODUCTS.laptop.spinner
            });
    });
})