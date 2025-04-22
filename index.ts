/*let nomeMateria:string = "Frameworks I"
console.log(nomeMateria)

const variavel = 10
const variavelNumber:number = 10
const variavelString:string = "Frameworks I"
const variavelBooleano = true //false 

const vetor:number[] = []
const vetorstring:string[] = ["strings", "11"]
vetor.push(10)

// como criar objetos dentro do JS

const pessoa: { nome:string,idade: number} = {
   //  idade:17,
   //  nome:"mandy"
//}

//pessoa.nome = "mandyyy"
//console.log(pessoa)
 
//TYPE
//type EstudanteType = {
  //  nome: string,
 //   idade: number
  //  cpf: string
//}

//const estudanteObj: EstudanteType = {
   // nome:"mandy",
 //   idade: 17,
 //   cpf: "07448569211"
//}
//console.log(estudanteObj)

////funções no JavaScript


//console.log(`o resultado da soma é: ${somaA(10,20)}`)

//const vetorExemplo = [1,2,3,4,5,6,7,8]
//console.log(vetorExemplo)
//vetorExemplo.pop()
//console.log(vetorExemplo)


//function somaA(a:number,b:number): number{
 //   return a+b
//}
//const somaB= function (a:number,b:number): number{
 //   return a+b
//}
//const somaC =(a:number,b:number): number=>{
 ////   return a+b
//}
//const somaD= (a:number,b:number): number=> a+b

//const somay = (a,b)=> a+b*/


//atividade
//primeira atividade  com trypescript 


//crie uma função que par() 
//recebe um numero  e se ele e for par retorna true 
// se não for ,retorna false
//usem tipagem de type script na função 
//exemplo1   par(10) //true
//exemplo2 par(11)  //false
//exemplo3 par(0)   //undefined
//exemplo4 pat(-1)  //undefined


/*function par(numero) { 
    if (numero<=0){
        return undefined
    }
    if(numero%2==0){
        return true
    }
    else{
        return false
    }
}

console.log(par(10))
console.log(par(0))
console.log(par(11))
console.log(par(-1))
console.log(par(19))*/


//attividade 02
//crie uma função que receba um vetor e some
//os numeros de vetor
//somaNumeros([1,2,3,4])
//10

//quando o vetor passado for vazio:
//retornar undefineed

  
/*function x(vetor:number[]){
    vetor = [1,2,3,4,5]

 if(vetor.length == 0){

 }

}

const vetorTeste = [1,2,3,4,5]
vetorTeste.length //isso devolve o tamanho do vetor
*/




//crie uma função que receba um vetor e um numero

//sua função deve somar as posições do veot elevando ao numeor recebido por parâmetro

//exemplo 
//somaElevado([2.2.2],2) 12
//somaElevado([1,2,3],3) 36
//se o vetor for vazio devolva undefined
/*
function x(vetor:number[]):number|undefined{
    let num = 0
    if(vetor.length == 0){
    return undefined
 }
 for ( let i = 0; i<vetor.length; i++){
  num += vetor[i];
 }
return num 
}

console.log(x([])) */


/*
// MAP -> tranforma o vetor em um mapeamento

const vetor:number [ ] = [ 1,2,3 ]

function soma2 ( x:number ) {
    return x + 2
}

const result = vetor.map ( soma2 ) 

console.log ( result ) 

// Crie uma função que receba um vetor e devolva o mesmo vetor elevado ao cubo 

// Exemplo - eleva ( [1,2,3] ) // [1,8,27]

function eleva ( x:number ){
    return x ** 3 
}

const result = vetor.map ( eleva )

console.log ( result )

// Crie uma função que receba um vetor e um número e devolva um vetor com a soma de cada item com esse número

// Exemplo somaVetor ( [1,2], 3 ) // [ 4,5 ]

function somaVetor(v:number[], num:number){
    return v.map(
        function (num:number){
            return num + v
        }
    )
    }

    console.log(somaVetor([1,2],3))*/
/*
    const vetor = [1,2,3]
    const result = vetor.filter(
        function (x:number){
            if(x<3){
                return true
            }
            else{
                return false
            }
        }
    )
   console.log(result) */





/*//FIND

//criar uma função que retorna verdadeiro
//quando é o meu elemento buscado 
//quando não for retorne false
const v = [1,2,3,4,5,6]
function callbacks(x:number){
    return x==5
}
let result = v.find(callbacks)
console.log(result)*/
/*
assincronidade -> não sincronizad  ->paralelo
 não ficar esperando algo que demore enquanto voce pode fazer outras coisas.

 ex: enquanto esperamos o banco responder algo.
 podemos realizar algo com javascript


promessas
é um tipo de objeto no javascript que é o retorno de uma função que não é sincrona.
esse objeto que é chamada de(promise) quando a função termina:
ele pode estar nos dois casos:
resolve   -> quando a função executou corretamente.
reject    -> quando algo deu errado.
*/

/*
function demora(): Promise<string>{ 
let promise = new Promise<string>((resolve,reject)=>{
    setTimeout(
        function(){
            if(Math.random()<0.5){
                resolve("dados!!!")
            }
            else{
                reject("NÃO FUNCIONA!!!")
             }
           
        },
        3000
    )
});
return promise
 

}

console.log("executar algo antes")
const resultado = demora()

.then((resultadoEspera)=>{console.log(resultadoEspera)})
.catch((resultadoEspera)=>{console.log("catch:"+resultadoEspera)})
console.log("executar algo depois")

//.then          -> Então
//.catch         -> Capturar

//await async
/**
* 2017 javascript truxe esse novo conceito de await e async
 * await  -> é para você ficar esperando algo que é assíncrono (async)
 * 
 * não podemos utilizar await sem ser em uma função assíncrona (async)
 */
/*
async function aux(){
    try{
 const resultado = await demora()
    console.log("resultado await: "+resultado)
    }
    catch(erro){
        console.log("ERRO TRY/CATCH: "+erro)
    }
    
}
aux()*/
import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';
import fastify, { FastifyRequest, FastifyReply } from 'fastify'
import cors from '@fastify/cors'
const app = fastify()
app.register(cors)

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando")
})
app.get('/estudantes', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const conn =  await mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: "",
            database: 'banco1023a',
            port: 3306
        })
        const resultado =  await conn.query("SELECT * FROM estudantes")
        const [dados, camposTabela] = resultado
        reply.status(200).send(dados)
    }
    catch (erro: any) {
        if (erro.code === 'ECONNREFUSED') {
            console.log("ERRO: LIGUE O LARAGAO => Conexão Recusada")
            reply.status(400).send({mensagem:"ERRO: LIGUE O LARAGAO => Conexão Recusada"})
        } else if (erro.code === 'ER_BAD_DB_ERROR') {
            console.log("ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO"})
        } else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log("ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO"})
        } else if (erro.code === 'ER_NO_SUCH_TABLE') {
            console.log("ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY")
            reply.status(400).send({mensagem:"ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY"})
        } else if (erro.code === 'ER_PARSE_ERROR') {
            console.log("ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS")
            reply.status(400).send({mensagem:"ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS"})
        } else {
            console.log(erro)
            reply.status(400).send({mensagem:"ERRO: NÃO IDENTIFICADO"})
        }
    }
})

app.listen({ port: 8000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

