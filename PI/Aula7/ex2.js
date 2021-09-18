
//exercicio 1 resulta em true
let x=10
let y ="a"
y==="b" || x >= 10
console.log(y==="b" || x >= 10)

//exercicio 2 resulta em false
let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))

//exercicio 3 resulta em false
let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)
console.log(!((str || msg) && eBonito))