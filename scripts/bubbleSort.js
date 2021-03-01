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

function bubbleSort()
{
    var temp;
    
    for (count1 = arrayLength; count1 > 0; count1 --)
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