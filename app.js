//Declare a variable that stores the number of columns
let string= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let arr = [];
let rows = string.split("\n");
let cell = "";
for(let i=0; i<rows.length; i++){
    cell = rows[i].split(",");
    arr.push(cell)
}

console.log(arr)