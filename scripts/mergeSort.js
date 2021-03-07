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

function mergeSort(mArray)
{
    //alert(mArray);
    arrayLength = mArray.length;   //Update array length
    //If the array is compsed by 1 element exit
    if (mArray.length <= 1)
        return mArray;

    var middle = Math.floor(mArray.length / 2);   //Middle of the array
    var arrayLeft = new Array(middle);                    //Initialise the two subarrays sizes
    var arrayRight = new Array(mArray.length - middle);   //
    var countLeft = 0;
    var countRight = 0;

    while (countLeft < arrayLeft.length)
    {
        arrayLeft[countLeft] = mArray[countLeft];
        countLeft ++
    }

    while (countRight < arrayRight.length)
    {
        arrayRight[countRight] = mArray[countRight];
        countRight ++
    }

    var arraySorted = new Array(mArray.length);

    alert("LEFT " + arrayLeft.length + " " + arrayLeft);
    arrayLeft = mergeSort(arrayLeft);   //Recursively create the subarrays on the left side
    alert("RIGHT " + arrayRight.length + " " + arrayRight);
    arrayRight = mergeSort(arrayRight);   //Recursively create the subarrays on the right side
    arraySorted = merge(arrayLeft, arrayRight);   //Merge the arrays

    return arraySorted;
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