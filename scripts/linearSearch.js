var myArray = new Array();
var arrayLength;
var res = -1;
var resFactorial;
var position = -1;
var textSize;
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

    myArray = myArray.sort(() => Math.random() - 0.5)   //Shuffle array elements
    document.getElementById("txtResult").value = myArray;   //Output
    document.getElementById("bttSearch").disabled = false;
    document.getElementById("bttSearchRecursive").disabled = false;
}

function linearSearch()
{
    key = parseInt(document.getElementById("txtKey").value);
    res = 0;

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

function calculateLinearSearchRecursive()
{
    key = parseInt(document.getElementById("txtKey").value);
    let count = 0;

    let position = linearSearchRecursive(count);

    if (position != -1)
        alert ("Key found in position: " + position);

    else
        alert ("Key not present inside the array!");
}

function linearSearchRecursive(count)
{
    if(key == myArray[count])
    {
       res = count;
       count == arrayLength + 1;
    }

    if ((key != myArray[count]) && (count < arrayLength))
    {
        count ++;
        res = linearSearchRecursive(count);
    }

    if (count >= arrayLength)
        res = -1;

    return res;
}