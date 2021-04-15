
var sortedArray = new Array();

var transitionSpeed;


function mergeSort()
{
    sortedArray = mergeSortDivider (myArray);
    var divBlocks = document.querySelectorAll(".divElement");   //Get all the elements in the document with class "divElement" 
    alert(Number(divBlocks[5].childNodes[0].innerHTML));
    alert(sortedArray);
}

var leftElement = 0;
var rightElement = 0;

function mergeSortDivider(mainArray)
{
    //Case base (If the array size is 1 or minor)
    if(mainArray.length <= 1)
        return mainArray;

    let middle = Math.ceil(mainArray.length / 2);   //Find middle point of array (ceil: rounds the number up to the largest)
    
    let leftHalf = mainArray.slice(0, middle);   //Slice mainArray from the index 0 to middle and save it inside a new array called leftHalf
    let rightHalf = mainArray.slice(middle, mainArray.length);   //Slice mainArray from the index middle to mainArray.length and save it inside a new array called rightHalf

    leftHalf = mergeSortDivider(leftHalf);   //Recursivelly call the mergeSortDivider() function and pass the left vector as parameter until the array size is 1
    rightHalf = mergeSortDivider(rightHalf);   //Recursivelly call the mergeSortDivider() function and pass the right vector as parameter until the array size is 1

    return merge(leftHalf, rightHalf, leftElement, rightElement);   //Call the merge() function to merge the arrays
}

//Merge in order two arrays
function merge(arrayLeft, arrayRight, lElement, rElement)
{
    var divBlocks = document.querySelectorAll(".divElement");   //Get all the elements in the document with class "divElement" 
    transitionSpeed = parseInt(document.getElementById("rngSpeed").value);

    //alert(lElement + " " + rElement);

    let arraySorted = new Array(arrayLeft.length + arrayRight.length);   //Create array with the size of the sum of the leftArray and rightArray
    let leftCount = rightCount = sortedCount = 0;   //Counters

    //Until the counter reach the end of both arrays (left and right)
    while((leftCount < arrayLeft.length) && (rightCount < arrayRight.length))
    {
        //If the element on the left array is smaller than the elemet on the right array increase the left counter
        if (arrayLeft[leftCount] <= arrayRight[rightCount])
        {
            arraySorted[sortedCount] = arrayLeft[leftCount];
            leftCount ++;
        }

        //If the element on the right array is smaller than the elemet on the left array increase the right counter
        else if (arrayRight[rightCount] < arrayLeft[leftCount])
        {
            arraySorted[sortedCount] = arrayRight[rightCount];
            rightCount ++;
        }

        sortedCount ++;   //For each cycle, increase the counter for the arrySorted
    }

    //Similar cycle to the previous one but only if the right array has been completely checked
    while (leftCount < arrayLeft.length)
    {
        arraySorted[sortedCount] = arrayLeft[leftCount];
        leftCount ++;
        sortedCount ++;
    }

    //Similar cycle to the previous one but only if the left array has been completely checked
    while (rightCount < arrayRight.length)
    {
        arraySorted[sortedCount] = arrayRight[rightCount];
        rightCount ++;
        sortedCount ++;
    }

    return arraySorted;
}