let basediv = document.createElement('div');
basediv.classList.add('basediv');

let n = 16;


for (let i = 0; i < n; i++) {
    let rowdiv = document.createElement('div');
    rowdiv.classList.add('rowdiv');
    
    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        div.classList.add('block');
        rowdiv.appendChild(div);
    }

    basediv.appendChild(rowdiv);
}
document.body.appendChild(basediv);