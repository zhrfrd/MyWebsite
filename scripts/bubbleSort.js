var myArray = new Array();
var arrLength;

function populate()
{
    arrLength = parseInt(document.getElementById("txtLength").value);
    
    //Populate array with ordered numbers
    for (var c = 0; c < arrLength; c++)
    {
        myArray [c] = c;
    }

    myArray = myArray.sort(() => Math.random() - 0.5)   //Shuffle array elements
    document.getElementById("txtUnsortedArray").value = myArray;   //Output
    document.getElementById("bttBubbleSort").disabled = false;
    document.getElementById("bttBubbleSortRecursive").disabled = false;
}

function bubbleSort()
{
    let temp;
    
    for (count1 = arrLength; count1 > 0; count1 --)
    {
        for (count2 = 0; count2 < count1; count2 ++)
        {
            if (myArray[count2] > myArray[count2 + 1])
            {
                temp = myArray[count2];
                myArray[count2] = myArray[count2 + 1];
                myArray[count2 + 1] = temp;
            }

            //alert(count2);
        }
    }

    document.getElementById("txtSortedArray").value = myArray;
}

function calculateBubbleSortRecursive()
{
    let count1 = 0;
    let count2 = 1;
    let arrLength = parseInt(document.getElementById("txtLength").value);
    let arraySorted = bubbleSortRecursive(count1, count2, arrLength);

    document.getElementById("txtSortedArray").value = arraySorted;
}

function bubbleSortRecursive(count1, count2, arrLength)
{
    let temp;

    //Case base
    if (myArray.length == 1)
        return myArray;

    else if ((myArray.length > 1) && (count1 > myArray.length))
    {
        if ((myArray[count1] < myArray[count2]) && (count2 < myArray.length))
        {
            //alert(count1 + " " + count2);
            count2 ++;
            count1 ++;
            myArray = selectionSortRecursive(count1, count2); 
        }

        else if ((myArray[count1] > myArray[count2]) && (count2 < myArray.length))
        {
            //Swapping elements
            temp = myArray[count1];
            myArray[count1] = myArray[count2];
            myArray[count2] = temp;
            count2 ++;
            count1 ++;
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