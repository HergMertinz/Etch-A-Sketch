let container = document.querySelector("#container")

let size_height = 10;
let size_width = 10;
let column = 0;
let row = 0;
container.style.display = "grid"
container.style.gridTemplateColumns = size_width;
container.style.gridTemplateRows = size_height;

container.setAttribute("style", "grid-template-row: " + size_height + ";");

console.log("grid-template-columns: " + size_width + ";")
console.log("grid-template-row: " + size_height + ";")


 for (var i = 0; i < (size_height); i++) { // Loops through and creates all the 'pixels'
    for (var j = 0; j < (size_width); j++) {

        let div = document.createElement('div')
        div.className = "pixel"
        div.style.gridRow = i
        
        
        container.append(div)
    }
} 

 let pixel = document.querySelectorAll('.pixel')

pixel.forEach(function(pixel){
    pixel.style.height = 960 / size_width
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'red'
    
    })
}) 
