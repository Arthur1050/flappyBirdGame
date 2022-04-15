
/* Chamado ativado assim que todos os elementos da pagina estiverem carregados */
var falling = 0
window.onload = () => {
    const jumpTime = 1 //Tempo de pulo em segundos

    backgrounMove(moveforest())

    window.addEventListener('resize', function() {
        backgrounMove(moveforest())
    })

    birdAnimate()

    /* Continuar tentando fazer o passarinho pular */
    document.body.onclick = (e) => {
        if (falling > 0) {clearTimeout(fallPostJump)}

        let birdAnimation = document.querySelector('.bird').getAnimations()
        //new KeyframeEffect(birdAnimation, [,{bottom: '200px'}])
        
        console.log(birdAnimation)
        /* falling = 1
        fallPostJump = setTimeout(() => {
            downBird()
        }, 500) */
    }
}

/* Animação de movimento do plano de fundo */
function backgrounMove(pxMove) {
    const backgroundForest = document.querySelector('.backForest')
    backgroundForest.animate([
        {
            //from
            left: 0
        },
        {
            //to
            left: pxMove
        }
    ], {
        duration: 30000,
        iterations: Infinity,
        easing: 'linear'
    })
}

/* Retorna quantidade de pixels a serem movidos */
function moveforest() {
    var backForest = document.querySelector('.backForest').getBoundingClientRect()
    var screenGamer = document.querySelector('.screenGame').getBoundingClientRect()

    var pixelsMove = backForest.width - screenGamer.width
    return '-' + pixelsMove + 'px'
}

/* Gravidade */
function birdAnimate (move) {
    var screenGameHeight = document.querySelector('.screenGame').getBoundingClientRect().height
    const bird = document.querySelector('.bird')
    var birdHeight = bird.getBoundingClientRect().height
    const begginPosition = (screenGameHeight/2) - (birdHeight/2)

    bird.animate({
        bottom: [`${begginPosition}px`,'0px']
    },
    {
        duration: 1000,
        fill: "forwards",
        easing: "ease-in"
    })
}

