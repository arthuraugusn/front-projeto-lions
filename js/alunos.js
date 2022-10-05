'use strict'

import { buscaAlunosCurso, filtrarStatus} from "./funcoes.js"

const criarCard = (dadoAluno)=>{
    const a = document.createElement('a')
    const span = document.createElement('span')
    const img = document.createElement('img')


    img.classList.add('img-aluno')
    img.src = dadoAluno.foto

    
    span.classList.add('span-nome')
    span.textContent = dadoAluno.nome

    a.classList.add('caixa-aluno')
    a.id = dadoAluno.numeroMatricula
    a.href = "../pages/desempenho.html"

    if(dadoAluno.statusAluno == 'Cursando'){
        a.classList.add('caixa-aluno-azul')
    }
    if(dadoAluno.statusAluno=='Finalizado'){
        a.classList.add('caixa-aluno-amarelo')
    }

    a.appendChild(img)
    a.appendChild(span)

    return a
}

const criarTitulo = (dadoAluno)=>{
    const h1 = document.createElement('h1')
    let separador = dadoAluno.nomeCurso.split('-')
    h1.textContent = separador[1]

    return h1
}

const carregarAlunos = async(siglaCurso)=>{
    const main = document.querySelector('main')
    main.innerHTML= ''

    const alunos = await buscaAlunosCurso(siglaCurso)

    const div = document.createElement('div')
    div.classList.add('aluno')
    div.id = 'aluno'

    const titulo = criarTitulo(alunos[0])

    const criandoCards = alunos.map(criarCard)

    div.replaceChildren(...criandoCards)

    main.appendChild(titulo)
    main.appendChild(div)
}

const sigla = localStorage.getItem('curso').toLowerCase()

carregarAlunos(sigla)

const alunosFiltro = async(evento)=>{
    if(evento.target.textContent == 'Status'){
        carregarAlunos(sigla)
    }else{
        const alunos = await filtrarStatus(sigla, evento.target.textContent.toLowerCase())


        const alunoCaixa = document.getElementById('aluno')

        const criandoCards = alunos.map(criarCard)
        
        
        alunoCaixa.replaceChildren(...criandoCards)
    }
}

document.getElementById('status').addEventListener('click', alunosFiltro)

document.querySelector('main').addEventListener('click', (evento)=>{
    if(evento.target.classList.contains('caixa-aluno')){
        localStorage.setItem('matricula', evento.target.id)
    }if(evento.target.classList.contains('span-nome') || evento.target.classList.contains('img-aluno')){
        localStorage.setItem('matricula', evento.target.parentElement.id)
    }
})