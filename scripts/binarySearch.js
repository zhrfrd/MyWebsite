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
    var end = myArray[arrayLength];
    var key = parseInt(document.getElementById("txtKey").value);

    while (start < arrayLength)
    {
        if (key > (end / 2))
        {
            start = end / 2;
        }

        else if (key < (end / 2))
        {
            end /= 2;
        }

        else if (key == myArray[start])
        {
            res ++;
            position = start;
        }
   
        alert (start);
    }

    if (res > 0)
        alert ("Key found in position: " + position);

    else
        alert ("Key not present inside the array!");
}