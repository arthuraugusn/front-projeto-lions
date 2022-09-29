'use strict'

import {buscaAlunoMatricula} from "./funcoes.js"

const criarInfoAluno = (dadoAluno)=>{
    const div = document.createElement('div')

    div.classList.add('info-aluno')

    const img = document.createElement('img')
    img.src=dadoAluno.foto

    const span = document.createElement('span')
    span.textContent = dadoAluno.nome

    div.appendChild(img)
    div.appendChild(span)

    return div
}

const criaDesempenho = (dadosAluno)=>{
    const div = document.createElement('div')

    const barra = document.createElement('div')

    const barraDesempenho = document.createElement('div')

    const nota = document.createElement('span')

    const disciplina = document.createElement('span')

    div.classList.add('container')
    barra.classList.add('desempenho')
    barraDesempenho.classList.add('desempenho-barra')
    nota.classList.add('nota')
    disciplina.classList.add('disciplina')

    if (dadosAluno.media > 60) {
        barraDesempenho.classList.add('azul')
        nota.classList.add('azul-text')
    } else if(dadosAluno.media < 50){
        barraDesempenho.classList.add('vermelho')
        nota.classList.add('vermelho-text')
    } else{
        barraDesempenho.classList.add('amarelo')
        nota.classList.add('amarelo-text')
    }

    nota.textContent = dadosAluno.media
    barraDesempenho.style.height = dadosAluno.media + '%'
    disciplina.textContent = dadosAluno.sigla

    barra.appendChild(barraDesempenho)
    
    div.appendChild(nota)
    div.appendChild(barra)
    div.appendChild(disciplina)

    return div
}

const carregarInfo = async ()=>{
    const cardDesempenho = document.createElement('div')
    cardDesempenho.classList.add('caixa-desempenho')

    const dados = await buscaAlunoMatricula(localStorage.getItem('matricula'), localStorage.getItem('curso'))

    const infoAluno = criarInfoAluno(dados)

    const desempenhoCria = dados.desempenho.map(criaDesempenho)

    const main = document.querySelector('main')

    cardDesempenho.replaceChildren(...desempenhoCria)
    main.appendChild(infoAluno)
    main.appendChild(cardDesempenho)
}

carregarInfo()