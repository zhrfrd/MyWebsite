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

function calculateMergeSort()
{
    myArray = mergeSort (myArray);
    document.getElementById("txtSortedArray").value = myArray;
}

function mergeSort(mainArray)
{
    //Case base (If the array size is 1 or minor)
    if(mainArray.length <= 1)
        return mainArray;

    let middle = Math.ceil(mainArray.length / 2);   //Find middle point of array (ceil: rounds the number up to the largest)
    
    let leftHalf = mainArray.slice(0, middle);   //Slice mainArray from the index 0 to middle and save it inside a new array called leftHalf
    let rightHalf = mainArray.slice(middle, mainArray.length);   //Slice mainArray from the index middle to mainArray.length and save it inside a new array called rightHalf

    leftHalf = mergeSort(leftHalf);   //Recursivelly call the mergeSort() function and pass the left vector as parameter until the array size is 1
    rightHalf = mergeSort(rightHalf);   //Recursivelly call the mergeSort() function and pass the right vector as parameter until the array size is 1

    return merge(leftHalf, rightHalf);   //Call the merge() function to merge the arrays
}

//Merge in order two arrays
function merge(arrayLeft, arrayRight)
{
    let arraySorted = new Array(arrayLeft.length + arrayRight.length);   //Create array with the size of the sum of the leftArray and rightArray
    let leftCount = rightCount = sortedCount = 0;   //Counters

    //Until the counter reach the end of both arrays (left and right)
    while((leftCount < arrayLeft.length) && (rightCount < arrayRight.length))
    {
        //If the element on the left array is smaller than the elemet on the right array increase the left counter
        if (arrayLeft[leftCount] < arrayRight[rightCount])
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