const prodCat = document.querySelector('.aside .productCategories');
const prodList = document.querySelector('.section.main .productList');
const prodDesc = document.querySelector('.section.side .productDescription');
const myOrders = document.getElementById('myOrders');
const popupWrapper = document.querySelector('.popupWrapper');
const popupForm = document.querySelector('.popupWrapper .form.popup');
const popupCloseBtn = document.querySelector('.popupWrapper .form .closeBtn');
const productQuantity = document.querySelector('.popupWrapper .form #quantity');

const nameField = document.querySelector('.form .name');
nameField.addEventListener('change', validateName);

const phoneField = document.querySelector('.form .tel');
phoneField.addEventListener('change', validatePhone);

const emailField = document.querySelector('.form .email');
emailField.addEventListener('change', validateEmail);

const cityField = document.querySelector('.form .city');
cityField.addEventListener('change', validateCity);

const departmentField = document.querySelector('.form .department');
departmentField.addEventListener('change', validateDepartment);

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

    resetQuantity();

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
    validated.push(validateName());
    validated.push(validatePhone());
    validated.push(validateEmail());
    validated.push(validateCity());
    validated.push(validateDepartment());

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
        customer_wishes: document.querySelector('#wishes').value,
    }
    orders.push(orderData);

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('currentOrderID', +currentOrderId + 1);
    submitForm(orderData);
    hideElement(popupWrapper);
    hideElement(popupForm);
    clearAll();

    const thisProduct = products.find(product => product.id === orderData.productID);
    renderOrderDetails(orderData, thisProduct, false);
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
        toggleCategories(myOrdersStatus[+myOrdersActive]);
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

    renderOrderDetails(thisOrder, thisProduct, true);
    const del = document.querySelector('.orderDetails .del');
    del.addEventListener('click', deleteOrder);
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
        toggleCategories('Categories');
        myOrders.innerText = 'My orders';
        clearAll();
    }
}
