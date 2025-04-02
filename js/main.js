const projectOpen = document.querySelectorAll('.btn')

projectOpen.forEach(btn => btn.addEventListener('click', function () {
    const nameValue = this.value
    localClick(nameValue)
}))


function localClick(github) {
    switch (github) {
        case 'calculadora':
            window.location.href = 'https://marioduartee.github.io/calculadora/'
            break
        case 'relogio':
            window.location.href = 'https://marioduartee.github.io/relogioDigital/'
            break
        case 'desafio-3':
            window.location.href = 'https://marioduartee.github.io/desafio-3-figma/'
            break
        case 'codelandia':
            window.location.href = 'https://marioduartee.github.io/desafioFigma-1/'
            break
        case 'jordan-shoes':
            window.location.href = 'https://marioduartee.github.io/desafio2-figma/'
            break
        case 'nlw-copa':
            window.location.href = 'https://marioduartee.github.io/NLW-Copa/'
            break
        case 'chihiro':
            window.location.href = 'https://chihiro-8tfsv7bn4-marioduartee.vercel.app/'
            break
        case 'javascriptPage':
            window.location.href = 'https://marioduartee.github.io/JavaScript/'
            break
        case 'array':
            window.location.href = 'https://marioduartee.github.io/array/'
            break
    }
}