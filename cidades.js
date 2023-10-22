const turista = prompt ("E aí turista. Qual seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt ("Você já visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt ("Qual cidade você já visitou?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt ("Você visitou alguma outra cidade? (Sim/Não)")

}

alert (
    "Turista:" + turista + "\nQuantidade de cidades visitadas:" + contagem + "\nCidades visitadas\n" + cidades)