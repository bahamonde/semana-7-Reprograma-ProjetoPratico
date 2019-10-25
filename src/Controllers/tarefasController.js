const tarefas = require("../Model/tarefas.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    res.status(200).send(tarefas.find(tarefas => tarefas.id == id))
}

exports.getNome = (req, res) => {
    const nome1 = req.params.nome
    const retorno = tarefas.filter(tarefa => tarefa.nomeColaborador == nome1)
    res.status(200).send(retorno)
}

exports.getConcluido = (req, res) => {
    const concluidas = tarefas.filter(tarefa => tarefa.concluido == "true")
    const TarefasOK = concluidas.map(tarefa => tarefa.nomeColaborador)
    res.status(200).send(TarefasOK)
}

// exports.getSp = (req, res) => {
//     const nasceuSp = paulistas.filter(aluna => aluna.nasceuEmSp == "true")
//     const meninasSp = nasceuSp.map(aluna => aluna.nome)
//     res.status(200).send(meninasSp)