const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bia", idade: 19 },
  { nome: "Carlos", idade: 30 },
  { nome: "Maria", idade: 20 }
]

for (c=0; c < usuarios.length; c++) {
    
    console.log('cliente ' + (c+1))
    console.log('nome: ' + usuarios[c].nome)
    console.log('idade: ' + usuarios[c].idade)
    console.log('--------------')
}
