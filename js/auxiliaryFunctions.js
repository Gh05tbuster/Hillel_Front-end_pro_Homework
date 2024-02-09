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

function swapActiveItem(target) {
    if (activeItem) activeItem.classList.remove('active');
    activeItem = target;
    target.classList.add('active');
}

function resetQuantity() {
    productQuantity.value = 1;
    setSum(1);
}

function setSum(n) {
    const currentItemPriceEl = document.querySelector('.section.side .productDescription .price');
    const currentItemPrice = currentItemPriceEl.textContent.split(' ')[0];
    const sum = document.querySelector('.quantityAndSum .price');
    sum.innerHTML = `Total: ${n * currentItemPrice} ₴`;
}

function validateName() {
    const errorLabel = document.querySelector('.form .name + .error');
    const wrongChars = /[`0-9!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~]/;

    if (nameField.value === '') {
        errorLabel.innerHTML = 'Enter your name!';
        showElement(errorLabel);
        return 0;
    }

    if (wrongChars.test(nameField.value)) {
        errorLabel.innerHTML = 'No special characters are allowed in the name!';
        showElement(errorLabel);
        return 0;
    }

    if (nameField.value.split(' ').length < 2) {
        errorLabel.innerHTML = 'Full name should contain at least 2 words!';
        showElement(errorLabel);
        return 0;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
}

function validatePhone() {
    const errorLabel = document.querySelector('.form .tel + .error');

    if (phoneField.value === '') {
        errorLabel.innerHTML = 'Enter your phone number!';
        showElement(errorLabel);
        return 0;
    }

    if (phoneField.value.length < 7) {
        errorLabel.innerHTML = 'Phone number must contain at least 7 numbers';
        showElement(errorLabel);
        return 0;
    }

    if (isNaN(phoneField.value)) {
        errorLabel.innerHTML = 'Phone number could contain only numbers (and "+" at the beginning)!';
        showElement(errorLabel);
        return 0;
    }

    const splittedPhone = phoneField.value.split('');
    if (splittedPhone[0] === '.' || splittedPhone[0] === '-') {
        errorLabel.innerHTML = 'Phone number could contain only numbers (and "+" at the beginning)!';
        showElement(errorLabel);
        return 0;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
}

function validateEmail() {
    const errorLabel = document.querySelector('.form .email + .error');
    const wrongChars = /[`а-яА-Я#()\[\]{};:"\\|,<>\/]/;

    if (emailField.value === '') {
        errorLabel.innerHTML = 'Enter your email!';
        showElement(errorLabel);
        return 0;
    }

    if (wrongChars.test(emailField.value)) {
        errorLabel.innerHTML = 'Some of these characters are not allowed in the email!';
        showElement(errorLabel);
        return 0;
    }

    const emailSplitted = emailField.value.split('@');

    if (emailSplitted.length < 2) {
        errorLabel.innerHTML = 'Email must contain "@" !';
        showElement(errorLabel);
        return 0;
    }

    if (emailSplitted.includes('')) {
        errorLabel.innerHTML = 'This is not an email!';
        showElement(errorLabel);
        return 0;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
}

function validateCity() {
    const errorLabel = document.querySelector('.form .city + .error');

    if (cityField.value === '') {
        errorLabel.innerHTML = 'Select your city!';
        showElement(errorLabel);
        return 0;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
}

function validateDepartment() {
    const errorLabel = document.querySelector('.form .department + .error');

    if (departmentField.value === '') {
        errorLabel.innerHTML = 'Select the Nova Post department!';
        showElement(errorLabel);
        return 0;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
    return 1;
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

function clearAll() {
    activeItem = '';
    prodDesc.innerHTML = '';
    prodList.innerHTML = '';
    const listOfOrders = document.getElementById('orderList');
    if (listOfOrders) listOfOrders.remove();
    const activeCat = document.querySelector('.aside .productCategories .active');
    if (activeCat) activeCat.classList.remove('active');
}

function toggleCategories(action) {
    const categories = document.querySelector('.aside .productCategories');
    if (action === 'My orders') {
        categories.style.display = 'none';
    } else if (action === 'Categories') {
        categories.style.display = 'initial';
    }
}

function renderOrderDetails(order, product, fullInfo) {
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
        <h2>Thanks for the purchase!</h2>
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
