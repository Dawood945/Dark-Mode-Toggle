// //Question 1
// let grades = [72, 88, 95, 67, 43, 89]
// sum = 0;
// let max = 0;
// for(let val of grades){
//     sum+=val;
//     if(val>max)
//     {
//         max = val;
//     }
// }
// console.log(`The Highest Marks = ${max}`)
// console.log(`Total Marks = ${sum}`)
// let avg = sum/grades.length;
// console.log(`The Average of all Sums = ${avg}`);



// //Question 2
// let companies = ["Tesla", "Google", "FaceBook", "Apple", "Netflix"]
// console.log(companies)
// companies.shift()   //Removes First company
// companies.splice(1,1,"Meta") //Removes Facebook and replaces it with Meta
// companies.push("Amazon") //Adds Amazon at the end of the Array
// console.log(companies) //Final Array



// //Question 3
// let countVow = (str) =>{
//     count = 0;
//     for(let char of str.toLowerCase()){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         }
//     }
//     console.log(str)
//     return count;
// }
// console.log(countVow("JavaScript"))



// //Question 4
// let arr = [2,4,6,8,10]
// arr.forEach((num)=>{
//     console.log(num * num)
// })

// let arr1 = [2,4,6,8,10]
// let cube = arr1.map((val)=>{
//     console.log(val * val * val)
// })




//Question 5
// let marks = [45,92,67,89,100,76]
// let ar = marks.filter((val)=>{
//     return val>=90
// })
// let total = 0;
// marks.forEach((n)=>{
//     total+=n;
// })
// console.log(`The sum of all values = ${total}`)


// //Question 6
// let cars = ["Toyota", "BMW", "Tesla", "Honda", "Ford"];
// console.log(cars);
// let slice = cars.slice(0,3)
// console.log(slice)
// cars.splice(3,1,"Kia", "Hyundai")
// console.log(cars);



// let text = document.getElementById("myId")
// let text = document.getElementById("myId").innerHTML;
// let text = document.getElementById("myId").innerText;
// let text = document.getElementById("myId").tagName;
// console.log(text)

let h2 = document.querySelector("h2")
h2.innerText = h2.innerText + " from Yours Truly :)"
console.dir(h2.innerText)



// let divs = document.querySelectorAll(".box")
// let i = 1;
// for(let div of divs){
//     div.innerText = `New Unique Value ${i}`;
//     i++;
// }


let btn = document.createElement("button")
btn.innerText = "Click Me"
btn.style.background = "red"
btn.style.color = "white"
document.querySelector("body").prepend(btn)



let modeBtn = document.querySelector("#mode")
let body = document.querySelector("body")
let currMode = "light"
modeBtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currMode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currMode)
})


const oldArr = [1,2,3,4,5]
const newArr = ["A","B","C",...oldArr,6,7,8,9,10]
console.log(newArr)



const sum = (...numbers) =>{
    console.log(numbers)
}



let div = document.querySelector("div")
let newBox = div.setAttribute("box", "newBox")
console.log(newBox)

let id = div.getAttribute("id")
console.log(id)

let name = div.getAttribute("name")
console.log(name)



const URL = "https://course-api.com/react-tours-project";
const getTours = async() =>{
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response)
    console.log(response.status)
    let data = await response.json()
    console.log(data)
}