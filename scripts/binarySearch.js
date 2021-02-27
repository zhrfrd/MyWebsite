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

    while (res == 0)
    {
        if (key > (Math.floor(end / 2)))
        {
            start += (Math.floor(end / 2) - Math.floor(start / 2));
        }

        else if (key < Math.floor(end / 2))
        {
            Math.floor(end /= 2);
        }

        else if (key == myArray[start])
        {
            res ++;
            position = start;
        }

        alert(Math.floor(start) + " " + Math.floor(end));
    }

    if (res > 0)
        alert ("Key found in position: " + position);

    else
        alert ("Key not present inside the array!");
}