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
    const target = event.target;
    if (prevCat === target) return;
    prodList.innerHTML = ''; // comment this to spam cards
    swapCat(target);
    const filteredProducts = products.filter(product => product.categories === target.id);
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'productCard';
        card.id = product.id;
        card.innerHTML = `
        <img src="${product.img}" alt="">
        <h4>${product.name}</h4>
        <p class="price">${product.price}₴</p>`;
        prodList.append(card);
    });
}

function swapCat(target) {
    if (prevCat) prevCat.classList.remove('active');
    prevCat = target;
    target.classList.add('active');
}

// prodList.addEventListener('click', function (event) {
//     if (event.target.closest('.productCard')) showDesc(event);
// });

prodList.addEventListener('click', showDesc);

function showDesc(event) {
    const target = event.target;
    prodDesc.innerHTML = '';
    const currentProduct = products.find(el => el.id === target.id); //!target is usually not div
    prodDesc.innerHTML = `
     <img src='${getBackImg(currentProduct.img)}' class='bigImg'>
     <ul class='params'>${getParameterList(currentProduct.parameters)}</ul>
    <button type='button' class='btn big' id='buyBtn'>Buy</button>`;
    const buyBtn = document.getElementById('buyBtn');
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

function buyProduct() {
    // purchasing process
    clearAll();
}

function clearAll() {
    prodList.innerHTML = '<h2>Thanks for the purchase!</h2>';
    prodDesc.innerHTML = '';
    const activeCat = document.querySelector('.aside .productCategories .active');
    activeCat.classList.remove('active');
    prevCat = '';
}

