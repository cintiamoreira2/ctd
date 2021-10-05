function Aluno(name, totalFaltas, notas) {
    this.name = name,
        this.totalFaltas = totalFaltas,
        this.notas = notas,
        this.calcularMedia = calcularMedia,
        this.faltas = faltas
}

function calcularMedia() {
    let media = 0;
    for (let i = 0; i < this.notas.length; i++) {
        media += this.notas[i];
    }
    return (media / this.notas.length).toFixed(1)
}

function faltas() {
    this.totalFaltas += 1
}
module.exports = Aluno