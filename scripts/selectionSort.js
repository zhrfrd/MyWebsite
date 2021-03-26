var myArray = new Array();
var arrayLength;
var bar;// = new Array();

function populate()
{
    arrayLength = parseInt(document.getElementById("txtLength").value);
    
    //Populate array with ordered numbers
    for (var c = 0; c < arrayLength; c++)
    {
        myArray[c] = Math.ceil(Math.random() * 100);;
        bar = document.createElement("div");
        bar.classList.add("divBar");
        bar.style.height = `${myArray[c] * 5}px`;
        document.getElementById("containerBars").appendChild(bar);
    }

    //myArray = myArray.sort(() => Math.random() - 0.5)   //Shuffle array elements
    document.getElementById("txtUnsortedArray").value = myArray;   //Output
    document.getElementById("bttSelectionSort").disabled = false;
    document.getElementById("bttSelectionSortRecursive").disabled = false;
}

function selectionSort()
{
    let temp;
    let tempBar = document.createElement("div");
    tempBar.classList.add("divBar");
    
    for (count1 = 0; count1 < arrayLength; count1 ++)
    {
        for (count2 = count1; count2 < arrayLength; count2 ++)
        {
            if (myArray[count2] < myArray[count1])
            {
                //Swap the two value of the array
                temp = myArray[count2];
                tempBar = bar[count2];

                myArray[count2] = myArray[count1];
                bar[count2] = bar[count1];

                myArray[count1] = temp;
                bar[count1] = tempBar;

                document.getElementsByClassName("divBar")[count2].style.backgroundColor="blue";

                /*tempBar = document.getElementsByClassName("divBar")[count2];
                document.getElementsByClassName("divBar")[count2].replaceWith(document.getElementsByClassName("divBar")[count1]);
                document.getElementsByClassName("divBar")[count1].replaceWith(tempBar);*/

                document.getElementById("containerBars").appendChild(bar);
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