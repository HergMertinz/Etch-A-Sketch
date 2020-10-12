
let container = document.querySelector("#container")
let sizeBtn = document.querySelector("#sizeBtn");

let size_height = 10;
let size_width = 10;
let column = 0;
let row = 0;

function makeGrid(size_height, size_width){
    container.innerHTML = ""

    container.style.display = "grid"
    container.style.gridTemplateColumns = size_width;
    container.style.gridTemplateRows = size_height;


    for (var i = 0; i < (size_height); i++) { // Loops through and creates all the 'pixels'
        for (var j = 0; j < (size_width); j++) {

            let div = document.createElement('div')
            div.className = "pixel"
            div.style.gridRow = i
            div.style.height = 960 / size_height
            div.style.width = 960 / size_width
            
            
            container.append(div)
        }
    } 

    let pixel = document.querySelectorAll('.pixel')

    pixel.forEach(function(pixel){
        
        pixel.style.height = 960 / size_width
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = "red";
        
        })
    }) 
}




sizeBtn.addEventListener("click", getSize);
    

function getSize(){
    let size = prompt("Enter new size of grid", "Between 1, 100")
    if (size > 100) {
       size = prompt("The number you have entered is larger than 100, please enter a number 100 or less")
    }
    if (size < 1) {
        size = prompt("You have entered a number less than 1, please enter a number 1 or greater")
    }
    size_height = size;
    size_width = size;
    makeGrid(size_height, size_width)

}


makeGrid(size_height, size_width)