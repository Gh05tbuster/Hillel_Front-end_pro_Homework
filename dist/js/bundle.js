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

const citiesAndDepartments = [
    {
        city: 'Kyiv',
        departments: [
            {
                number: 12,
                address: "Department address"
            },
            {
                number: 35,
                address: "Department address"
            },
            {
                number: 41,
                address: "Department address"
            },
            {
                number: 156,
                address: "Department address"
            },
            {
                number: 201,
                address: "Department address"
            },
            {
                number: 284,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Lviv',
        departments: [
            {
                number: 17,
                address: "Department address"
            },
            {
                number: 44,
                address: "Department address"
            },
            {
                number: 198,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Odesa',
        departments: [
            {
                number: 8,
                address: "Department address"
            },
            {
                number: 56,
                address: "Department address"
            },
            {
                number: 68,
                address: "Department address"
            },
            {
                number: 122,
                address: "Department address"
            },
            {
                number: 180,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Dnipro',
        departments: [
            {
                number: 23,
                address: "Department address"
            },
            {
                number: 72,
                address: "Department address"
            },
            {
                number: 131,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Kherson',
        departments: [
            {
                number: 19,
                address: "Department address"
            },
            {
                number: 52,
                address: "Department address"
            },
            {
                number: 81,
                address: "Department address"
            },
        ]
    },
    {
        city: 'Kharkiv',
        departments: [
            {
                number: 30,
                address: "Department address"
            },
            {
                number: 62,
                address: "Department address"
            },
            {
                number: 98,
                address: "Department address"
            },
            {
                number: 114,
                address: "Department address"
            },
        ]
    },
]

export { products, citiesAndDepartments };
function hideElement(el) {
    el.classList.add('hidden');
}

function showElement(el) {
    el.classList.remove('hidden');
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

function resetQuantity(productQuantity) {
    productQuantity.value = 1;
    setSum(1);
}

function resetTextInput(input) {
    input.value = '';
}

function setSum(n) {
    const currentItemPriceEl = document.querySelector('.section.side .productDescription .price');
    const currentItemPrice = currentItemPriceEl.textContent.split(' ')[0];
    const sum = document.querySelector('.quantityAndSum .price');
    sum.innerHTML = `Total: ${n * currentItemPrice} ₴`;
}

function validateName(name, selector) {
    const errorLabel = document.querySelector(selector);
    const wrongChars = /[`0-9!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~]/;

    if (name === '') {
        return showError(errorLabel, "Enter your name!");
    }

    if (wrongChars.test(name)) {
        return showError(errorLabel, 'No special characters are allowed in the name!');
    }

    const splittedName = name.trim().split(' ');
    if (splittedName.length < 2) {
        return showError(errorLabel, 'Full name should contain at least 2 words!');
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
}

function validatePhone(phone, selector) {
    const errorLabel = document.querySelector(selector);
    const minPhoneLength = 7;

    if (phone === '') {
        return showError(errorLabel, 'Enter your phone number!');
    }

    if (phone.length < minPhoneLength) {
        return showError(errorLabel, 'Phone number must contain at least 7 numbers');
    }

    if (isNaN(phone)) {
        return showError(errorLabel, 'Phone number could contain only numbers (and "+" at the beginning)!');
    }

    const splittedPhone = phone.split('');
    if (splittedPhone[0] === '.' || splittedPhone[0] === '-') {
        return showError(errorLabel, 'Phone number could contain only numbers (and "+" at the beginning)!');
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
}

function validateEmail(email, selector) {
    const errorLabel = document.querySelector(selector);
    const wrongChars = /[`а-яА-Я#()\[\]{};:"\\|,<>\/]/;

    if (email === '') {
        return showError(errorLabel, 'Enter your email!');
    }

    if (wrongChars.test(email)) {
        return showError(errorLabel, 'Some of these characters are not allowed in the email!');
    }

    const emailSplitted = email.split('@');
    if (emailSplitted.length < 2) {
        return showError(errorLabel, 'Email must contain "@" !');
    }

    if (emailSplitted.includes('')) {
        return showError(errorLabel, 'This is not an email!');
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
}

function validateCity(city, selector) {
    const errorLabel = document.querySelector(selector);

    if (city === '') {
        return showError(errorLabel, 'Select your city!');
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
}

function validateDepartment(department, selector) {
    const errorLabel = document.querySelector(selector);

    if (department === '') {
        return showError(errorLabel, 'Select the Nova Post department!');
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
}

function showError(label, error) {
    label.innerHTML = error;
    showElement(label);
    return 0;
}

async function submitForm(data) {
    // await fetch('', {
    //     method: 'POST',
    //     body: data,
    // })

    console.log(data);
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

function toggleCategories(action, selector) {
    const categories = document.querySelector(selector);
    if (action === 'My orders') {
        hideElement(categories);
    } else if (action === 'Categories') {
        showElement(categories);
    }
}

function renderOrderDetails(prodList, order, product, fullInfo) {
    if (fullInfo) {
        prodList.innerHTML = `<div class='orderDetails'>
        <img src='${product.img}'>
        <div class='name-n-price'> 
            <h3><span class='quantitySpan'>x${order.quantity}</span> ${product.name}</h3>
            <p class="price">${order.price * order.quantity} ₴</p>
        </div>
        <div class='date-n-time'>
            <p class='date'>${order.date}</p>
            <p class='time'>${order.time}</p>
        </div>
        <p class='del' id='del_${order.orderID}'>Delete</p>
        </div>`;
    } else {
        prodList.innerHTML = `<div class='orderDetails'>
        <h2>Thanks for the order!</h2>
        <img src='${product.img}'>
        <div class='name-n-price'> 
        <h3><span class='quantitySpan'>x${order.quantity}</span> ${product.name}</h3>
            <p class="price">${order.price * order.quantity} ₴</p>
        </div>
        <div class='date-n-time'>
            <p class='date'>${order.date}</p>
            <p class='time'>${order.time}</p>
        </div>
        </div>`;
    }
}

export {
    hideElement, showElement, getBackImg, getParameterList, resetQuantity, resetTextInput, setSum,
    validateName, validatePhone, validateEmail, validateCity, validateDepartment,
    showError, submitForm, formatDate, formatTime, toggleCategories, renderOrderDetails
};
import { products, citiesAndDepartments } from './data.js';
import {
    hideElement, showElement, getBackImg, getParameterList, resetQuantity, resetTextInput, setSum,
    validateName, validatePhone, validateEmail, validateCity, validateDepartment,
    showError, submitForm, formatDate, formatTime, toggleCategories, renderOrderDetails
} from './helpers.js';

const prodCat = document.querySelector('.aside .productCategories');
const prodList = document.querySelector('.section.main .productList');
const prodDesc = document.querySelector('.section.side .productDescription');
const myOrders = document.getElementById('myOrders');
const popupWrapper = document.querySelector('.popupWrapper');
const popupForm = document.querySelector('.popupWrapper .form.popup');
const popupCloseBtn = document.querySelector('.popupWrapper .form .closeBtn');
const productQuantity = document.querySelector('.popupWrapper .form #quantity');
const customerWishes = document.querySelector('#wishes');

const nameField = document.querySelector('.form .name');
nameField.addEventListener('change', () => validateName(nameField.value, '.form .name + .error'));

const phoneField = document.querySelector('.form .tel');
phoneField.addEventListener('change', () => validatePhone(phoneField.value, '.form .tel + .error'));

const emailField = document.querySelector('.form .email');
emailField.addEventListener('change', () => validateEmail(emailField.value, '.form .email + .error'));

const cityField = document.querySelector('.form .city');
cityField.addEventListener('change', () => validateCity(cityField.value, '.form .city + .error'));

const departmentField = document.querySelector('.form .department');
departmentField.addEventListener('change', () => validateDepartment(departmentField.value, '.form .department + .error'));

let activeItem;

prodCat.addEventListener('click', showProducts);

function showProducts(event) {
    if (activeItem === event.target) return;
    prodList.innerHTML = '';
    prodDesc.innerHTML = '';
    swapActiveItem(event.target);
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

    resetQuantity(productQuantity);
    resetTextInput(customerWishes);

    const buyBtn = document.querySelector('.buyBtn');
    buyBtn.addEventListener('click', openOrderForm);
}

function openOrderForm() {
    showElement(popupWrapper);
    showElement(popupForm);

    const selectCity = document.querySelector('.form .field .select.city');
    const selectDepartment = document.querySelector('.form .field .select.department');

    selectCity.innerHTML = '<option value="" selected disabled>Your City</option>';
    selectDepartment.innerHTML = '<option value="" selected disabled>Nova Post Department</option>';

    citiesAndDepartments.forEach(el => {
        selectCity.innerHTML += `
        <option value="${el.city}">${el.city}</option>`;
    })

    selectCity.addEventListener('change', () => {
        selectDepartment.innerHTML = '<option value="" selected disabled>Nova Post Department</option>';
        const selectedCity = citiesAndDepartments.filter(el => el.city === selectCity.value)[0];

        selectedCity.departments.forEach(dep => {
            selectDepartment.innerHTML += `
            <option value="${dep.number}">"${dep.number}" – ${dep.address}</option>`;
        })
    })

    const submit = document.querySelector('.form .submit');
    submit.addEventListener('click', validateForm);
}

productQuantity.addEventListener('change', checkQuantity);

function checkQuantity() {
    if (productQuantity.value < 1) {
        productQuantity.value = 1;
    } else if (productQuantity.value > 99) {
        productQuantity.value = 99;
    }
    productQuantity.value = Math.floor(productQuantity.value);

    setSum(productQuantity.value);
}

function validateForm(event) {
    event.preventDefault();
    const buyBtnId = document.querySelector('.buyBtn').id;
    let validated = [];
    validated.push(validateName(nameField.value, '.form .name + .error'));
    validated.push(validatePhone(phoneField.value, '.form .tel + .error'));
    validated.push(validateEmail(emailField.value, '.form .email + .error'));
    validated.push(validateCity(cityField.value, '.form .city + .error'));
    validated.push(validateDepartment(departmentField.value, '.form .department + .error'));

    if (validated.includes(0)) return;
    else buyProduct(buyBtnId);
}

popupWrapper.addEventListener('mousedown', closeOrderForm);
popupCloseBtn.addEventListener('click', closeOrderForm);

function closeOrderForm(event) {
    if (event.currentTarget === event.target) {
        hideElement(popupWrapper);
        hideElement(popupForm);
    }
}

function buyProduct(prodId) {
    let orders = JSON.parse(localStorage.getItem('orders'));
    if (!orders) orders = [];

    let currentOrderId = +localStorage.getItem('currentOrderID');
    if (!currentOrderId) {
        localStorage.setItem('currentOrderID', 1);
        currentOrderId = +localStorage.getItem('currentOrderID');
    }

    const price = products.find(product => product.id === prodId).price;
    //* const newPrice = applyDiscount();
    const currDate = new Date();
    const orderData = {
        date: formatDate(currDate),
        time: formatTime(currDate),
        productID: prodId,
        orderID: currentOrderId,
        quantity: +productQuantity.value,
        price: price,
        //* price: newPrice,
        customer_name: nameField.value,
        customer_phone: phoneField.value,
        customer_email: emailField.value,
        customer_city: cityField.value,
        customer_department: departmentField.value,
        customer_paymentMethod: document.querySelector('#payment input:checked').value,
        customer_wishes: customerWishes.value,
    }
    orders.push(orderData);

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('currentOrderID', +currentOrderId + 1);
    submitForm(orderData);
    hideElement(popupWrapper);
    hideElement(popupForm);
    clearAll();

    const thisProduct = products.find(product => product.id === orderData.productID);
    renderOrderDetails(prodList, orderData, thisProduct, false);
}

function clearAll() {
    activeItem = '';
    prodDesc.innerHTML = '';
    prodList.innerHTML = '';
    const listOfOrders = document.getElementById('orderList');
    if (listOfOrders) listOfOrders.remove();
    const activeCat = document.querySelector('.aside .productCategories .active');
    if (activeCat) activeCat.classList.remove('active');
}

myOrders.addEventListener('click', () => {
    const clicked = true;
    toggleMyOrders(clicked)
});
let myOrdersActive = false;
const myOrdersStatus = ['My orders', 'Categories'];

function toggleMyOrders(clicked) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (!orders) return;
    clearAll();
    activeItem = '';

    if (clicked) {
        toggleCategories(myOrdersStatus[+myOrdersActive], '.aside .productCategories');
        myOrdersActive = !myOrdersActive;
        myOrders.innerText = myOrdersStatus[+myOrdersActive];
    }

    if (!myOrdersActive) return;

    const aside = document.querySelector('.aside');
    const orderList = document.createElement('ul');
    orderList.id = 'orderList';

    orders.reverse().forEach(order => {
        orderList.innerHTML += `<li id='${order.orderID}'>
        <p class='date txt'>${order.date}</p>
        <p class='price txt'>${order.price} ₴</p>
        <span class='quantitySpan'>x${order.quantity}</span>
        </li>`;
    });
    aside.append(orderList);

    orderList.addEventListener('click', showOrderDetails);
}

function showOrderDetails(event) {
    const selectedOrder = event.target.closest('li');
    if (!selectedOrder) return;

    swapActiveItem(selectedOrder);
    const orders = JSON.parse(localStorage.getItem('orders'));
    const thisOrder = orders.find(order => order.orderID === +selectedOrder.id);
    const thisProduct = products.find(product => product.id === thisOrder.productID);

    renderOrderDetails(prodList, thisOrder, thisProduct, true);
    const del = document.querySelector('.orderDetails .del');
    del.addEventListener('click', deleteOrder);
}

function swapActiveItem(target) {
    if (activeItem) activeItem.classList.remove('active');
    activeItem = target;
    target.classList.add('active');
}

function deleteOrder(event) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    const orderId = event.target.id.split('_')[1];
    const newOrders = orders.filter(el => el.orderID !== +orderId);

    if (newOrders.length > 0) {
        localStorage.setItem('orders', JSON.stringify(newOrders));
        toggleMyOrders(false);
    } else {
        localStorage.removeItem('orders');
        toggleCategories('Categories', '.aside .productCategories');
        myOrders.innerText = 'My orders';
        clearAll();
    }
}
