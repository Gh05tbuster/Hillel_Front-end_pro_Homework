const h = 10;
const w = 10;
const div = document.querySelector('#tableBlock');
const table = document.createElement('table');
table.className = 'table';
table.setAttribute('cellspacing', 0)
div.append(table);

for (let i = 0; i < h; i++) {
    const tr = document.createElement('tr');
    table.append(tr);
    tr.className = 'tr';
    for (let j = 1; j <= w; j++) {
        const td = document.createElement('td');
        td.className = 'td';
        tr.append(td);
        td.innerHTML = i * w + j;
    }
}