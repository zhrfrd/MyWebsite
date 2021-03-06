var myArray = new Array();
var arrayLength;

function populate()
{
    arrayLength = parseInt(document.getElementById("txtLength").value);
    
    //Populate array with ordered numbers
    for (var c = 0; c < arrayLength; c++)
    {
        myArray [c] = c;
    }

    myArray = myArray.sort(() => Math.random() - 0.5)   //Shuffle array elements
    document.getElementById("txtUnsortedArray").value = myArray;   //Output
    document.getElementById("bttMergeSort").disabled = false;
}

function mergeSort()
{
    var tempArray = myArray;
    var tempArrayLength = arrayLength;
    var count = tempArrayLength;
    var startTempArray = 0;
    var endTempArray = count;
    
    while (count != 1)
    {
        count /= 2;
    }
}