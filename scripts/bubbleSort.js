var myArray = new Array();
var arrLength;
var container = document.getElementById("array");

function populate()
{
    for (var i = 0; i < 20; i++) 
    {
        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);
  
        // Creating element div
        var array_ele = document.createElement("div");
  
        // Adding class 'block' to div
        array_ele.classList.add("block");
  
        // Adding style to div
        array_ele.style.height = `${value * 3}px`;   //Set height to div in relationship to the random value generated
        array_ele.style.transform = `translate(${i * 30}px)`;
  
        // Creating label element for displaying 
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;
  
        // Appending created elements to index.html 
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
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