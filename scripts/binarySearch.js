var myArray = new Array();
var arrayLength;
var key;
var res = -1;

//Generat array of different numbers
function populate()
{
    arrayLength = parseInt(document.getElementById("txtLength").value);
    
    //Populate array with ordered numbers
    for (var c = 0; c < arrayLength; c++)
    {
        myArray [c] = c;
    }

    document.getElementById("txtResult").value = myArray;   //Output
    document.getElementById("bttSearch").disabled = false;
    document.getElementById("bttSearchRecursive").disabled = false;
}

function binarySearch()
{
    let start = position = res = 0;
    let end = arrayLength;
    key = parseInt(document.getElementById("txtKey").value);
    let mid = (end + start) / 2;

    while (res == 0)
    {
        if (key < mid)   //If the key is minor than the element in the middle of the array set the end of the array in the middle
            end = mid;

        else if (key > mid)   //If the key is major than the element in the middle of the array set the start of the array in the middle
            start = mid;
            
        else if (key == mid)   //If the key is in the middle display the position
        {
            position = mid + 1;
            res = 1;
        }

        mid = Math.floor((end + start) / 2);
    }

    if (res > 0)
        alert ("Key found in position: " + position);

    else
        alert ("Key not present inside the array!");
}

function calculateBinarySearchRecursive()
{
    let start = 0;
    let end = arrayLength;
    key = parseInt(document.getElementById("txtKey").value);

    let position = binarySearchRecursive(start, end);
    
    if (position != -1)
        alert ("Key found in position: " + position);

    else
        alert ("Key not present inside the array");
}

function binarySearchRecursive(start, end)
{
    let middle = Math.ceil ((end + start) / 2);   //Update middle point recursivelly 

    if (key == myArray[middle])
        res = middle;

    else if (key < myArray[middle])   //If key smaller than middle element set middle element as the end of the array
    {
        end = middle;
        res = binarySearchRecursive(start, end);   
    }

    else if (key > myArray[middle])   //If key bigger than middle element set middle element as the start of the array
    {
        start = middle;
        res = binarySearchRecursive(start, end);
    }

    return res;
}