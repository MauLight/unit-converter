
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]


function myArr(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    
}

myArr(myCourses)

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge


function generateSentence(desc, arr) {
    
    let items = ""
    const lastIndex = arr.length - 1
    
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            items += `${arr[i]}.`
        }
        else  {
            items += `${arr[i]}, `
    } 
     
}
return `The ${arr.length} ${desc} are ${items}` 
}



console.log(generateSentence("largest countries", ["China", "India", "USA"]))
console.log(generateSentence("best fruits", ["Apples", "Bananas"]))


const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const totalTwo = totalPrice.toFixed(2);
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ totalTwo }`

console.log(totalTwo)


let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];


function filterColors(color){
	for (let i = 0; i < color.length; i++) {
      if(color.sexy == true) {
        return color
      }
    }
}

filterColors(allColors)


function lyricsGenerator(array) {
    let music = "";
    let contador = 0

    for(let i = 0; i < array.length; i++) {
        //console.log(array[i])
        if( array[i] == 0) {
            contador = 0;
            music += "Boom "
        }
        else if ( array[i] == 1 ){
            contador += 1;
            if (contador == 3) {
                contador = 0;
                music += "Drop the base "
                music += "!!!Break the base!!! "
            }
            else music += "Drop the base "
        }

    }

    return music;
}

function lyricsGenerator(array) {
    let music = "";
    let counter = 0;

    for (let i = 0; i < array.length; i++) {

    if ( array[i] == 0 ) {
        
        music += "Boom "
    }
    else if ( array[i] == 1 ) {
        counter += 1;
        
        if ( counter == 3 ) {
            counter == 0;
            music += "Drop the base "
            music += "!!!Break the base!!! "
        }
    else music += "Drop the base "
    }

}
return music
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))