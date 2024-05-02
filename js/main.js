const griglia = document.getElementById('grid')
const facile = document.getElementById('easy')
const medio = document.getElementById('standard')
const difficile = document.getElementById('hard')
const fine = document.getElementById('end')

fine.addEventListener('click', function () {
    show()

    griglia.classList = ''
    griglia.innerHTML = ''
})

facile.addEventListener('click', start.bind('null', 'easy', 100))

medio.addEventListener('click', start.bind('null', 'standard', 81))

difficile.addEventListener('click', start.bind('null', 'hard', 49))

function start(livello, celle) {
    hidden()

    griglia.classList.add(livello)

    for (let i = 0; i < celle; i++) {
        addQuadrato(griglia, i)
    }
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

function show() {
    facile.classList.remove('hidden')
    medio.classList.remove('hidden')
    difficile.classList.remove('hidden')
    fine.classList.add('hidden')
}

function hidden() {
    facile.classList.add('hidden')
    medio.classList.add('hidden')
    difficile.classList.add('hidden')
    fine.classList.remove('hidden')
}