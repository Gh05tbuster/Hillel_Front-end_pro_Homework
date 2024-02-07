const prodCat = document.querySelector('.aside .productCategories');
const prodList = document.querySelector('.section.main .productList');
const prodDesc = document.querySelector('.section.side .productDescription');
const myOrders = document.getElementById('myOrders');
const popupWrapper = document.querySelector('.popupWrapper');
const popupForm = document.querySelector('.popupWrapper .form.popup');
const popupCloseBtn = document.querySelector('.popupWrapper .form .closeBtn');

let currentItem;

prodCat.addEventListener('click', showProducts);

function showProducts(event) {
    if (currentItem === event.target) return;
    prodList.innerHTML = ''; // comment this to spam cards
    prodDesc.innerHTML = '';
    swapActiveLi(event.target);
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
    const buyBtn = document.querySelector('.buyBtn');
    buyBtn.addEventListener('click', openOrderForm);
}

function openOrderForm(event) {
    showPopupWrapper();
    popupForm.classList.remove('hidden');
    // buyProduct(event.target);
}

popupWrapper.addEventListener('click', closeOrderForm);
popupCloseBtn.addEventListener('click', closeOrderForm);
//! if click happens on the line it won't work because the condition does not match

function closeOrderForm(event) {
    if (event.currentTarget == event.target) {
        popupForm.classList.add('hidden');
        hidePopupWrapper();
    }
}

function buyProduct(target) {
    let orders = JSON.parse(localStorage.getItem('orders'));
    if (!orders) orders = [];

    let currentOrderId = +localStorage.getItem('currentOrderID');
    if (!currentOrderId) {
        localStorage.setItem('currentOrderID', 1);
        currentOrderId = +localStorage.getItem('currentOrderID');
    }
    const price = products.filter(product => product.id === target.id)[0].price;
    //* const newPrice = applyDiscount();
    const currDate = new Date();
    const orderData = {
        date: formatDate(currDate),
        time: formatTime(currDate),
        productID: target.id,
        orderID: currentOrderId,
        price: price,
        //* price: newPrice,
    }
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('currentOrderID', +currentOrderId + 1);
    clearAll();
    prodList.innerHTML = '<h2>Thanks for the purchase!</h2>';
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
    currentItem = '';

    if (clicked) {
        toggleCategories(myOrdersStatus[+myOrdersActive]);
        myOrdersActive = !myOrdersActive;
        myOrders.innerText = myOrdersStatus[+myOrdersActive];
    }

    if (!myOrdersActive) return;

    const aside = document.querySelector('.aside');
    const orderList = document.createElement('ul');
    orderList.id = 'orderList';

    orders.forEach(order => {
        orderList.innerHTML += `<li id='${order.orderID}'>
        <p class='date txt'>${order.date}</p>
        <p class='price txt'>${order.price} ₴</p>
        </li>`;
    });
    aside.append(orderList);

    orderList.addEventListener('click', showOrderDetails);
}

function showOrderDetails(event) {
    const selectedOrder = event.target.closest('li');
    if (!selectedOrder) return;

    swapActiveLi(selectedOrder);
    const orders = JSON.parse(localStorage.getItem('orders'));
    const thisOrder = orders.filter(order => order.orderID === +selectedOrder.id)[0];
    const thisProduct = products.filter(product => product.id === thisOrder.productID)[0];

    prodList.innerHTML = `<div class='orderDetails'>
    <img src='${thisProduct.img}'>
    <div class='name-n-price'> 
        <h3>${thisProduct.name}</h3>
        <p class="price">${thisOrder.price} ₴</p>
    </div>
    <div class='date-n-time'>
        <p class='date'>${thisOrder.date}</p>
        <p class='time'>${thisOrder.time}</p>
    </div>
    <p class='del' id='del_${thisOrder.orderID}'>Delete</p>
    </div>`;

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