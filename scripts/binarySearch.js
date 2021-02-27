var myArray = new Array();
var arrayLength;
var res = 0;
var position;
var textSize;

//Generat array of different numbers
function populate()
{
    arrayLength = parseInt(document.getElementById("txtLength").value);
    
    //Populate array with ordered numbers
    for (var c = 0; c < arrayLength; c++)
    {
        myArray[c] = c;
    }

    document.getElementById("txtResult").value = myArray;   //Output
    document.getElementById("bttSearch").disabled = false;
}

function binarySearch()
{
    var start = 0;
    var end = arrayLength;
    var key = parseInt(document.getElementById("txtKey").value);
    var mid = (end + start) / 2;

    while (res == 0)
    {
        if (key < mid)   //If the key is minor than the element in the middle of the array set the end of the array in the middle
            end = mid;

        else if (key > mid)   //If the key is major than the element in the middle of the array set the start of the array in the middle
            start = mid;
            
        else if (key == mid)   //If the key is in the middle displa the position
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