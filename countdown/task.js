const p = document.getElementById('timer')

setInterval(() =>{
    if (p.textContent >= 1){
        p.textContent = Number(p.textContent) - 1;
    } else if(p.textContent = 1){
        alert('Вы победили в конкурсе');
    }
}, 1000)