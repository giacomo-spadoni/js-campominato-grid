// creo le variabili che selezionano gli elementi HTML
const griglia = document.getElementById('grid')
const facile = document.getElementById('easy')
const medio = document.getElementById('standard')
const difficile = document.getElementById('hard')
const fine = document.getElementById('end')
const bombe = []

// creo l'evento al tasto fine partita

fine.addEventListener('click', function () {
    show()

    griglia.classList = ''
    griglia.innerHTML = ''
})

// creo gli eventi ai tasti di difficoltà diverse

facile.addEventListener('click', start.bind('null', 'easy', 100))

medio.addEventListener('click', start.bind('null', 'standard', 81))

difficile.addEventListener('click', start.bind('null', 'hard', 49))

// creo la funzione che fa iniziare la partita

function start(livello, celle) {
    hidden()

    let n = 0
    while (n < 16) {
        let z = Math.floor(Math.random() * celle) + 1
        if (!bombe.includes(z)) {
            bombe.push(z)
            n++
        }
    }

    griglia.classList.add(livello)

    for (let i = 0; i < celle; i++) {
        addQuadrato(griglia, i)
    }
}

// creo la funzione che aggiunge i quadrati

function addQuadrato(griglia, i) {
    let quadrato = document.createElement('div')
    quadrato.classList.add('square')
    // funzione dentro funzione senza .bind
    quadrato.addEventListener('click', function () {
        addClick(quadrato, i)
    })
    // quadrato.addEventListener('click', addClick.bind('null', quadrato, i))
    griglia.append(quadrato)
}

// creo l'evento per il click sulle celle

function addClick(quadrato, i) {
    quadrato.classList.toggle('evidenziato')
    // let x = Math.floor(Math.random() * 10) + 1
    // if (quadrato.classList.contains('evidenziato')) {
    //     if (x == 3 || x == 6) {
    //         quadrato.innerHTML = '<i class="fa-solid fa-bomb"></i>'
    //     } else {
    //         quadrato.textContent = ''
    //     }
    // } else {
    //     quadrato.textContent = ''
    // }
}

// creo la funzione che mostra i tasti dei livelli

function show() {
    facile.classList.remove('hidden')
    medio.classList.remove('hidden')
    difficile.classList.remove('hidden')
    fine.classList.add('hidden')
}

// creo la funzione che nasconde i tasti dei livelli

function hidden() {
    facile.classList.add('hidden')
    medio.classList.add('hidden')
    difficile.classList.add('hidden')
    fine.classList.remove('hidden')
}