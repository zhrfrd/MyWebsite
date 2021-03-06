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
    mergeSort (myArray);
}

function mergeSort(mArray)
{
    arrayLength = mArray.length;   //Update array length
    
    //If the array is compsed by 1 element exit
    if (arrayLength < 2)
        return;

    var middle = parseInt(arrayLength / 2);   //Middle of the array
    arrayLeft.length = middle;                  //Initialise the two subarrays sizes
    arrayRight.length = arrayLength - middle;   //

    //alert(middle + " " + arrayLeft.length + " " + arrayRight.length);

    //Populate the array on the left side with the elements on the first half of the main array
    for (var i = 0; i < middle - 1; i ++)
    {
        arrayLeft[i] = mArray[i];
    }

    //Populate the array on the right side with the elements on the second half of the main array
    for (var j = middle; j < arrayLength - 1; j ++)
    {
        arrayRight[j] = mArray[j];
    }

    //alert("LEFT");
    mergeSort(arrayLeft);   //Recursively create the subarrays on the left side
    //alert("RIGHT");
    mergeSort(arrayRight);   //Recursively create the subarrays on the right side
    merge(arrayLeft, arrayRight, mArray);   //Merge the arrays
}

function merge(arrayLeft, arrayRight, myArray)
{
    
    //alert(arrayLeft.length + " " + arrayRight.length + " " + myArray.length + " " + "FIGAAAAA");
}