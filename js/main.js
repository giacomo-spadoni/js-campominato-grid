const griglia = document.getElementById('grid')

for (let i = 0; i < 9; i++) {
    addQuadrato(griglia, i)
}

function addQuadrato(griglia, i) {
    let quadrato = document.createElement('div')
    quadrato.classList.add('square')
    quadrato.addEventListener('click', function () {
        quadrato.classList.toggle('evidenziato')
        if (quadrato.classList.contains('evidenziato')) {
            quadrato.textContent = i
        } else {
            quadrato.textContent = ''
        }
    })
    griglia.append(quadrato)
}