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
    document.getElementById("bttQuickSort").disabled = false;
}

function calculateQuickSort()
{
    myArray = quickSort(myArray);
    document.getElementById("txtSortedArray").value = myArray;
}

function quickSort(arr)
{
    alert("sd");
    //Case base
    if (arr.length == 1)
        return arr;

    let tmp, pivot;
    let i = -1;

    while (i < arr.length)
    {
        pivot = arr[arr.length - 1];

        for (let j = i + 1; j < arr.length; j ++)
        {
            if (arr[j] < pivot)
            {
                i ++;
                tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }

            alert(j + " " + i);
        }

        alert (arr);

        tmp = arr[i + 1];
        arr[i + 1] = pivot;
        arr[arr.length - 1] = tmp;
    }

    

    return arr;
}