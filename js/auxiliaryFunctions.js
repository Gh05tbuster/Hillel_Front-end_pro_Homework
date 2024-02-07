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

function swapActiveLi(target) {
    if (currentItem) currentItem.classList.remove('active');
    currentItem = target;
    target.classList.add('active');
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
    currentItem = '';
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