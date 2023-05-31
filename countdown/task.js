const p = document.getElementById('timer')

let pId = setInterval (() => {
    p.textContent = Number(p.textContent) - 1
}, 1000)

setTimeout(() => { 
    clearInterval(pId); alert('Вы победили в конкурсе!'); 
}, Number(p.textContent) * 1000);