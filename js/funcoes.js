const cursosCadastrados = async()=>{

    const url = 'https://projeto-lion-school.netlify.app/.netlify/functions/api/cursos'

    const response = await fetch(url)

    const listaCursos = await response.json()

    return listaCursos.cursos
}

const buscaAlunoMatricula = async(numeroMatricula, siglaCurso)=>{
    const url = `https://projeto-lion-school.netlify.app/.netlify/functions/api/discente/${numeroMatricula}/${siglaCurso}`

    const response = await fetch(url)

    const aluno = await response.json()

    return aluno.alunoMatricula
}

const buscaAlunosCurso = async(curso)=>{
    const url = `https://projeto-lion-school.netlify.app/.netlify/functions/api/alunos/${curso}`

    const response = await fetch(url)

    const listaAlunos = await response.json()

    return listaAlunos.alunosCadastrados
}

const filtrarStatus = async(siglaCurso,statusAluno)=>{
    const url = `https://projeto-lion-school.netlify.app/.netlify/functions/api/estudantes/${siglaCurso}/${statusAluno}`

    const response = await fetch(url)

    const listaAlunosStatus = await response.json()

    return listaAlunosStatus.alunosStatus
}

const filtrarAno = async(anoConclusao, sigla)=>{
    const url =`https://projeto-lion-school.netlify.app/.netlify/functions/api/aprendizes/${anoConclusao}/${sigla}`

    const response = await fetch(url)

    const listaAlunosAno = await response.json()

    return listaAlunosAno.alunosAno
}

const filtrarStatusAno = async(status, ano)=>{
    const url = `https://projeto-lion-school.netlify.app/.netlify/functions/api/academico/${status}/${ano}`

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
