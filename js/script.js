const userAgent = navigator.userAgent;
const plugins = navigator.plugins;
let browserName = 'unknown';
let fullVersion = 'unknown';

const browsers = [
    {
        designation: 'OPR',
        name: 'Opera'
    },
    {
        designation: 'Edg',
        name: 'Microsoft Edge'
    },
    {
        designation: 'MSIE',
        name: 'Microsoft Internet Explorer'
    },
    {
        designation: 'Chrome',
        name: 'Chrome'
    },
    {
        designation: 'Safari',
        name: 'Safari'
    },
    {
        designation: 'Firefox',
        name: 'Firefox'
    }
];

function getBrowserData(browsers) {
    const browserData = {};
    for (const browser of browsers) {
        let browserNameOffset;
        if ((browserNameOffset = userAgent.indexOf(browser.designation)) != -1) {
            browserData['Browser name'] = browser.name;
            const ver = userAgent.substring(browserNameOffset + browser.designation.length + 1);
            browserData['Browser version'] = ver.split(' ')[0];
            break;
        }
    }

    browserData['Plugins'] = [];
    for (const plugin of plugins) {
        browserData['Plugins'].push(` ${plugin.name}`);
    }

    return browserData;
}

function renderObject(object, target) {
    for (const [key, value] of Object.entries(object)) {
        target.innerHTML += `<p class='text'>${key}: ${value}</p>`
    }
}

const browserData = getBrowserData(browsers);
const browserInfo = document.querySelector('.browserInfo');
renderObject(browserData, browserInfo);

// -----------------------------------------

function selectCheckbox() {
    const search = location.search;
    if (!search || search.split('=').length < 2) return;
    const searchParams = search.split('=')[1].split(',');
    const checkboxes = document.querySelectorAll('#carList li input');
    checkboxes.forEach(cb => {
        if (searchParams.includes(cb.value)) {
            cb.checked = true;
        }
    });
}

selectCheckbox();

const carList = document.getElementById('carList');
carList.addEventListener('click', changeHref);

function changeHref(event) {
    const li = event.target.closest('li');
    if (!li) return;
    let someSelected = false;
    let search = ``;
    const checkboxes = document.querySelectorAll('#carList li input');

    checkboxes.forEach(cb => {
        if (cb.checked === true) {
            search += `${cb.value},`;
            someSelected = true;
        }
    });

    if (someSelected) {
        search = search.slice(0, -1);
        location.href = `${location.pathname}?cars=${search}`;
    } else {
        location.href = `${location.pathname}`;
    }
}