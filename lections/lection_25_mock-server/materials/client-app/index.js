const PROTOCOL = 'http';
const HOST = 'localhost';
const PORT = 6000;
const MOCK_PATH = `${PROTOCOL}://${HOST}:${PORT}`;


window.addEventListener('load', () => {
    fetch(`${MOCK_PATH}/product/laptops`)
        .then(data => data.json())
        .then(renderLaptops);
})



function renderLaptops(laptops) {
    const list = laptops.data;

    document.querySelector('.laptop-container').innerHTML += `<ul>${ list.map(laptop => `<li>${laptop.brand} ${laptop.model}</li>`).join('') }</ul>`;
}