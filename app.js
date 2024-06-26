//PART ONE: REFACTORING OLD CODE
const strOne = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

function refactCode(str){

    let newArr = [];

    //Split the string into rows
    const rows = str.split("\n");

        //Use for loop to loop through the rows skipping the row[0]  
        for(let i=1; i< rows.length; i++){
            
            let cell = rows[i].split(",");
            
            //Create the objects
            let objs ={
                    index: +`${cell[0]}`,
                    mass: +`${cell[1]}`,
                    spring1: +`${cell[2]}`,
                    spring2: +`${cell[3]}`,
            }
    
            //Add the objects to the array
            newArr.push(objs)
   }

   return newArr;
}


//EPART TWO: XPANDING FUNCTIONALITY

const strTwo= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function expFunctionality(str){

    let arr = [];
    
    let rows = str.split("\n");
    
    for(let i = 0; i < rows.length; i++){
        let cell = rows[i].split(",");
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
                    obj[headers[j].toLowerCase()] = cells[j];
                }
        
            arr.push(obj)
        }

        return arr;
}


// PART FOUR: SORTING AND MANIPULATING DATA
let newArr = transfData(strTwo)

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

function newArrayOfObj (arr){
    
    let rows = arr.split("\n") //Retuns four arrays of elements 

    for( j = 0; j< rows.length; j++){
        
        let cells = rows[j].split(",");
        
        console.log(cells.join(" "));
   }

}


//Function to get the total age and average age of the group
function getAverageAge(arr){

    let totalAge = 0;
    
    for(let i = 0; i < arr.length; i++){
        
        totalAge+= parseInt(arr[i].age);

}
    let avgAge = totalAge/arr.length;
    
    return `The total age is ${totalAge} and the average age of the group is ${avgAge} `
}



console.log("*------------------PART ONE----------------*")
console.log(refactCode(strOne))
console.log("*---------------------PART TWO----------------*")
console.log(expFunctionality(strTwo))
console.log("*---------------------PART THREE--------------*")
console.log(transfData(strTwo))
console.log("*---------------------PART FOUR---------------*")
console.log(sortAndManipData(newArr))
console.log((getAverageAge(newArr)))
console.log("*---------------------PART Five---------------*")
console.log(transformToCvs(newArr))

// console.log((newArr))
/*PART FIVE: FULL CIRCLE
*/

function transformToCvs(arr){
    //Create a varible to store the converted string
    let toString = "";

    //Iterate each element in the array and add strings by using template literals
    for(let i = 0; i < arr.length; i++){

        toString += `id: ${arr[i].id}, occupation: ${arr[i].occupation}, age: ${arr[i].age}`
        
        //Sepate the string by using \n
        toString += "\n";
        
    }

    //the functions return the converted string
    return toString;
}


