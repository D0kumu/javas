let countEl =document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
console.log(saveEl)

let count = 0

function increment (){
    count +=1
    countEl . textContent = count
   

}
//let countEl = document.getElementById(count-el)
//console.log(countEl)

function save(){
    let countStr = count +  "-" 
    saveEl.textContent +=  countStr
  countEl . textContent = 0
  count=0

    //console.log(count)
    
}
save()
//function increment (){
    console.log("Button was clicked")


// let num1 =8
// let num2 = 2
// let num1El = document.getElementById("num1-el").textContent=num1
// console.log(num1El)
// let num2El =document.getElementById("num2-el").textContent=num2
// console.log(num2El)

// let sumEl = document.getElementById("sum-el")
// console.log(sumEl)

// function add(){
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }
// add()


