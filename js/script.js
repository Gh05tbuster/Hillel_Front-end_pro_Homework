const sendBtn = document.querySelector('.btn.send');
sendBtn.addEventListener('click', checkHTTPS);

function checkHTTPS() {
    const address = document.getElementById('address').value.trim();
    if (address.includes('https://')) {
        console.log('Everything\'s fine');
        return;
    } else if (address.includes('http://')) {
        const addressArr = address.split('http://');
        addressArr[0] = 'https://';
        console.log(addressArr.join(''));
    } else {
        const addressArr = address.split();
        addressArr.unshift('https://');
        console.log(addressArr.join(''));
    }
}