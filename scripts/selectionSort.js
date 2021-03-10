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
    document.getElementById("bttSelectionSortRecursive").disabled = false;
}

function selectionSort()
{
    let temp;
    
    for (count1 = 0; count1 < arrayLength; count1 ++)
    {
        for (count2 = count1; count2 < arrayLength; count2 ++)
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

function calculateSelectionSortRecursive()
{
    let count1 = 0;
    let count2 = 1;
    let arraySorted = selectionSortRecursive(count1, count2);

    document.getElementById("txtSortedArray").value = arraySorted;
}

function selectionSortRecursive(count1, count2)
{
    let temp;

    //Case base
    if (myArray.length == 1)
        return myArray;

    else if ((myArray.length > 1) && (count1 < myArray.length))
    {
        if ((myArray[count1] < myArray[count2]) && (count2 < myArray.length))
        {
            //alert(count1 + " " + count2);
            count2 ++;
            myArray = selectionSortRecursive(count1, count2); 
        }

        else if ((myArray[count1] > myArray[count2]) && (count2 < myArray.length))
        {
            //Swapping elements
            temp = myArray[count1];
            myArray[count1] = myArray[count2];
            myArray[count2] = temp;
            count2 ++;
            myArray = selectionSortRecursive(count1, count2);
        }

        else if (count1 >= myArray.length)
            return myArray;

        else if (count2 >= myArray.length)
        {
            count1 ++;
            count2 = count1 + 1;
            myArray = selectionSortRecursive(count1, count2);
        }
    }

    return myArray;
}