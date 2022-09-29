'use strict'

import {cursosCadastrados} from "./funcoes.js"

const criarCard = (dado)=>{
    const div = document.createElement('div')
    div.classList.add('container-link')

    const img = document.createElement('img')
    img.src = dado.icone

    const a = document.createElement('a')
    a.classList.add('link')
    a.textContent = dado.sigla
    a.href = './pages/alunos.html'

    div.appendChild(a)

    return div
}   

const carregarCard = async () =>{
    const dados = await cursosCadastrados()
    const container = document.getElementById('cursos')
    const criandoCards = dados.map(criarCard)
    container.replaceChildren(...criandoCards)
}

carregarCard()

document.getElementById('cursos').addEventListener('click', (evento)=>{
    localStorage.setItem('curso', evento.target.textContent)
})