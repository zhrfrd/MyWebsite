var myArray = new Array();
var arrayLength;
var key;

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

    binarySearchRecursive(start, end);
}

function binarySearchRecursive(start, end)
{
    let mid = Math.floor((start + end) / 2);

    if (myArray.length == 1)
        return myArray[0];

    else if (key < mid)
    {
        end = mid;
    }

    else if (key > mid)
    {
        start = mid;
    }

    else if (key == mid)
        return myArray[mid];

    
}