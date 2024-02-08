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

function validateName() {
    const errorLabel = document.querySelector('.form .name + .error');
    const wrongChars = /[`а-я0-9!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~]/;

    if (nameField.value === '') {
        errorLabel.innerHTML = 'Enter your name!';
        showElement(errorLabel);
        return;
    }

    if (wrongChars.test(nameField.value)) {
        errorLabel.innerHTML = 'No special characters are allowed in the name!';
        showElement(errorLabel);
        return;
    }

    if (nameField.value.split(' ').length < 2) {
        errorLabel.innerHTML = 'Full name should contain at least 2 words!';
        showElement(errorLabel);
        return;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
}

function validatePhone() {
    const errorLabel = document.querySelector('.form .tel + .error');

    if (phoneField.value === '') {
        errorLabel.innerHTML = 'Enter your phone number!';
        showElement(errorLabel);
        return;
    }

    if (phoneField.value.length < 7) {
        errorLabel.innerHTML = 'Phone number must contain at least 7 numbers';
        showElement(errorLabel);
        return;
    }

    if (isNaN(phoneField.value)) {
        errorLabel.innerHTML = 'Phone number could contain only numbers (and "+" at the beginning)!';
        showElement(errorLabel);
        return;
    }

    const splittedPhone = phoneField.value.split('');
    if (splittedPhone[0] === '.' || splittedPhone[0] === '-') {
        errorLabel.innerHTML = 'Phone number could contain only numbers (and "+" at the beginning)!';
        showElement(errorLabel);
        return;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
}

function validateEmail() {
    const errorLabel = document.querySelector('.form .email + .error');
    const wrongChars = /[`а-яА-Я#()\[\]{};:"\\|,<>\/]/;

    if (emailField.value === '') {
        errorLabel.innerHTML = 'Enter your email!';
        showElement(errorLabel);
        return;
    }

    if (wrongChars.test(emailField.value)) {
        errorLabel.innerHTML = 'Some of these characters are not allowed in the email!';
        showElement(errorLabel);
        return;
    }

    const emailSplitted = emailField.value.split('@');

    if (emailSplitted.length < 2) {
        errorLabel.innerHTML = 'Email must contain "@" !';
        showElement(errorLabel);
        return;
    }

    if (emailSplitted.includes('')) {
        errorLabel.innerHTML = 'This is not an email!';
        showElement(errorLabel);
        return;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
}

function validateCity() {
    const errorLabel = document.querySelector('.form .city + .error');

    if (cityField.value === '') {
        errorLabel.innerHTML = 'Select your city!';
        showElement(errorLabel);
        return;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
}

function validateDepartment() {
    const errorLabel = document.querySelector('.form .department + .error');

    if (departmentField.value === '') {
        errorLabel.innerHTML = 'Select the Nova Post department!';
        showElement(errorLabel);
        return;
    }

    errorLabel.innerHTML = '';
    hideElement(errorLabel);
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

function hideElement(el) {
    el.classList.add('hidden');
}

function showElement(el) {
    el.classList.remove('hidden');
}