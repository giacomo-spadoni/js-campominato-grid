const griglia = document.getElementById('grid')

for (let i = 0; i < 9; i++) {
    let quadrato = document.createElement('div')
    quadrato.classList.add('square')
    griglia.append(quadrato)
}