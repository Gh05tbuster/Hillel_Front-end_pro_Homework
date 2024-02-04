const products = [
    {
        id: '0034d58b',
        name: 'Xiaomi Redmi Note 13',
        parameters: {
            screen: `6.67"`,
            RAM: '8 Gb',
            ROM: '256 Gb'
        },
        img: './img/Smartphones/XiaomiRN13_front.png',
        categories: 'Smartphones',
        price: 12999,
    },

    {
        id: '0147ac89',
        name: 'Poco X6',
        parameters: {
            screen: `6.67"`,
            RAM: '12 Gb',
            ROM: '256 Gb'
        },
        img: './img/Smartphones/PocoX6_front.png',
        categories: 'Smartphones',
        price: 12999,
    },

    {
        id: '000b543c',
        name: 'A4Tech X89',
        parameters: {
            size: `Big`,
            DPI: '1000-2400',
            buttons: '8'
        },
        img: './img/Peripherals/A4X7.png',
        categories: 'Peripherals',
        price: 649,
    },
    {
        id: '00c3f1b',
        name: 'Logitech G PRO X',
        parameters: {
            interface: `3.5mm (mini-Jack)`,
            impendance: '35 Ω',
            frequencies: '20Hz-20kHz'
        },
        img: './img/Peripherals/LogiGProX.png',
        categories: 'Peripherals',
        price: 5999,
    },
    {
        id: '0241ee02',
        name: 'Lenovo IdeaPad 3',
        parameters: {
            screen: `15.6"`,
            SSDSize: '512 Gb',
            RAM: '8 Gb'
        },
        img: './img/Laptops/IdeaPad3_front.png',
        categories: 'Laptops',
        price: 19499,
    },
    {
        id: '02d4f3ca',
        name: 'ASUS ASUSPRO',
        parameters: {
            screen: `11.6"`,
            SSDSize: '256 Gb',
            RAM: '8 Gb'
        },
        img: './img/Laptops/AsusPro_front.png',
        categories: 'Laptops',
        price: 9999,
    },
];

const prodCat = document.querySelector('.aside .productCategories');
const prodList = document.querySelector('.section.main .productList');
const prodDesc = document.querySelector('.section.side .productDescription');
let prevCat;

prodCat.addEventListener('click', showProducts);

function showProducts(event) {
    if (prevCat === event.target) return;
    prodList.innerHTML = ''; // comment this to spam cards
    prodDesc.innerHTML = '';
    swapCat(event.target);
    const filteredProducts = products.filter(product => product.categories === event.target.id);
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'productCard';
        card.id = product.id;
        card.innerHTML = `
        <img src="${product.img}" alt="">
        <h4>${product.name}</h4>
        <p class="price">${product.price} ₴</p>`;
        prodList.append(card);
    });
}

function swapCat(target) {
    if (prevCat) prevCat.classList.remove('active');
    prevCat = target;
    target.classList.add('active');
}

prodList.addEventListener('click', showDesc);

function showDesc(event) {
    const productCard = event.target.closest('.productCard');
    if (!productCard) return;
    prodDesc.innerHTML = '';
    const currentProduct = products.find(el => el.id === productCard.id);
    prodDesc.innerHTML = `
     <img src='${getBackImg(currentProduct.img)}' class='bigImg'>
     <h3 class='title h3'>${currentProduct.name}</h3>
     <ul class='params'>${getParameterList(currentProduct.parameters)}</ul>
     <p class='price'>${currentProduct.price} ₴</p>
    <button type='button' class='btn big main buyBtn' id='${productCard.id}'>Buy</button>`;
    const buyBtn = document.querySelector('.buyBtn');
    buyBtn.addEventListener('click', buyProduct);
}

function getBackImg(img) {
    const arr = img.split('_');
    const newArr = arr.map(el => (el === 'front.png' ? 'back.png' : el));
    return newArr.join('_');
}

function getParameterList(p) {
    let params = '';
    for (let [k, v] of Object.entries(p)) {
        params += `<li><p>${k}</p><p>${v}</p></li>`;
    }
    return params;
}

if (!true) localStorage.clear();    //? remove ! to clear the storage, then return it

function buyProduct(event) {
    let orders = JSON.parse(localStorage.getItem('orders'));
    if (!orders) orders = [];
    const price = products.filter(product => product.id === event.target.id)[0].price;
    //* const newPrice = applyDiscount();
    const currDate = new Date();
    const orderData = {
        date: formatDate(currDate),
        time: formatTime(currDate),
        productID: event.target.id,
        orderID: orders.length + 1,
        price: price,
        //* price: newPrice,
    }
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    const od = JSON.parse(localStorage.getItem('orders'));
    clearAll();
    prodList.innerHTML = '<h2>Thanks for the purchase!</h2>';
}

function clearAll() {
    prodDesc.innerHTML = '';
    prodList.innerHTML = '';
    const activeCat = document.querySelector('.aside .productCategories .active');
    if (activeCat) activeCat.classList.remove('active');
    prevCat = '';
}

function increaseOrdersNumber() {
    const ordersNumber = +localStorage.getItem('ordersNumber');
    ordersNumber ? localStorage.setItem('ordersNumber', ordersNumber + 1) : localStorage.setItem('ordersNumber', 1);
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).padStart(2, '0');

    return `${day}.${month}.${year}`;
}

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

const myOrders = document.getElementById('myOrders');
myOrders.addEventListener('click', showMyOrders);

function showMyOrders() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (!orders) return;
    clearAll();
    hideCategories();
    const aside = document.querySelector('.aside');

    const orderList = document.createElement('ul');
    orderList.id = 'orderList';

    orders.forEach(order => {
        orderList.innerHTML += `<li id='${order.orderID}'>
        <p class='date'>${order.date}</p>
        <p class='price'>${order.price} ₴</p>
        </li>`;
    });
    aside.append(orderList);

    orderList.addEventListener('click', showOrderDetails);
}

function hideCategories() {
    const categories = document.querySelector('.aside .productCategories');
    categories.style.display = 'none';
}

function showOrderDetails(event) {
    const selectedOrder = event.target.closest('li');
    if (!selectedOrder) return;
    const orders = JSON.parse(localStorage.getItem('orders'));
    const thisOrder = orders.filter(order => order.orderID === +selectedOrder.id)[0];
    const thisProduct = products.filter(product => product.id === thisOrder.productID)[0];
    prodList.innerHTML = `<div class='orderDetails'>
    <img src='${thisProduct.img}'>
    <h4>${thisProduct.name}</h4>
    <p class="price">${thisOrder.price} ₴</p>
    <p class='date'>${thisOrder.date}</p>
    <p class='time'>${thisOrder.time}</p>
    </div>`;
}

//todo: add effect for active order
//todo: make it prettier
//todo: try to reduce the number of lines