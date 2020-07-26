console.log('Practice');

const PROTOCOL = 'http';
const HOST = 'localhost';
const PORT = 6000;
const MOCK_PATH = `${PROTOCOL}://${HOST}:${PORT}`;


function request({ path, spinner, target }) {
    if (spinner && spinner.enabled) {
        createSpinner(target, spinner);
    }
    return fetch(MOCK_PATH + path).then(resp => resp.json());
}

let index = 0;
function createSpinner(target, spinner) {
    let div = document.createElement('div');
    div.classList.add('spinner', 'show')
    div.dataset.id = `id-${index++}`;
    div.innerHTML = `<img src="${spinner.imgUrl}" />`;
    spinner.source = div.dataset.id;
    target.appendChild(div);
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
        target.innerHTML += source.map(item => RenderProduct.renderItem(item)).join('');
    }

    static renderItem(good) {
        const title = good.name || '';
        const img = good.imgPath || '';
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




// request(PRODUCTS.lamp).then(resp => {
//     setTimeout(() => { // emulator
//         RenderProduct.render({
//             target: PRODUCTS.lamp.target,
//             source: resp.goods,
//             spinner: PRODUCTS.lamp.spinner
//         });
//     }, 2000)
// });

// request(PRODUCTS.keyboard).then(resp => {
//     setTimeout(() => { // emulator
//         RenderProduct.render({
//             target: PRODUCTS.keyboard.target,
//             source: resp.goods,
//             spinner: PRODUCTS.keyboard.spinner
//         });
//     }, 2000)
// });

// request(PRODUCTS.laptop).then(resp => {
//     setTimeout(() => { // emulator
//         RenderProduct.render({
//             target: PRODUCTS.laptop.target,
//             source: resp.goods,
//             spinner: PRODUCTS.laptop.spinner
//         });
//     }, 2000)
// });

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