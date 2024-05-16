//Declare a variable that stores the number of columns

const string= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


//EXPANDING FUNCTIONALITY
function expFunctionality(str){

    let arr = [];
    
    let rows = str.split("\n");
    
    let cell = "";
    
    for(let i = 0; i < rows.length; i++){
        cell = rows[i].split(",");
        arr.push(cell);
    }

    return arr;
}



//PART THREE: TRANSFORMING DATA
function transfData(str){

    let arr = [];

    //Getting the rows using the split() metod
    let row = str.split("\n");

    let columnNum = row[0].split(",").length;

    let headers = row[0].split(",");

    //For loop to loop through each row
        for(let i=1; i<row.length; i++){
            let cells = row[i].split(",");

        //Create an object for this row
            let obj ={};

                //For loop to loop through each cell and add it to the object
                for(let j=0; j< columnNum; j++){
                    obj[headers[j]] = cells[j];
                }
        
            arr.push(obj)
        }

        return arr;
}


// Part 4: SORTING AND MANIPULATING DATA
let newArr = transfData(string)

function sortAndManipData(arr){

    //Remove the last element from the sorted array.
    arr.pop()
    arr.sort()

    //Insert the following object at index 1:
    arr.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
    
    //Add the following object to the end of the array:
    arr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

    return arr;
}
console.log("*---------------------PART TWO----------------*")
console.log(expFunctionality(string))
console.log("*---------------------PART THREE--------------*")
console.log(transfData(string))
console.log("*---------------------PART FOUR---------------*")
console.log(sortAndManipData(newArr))