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

function swapActiveItem(target, activeItem) {
    if (activeItem) activeItem.classList.remove('active');
    activeItem = target;
    target.classList.add('active');
}

function resetQuantity(productQuantity) {
    productQuantity.value = 1;
    setSum(1);
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
    hideElement, showElement, getBackImg, getParameterList, swapActiveItem, resetQuantity, setSum,
    validateName, validatePhone, validateEmail, validateCity, validateDepartment,
    showError, submitForm, formatDate, formatTime, toggleCategories, renderOrderDetails
};