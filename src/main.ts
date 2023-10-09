import {Book} from "./book.ts"

let obj : Book
let list : Book[] = []

function FillIn(name:string, number:number){
    for (let index = 0; index < 30; index++) {
        let rand : number
        rand = Math.floor(Math.random() * 10)
        obj = new Book(("Book#" + index), rand)
        list.push(obj)
    }
    obj = new Book(name, number)
    list.push(obj)
}

function WriteAll(){
    for(let i = 0; i < list.length; i++){
        console.log(list[i].toString())
    }
}

function BetterThanSeven(){
    let index : number = 0
    if(list[index].rating >= 7){
        console.log(list[index].toString())
        index++
    }
}

function BestOf(){
    let bestIndex : number = 0
    for(let i = 1; i < list.length; i++){
        if(list[i].rating > list[bestIndex].rating){
            bestIndex = i
        }
    }
    console.log(list[bestIndex].toString)
}

function Add(){
  let nev = (document.getElementById('bookname') as HTMLInputElement).value
  let number = parseInt((document.getElementById('bookrating') as HTMLInputElement).value)
  FillIn(nev, number) 
}

function init(){
    document.getElementById('upload')?.addEventListener('click', Add)
    // FillIn("Book#1", 5)
    // FillIn("Book#2", 8)
    // FillIn("Book#3", 3)
    WriteAll()
    BetterThanSeven()
    BestOf()
}

document.addEventListener('DOMContentLoaded', init)