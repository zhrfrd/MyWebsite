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
    document.getElementById("bttBubbleSort").disabled = false;
}

function insertionSort()
{
    var temp, countPrevious, tempCountActual, tempCountPrevious;
    
    for (countActual = 1; countActual < arrayLength; countActual ++)
    {
        countPrevious = countActual - 1;
        if (myArray[countActual] < myArray[countPrevious])
        {
            //Temporary variable for storing the (changing) position of the counter
            tempCountActual = countActual;
            tempCountPrevious = countPrevious;
            temp = myArray[tempCountActual];

            //Keep swapping the numbers until the "actual" number has a lower number before it
            while(myArray[tempCountActual] < myArray[tempCountPrevious])
            {
                temp = myArray[tempCountActual];
                myArray[tempCountActual] = myArray[tempCountPrevious];
                myArray[tempCountPrevious] = temp;

                //Update the temporaty counters
                tempCountActual = tempCountPrevious;
                tempCountPrevious --;
            }
        }
    }

    document.getElementById("txtSortedArray").value = myArray;
}