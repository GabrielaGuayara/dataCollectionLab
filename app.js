//Declare a variable that stores the number of columns
let string= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let arr = [];
let rows = string.split("\n");
let cell = "";
for(let i=0; i<rows.length; i++){
    cell = rows[i].split(",");
    arr.push(cell)
}

// console.log(arr)


//PART THREE: TRANSFORMING DATA

let arrOfObj = [];

//Getting the rows using the split() metod
let row = string.split("\n");

let columnNum = row[0].split(",").length;
// console.log(columnNum)
let headers = row[0].split(",");
// console.log(headerCol)

//For loop to loop through each row
for(let i=1; i<row.length; i++){
    let cells = row[i].split(",");
    // console.log(cells)

//Create an object for this row
let obj ={};

    //For loop to loop through each cell and add it to the object
    for(let j=0; j< columnNum; j++){
        obj[headers[j]] = cells[j];
    }
    arrOfObj.push(obj)
}

console.log(arrOfObj)


