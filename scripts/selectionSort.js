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
    document.getElementById("bttSelectionSort").disabled = false;
}

function selectionSort()
{
    var min, max, temp;
    
    for (count1 = 0; count1 < (arrayLength); count1 ++)
    {
        for (count2 = count1; count2 < (arrayLength); count2 ++)
        {
            if (myArray[count2] < myArray[count1])
            {
                //Swap the two value of the array
                temp = myArray[count2];
                myArray[count2] = myArray[count1];
                myArray[count1] = temp;
            }
        }
    }

    document.getElementById("txtSortedArray").value = myArray;
}