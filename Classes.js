
class hero{

    constructor(nome, age, heroClass){
        this.nome = nome
        this.age = age
        this.heroClass = heroClass
        
    }
    attack(arma){
        if(this.heroClass == "guerreiro") {
            arma = "espada"
            return console.log (`O ${this.heroClass} ${this.nome} atacou usando ${arma}`) 
         } else if(this.heroClass == "ninja"){
            arma = "shuriken"
            return console.log (`O ${this.heroClass} ${this.nome} atacou usando ${arma}`) 
         } else if(this.heroClass == "monge"){
            arma = "artes Marciais"
            return console.log (`O ${this.heroClass} ${this.nome} atacou usando ${arma}`)
         } else if(this.heroClass == "mago"){
            arma = "magia"
            return console.log (`O ${this.heroClass} ${this.nome} atacou usando ${arma}`)
         } else{
            return console.log(`Classe ${this.heroClass} não existente`)
         }

    }
}

const heroi = new hero ("Pedro", 35, "guerreiro")
const heroi2 = new hero ("Regis", 35, "ninja")
const heroi3 = new hero ("Chris", 35, "monge")
const heroi4 = new hero ("Dante", 35, "mago")
const heroi5 = new hero ("Ally", 35, "valquiria")

heroi.attack()
heroi2.attack()
heroi3.attack()
heroi4.attack()
heroi5.attack()