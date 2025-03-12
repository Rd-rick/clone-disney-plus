document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const faqQuestion = document.querySelectorAll('[data-faq-question]')
    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function() {
        const posicaoAtual = this.window.scrollY

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader()
        } else {
            exibeElementosDoHeader()
        }
    })

    // Seção de atrçôes, programação das abas
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()
            aba.classList.add('shows__list--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // Seção FAQ, accordion
    for(let i = 0; i < faqQuestion.length; i++) {
        faqQuestion[i].addEventListener('click', abreOuFechaRespota)
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('.header')
    header.classList.add('header--hidden')
}

function exibeElementosDoHeader() {
    const header = document.querySelector('.header')
    header.classList.remove('header--hidden')
}

function abreOuFechaRespota(elemento) {
    const classe = 'faq__question__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}