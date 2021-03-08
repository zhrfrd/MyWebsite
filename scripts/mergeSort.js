var myArray = new Array();
var arrayLeft = new Array();
var arrayRight = new Array();
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
    alert("sd")
    document.getElementById("txtSortedArray").value = myArray;
}

function mergeSort(arr)
{
    if(arr.length <= 1) return arr;
    // remember that we said merge sort uses divide and conquer
        // algorithm pattern

    // it firsts know the half point of the array.
    var halfPoint = Math.ceil(arr.length / 2);

    // and then splice the array from the beginning up to the half point.
    // but for the fact that merge sort needs the array to be of one element, it will keep splicing that half till it fulfills the condition of having one element array.

    var firstHalf = mergeSort(arr.splice(0, halfPoint));

    // second array from the half point up to the end of the array.
    var secondHalf = mergeSort(arr.splice(-halfPoint));

    // merge the array back and return the result.
    // note that we are using the helper function we created above.
    return merge(firstHalf, secondHalf);
}

function merge(arrayLeft, arrayRight)
{
    var arraySorted = new Array(arrayLeft.length + arrayRight.length);
    var leftCount = 0;
    var rightCount = 0;
    var sortedCount = 0;
    alert (arrayLeft.length);

    //Until the counter reach the end of both arrays (left and right)

    while((leftCount < arrayLeft.length) && (rightCount < arrayRight.length))
    {
        if (arrayLeft[leftCount] < arrayRight[rightCount])
        {
            arraySorted[sortedCount] = arrayLeft[leftCount];
            leftCount ++;
            sortedCount ++;
        }

        else if (arrayRight[rightCount] < arrayLeft[leftCount])
        {
            arraySorted[sortedCount] = arrayRight[rightCount];
            rightCount ++;
            sortedCount ++;
        }
    }

    while (leftCount < arrayLeft.length)
    {
        arraySorted[sortedCount] = arrayLeft[leftCount];
        leftCount ++;
        sortedCount ++;
    }

    while (rightCount < arrayRight.length)
    {
        arraySorted[sortedCount] = arrayRight[rightCount];
        rightCount ++;
        sortedCount ++;
    }

    return arraySorted;
    
}