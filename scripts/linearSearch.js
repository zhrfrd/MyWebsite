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
        myArray [c] = c;
    }

    myArray = myArray.sort(() => Math.random() - 0.5)   //Shuffle array elements
    document.getElementById("txtResult").value = myArray;   //Output

    document.getElementById("bttSearch").disabled = false;
}

function linearSearch()
{
    var key = parseInt(document.getElementById("txtKey").value);

    for (var c = 0; c < arrayLength; c++)
    {
        if (key == myArray[c])
        {
            res ++;
            position = c + 1;
        }
    }

    if (res > 0)
        alert ("Key found in position: " + position);

    else
        alert ("Key not present inside the array!");
}