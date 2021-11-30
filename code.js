let btn = document.querySelector('#changesize');
btn.addEventListener('click',()=> {
    let usrsize;
    do{
        usrsize = prompt('Enter desired size | max 100');
    }while(usrsize>100 && !Number.isInteger(usrsize))
    creategrid(usrsize);
});

function creategrid(size){
    let basedivdel = document.querySelector('#basediv');
    if(basedivdel)
        basedivdel.remove();
    let basediv = document.createElement('div');
    basediv.classList.add('basediv');
    basediv.id = 'basediv';

    for (let i = 0; i < size; i++) {
        let rowdiv = document.createElement('div');
        rowdiv.classList.add('rowdiv');

        for (let i = 0; i < size; i++) {
            let div = document.createElement('div');
            
            div.classList.add('block');
            div.style.background = 'rgb(255,255,255)';
            div.addEventListener('mouseover', ()=>{
                let col = div.style.background.slice(
                    div.style.background.indexOf('(')+1,
                    div.style.background.indexOf(',')
                    );

                if(col>=51){
                    col-=51;
                    div.style.background = `rgb(${col},${col},${col})`;
                }
            });
            rowdiv.appendChild(div);
        }
        basediv.appendChild(rowdiv);
    }
    document.body.appendChild(basediv);
}

creategrid(16);

