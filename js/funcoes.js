const cursosCadastrados = async()=>{

    const url = 'http://localhost:3030/cursos'

    const response = await fetch(url)

    const listaCursos = await response.json()

    return listaCursos.cursos
}

const buscaAlunoMatricula = async(numeroMatricula, siglaCurso)=>{
    const url = `http://localhost:3030/discente/${numeroMatricula}/${siglaCurso}`

    const response = await fetch(url)

    const aluno = await response.json()

    return aluno.alunoMatricula
}

const buscaAlunosCurso = async(curso)=>{
    const url = `http://localhost:3030/alunos/${curso}`

    const response = await fetch(url)

    const listaAlunos = await response.json()

    return listaAlunos.alunosCadastrados
}

const filtrarStatus = async(siglaCurso,statusAluno)=>{
    const url = `http://localhost:3030/estudantes/${siglaCurso}/${statusAluno}`

    const response = await fetch(url)

    const listaAlunosStatus = await response.json()

    return listaAlunosStatus.alunosStatus
}

const filtrarAno = async(anoConclusao, sigla)=>{
    const url =`http://localhost:3030/aprendizes/${anoConclusao}/${sigla}`

    const response = await fetch(url)

    const listaAlunosAno = await response.json()

    return listaAlunosAno.alunosAno
}

const filtrarStatusAno = async(status, ano)=>{
    const url = `http://localhost:3030/academico/${status}/${ano}`

    const response = await fetch(url)

    const listaAlunosAnoStatus = await response.json()

    return listaAlunosAnoStatus.alunosAnoStatus
}

export{
    cursosCadastrados,
    buscaAlunosCurso,
    filtrarStatus,
    filtrarAno,
    filtrarStatusAno,
    buscaAlunoMatricula
}
