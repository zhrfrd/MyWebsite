
var sortedArray = new Array();
var transitionSpeed;
var result;

var i = j = k = 0;
// var tempDivBlocks = document.querySelectorAll(".tempDivElement");

function mergeSort()
{
    sortedArray = divideArray (myArray);
    divBlocks = document.querySelectorAll(".divElement");   //Get all the elements in the document with class "divElement" -----> TO BE REMOVED
    alert(sortedArray + " \n " + tempArr);
}

function divideArray(mainArray)
{
    //Case base (If the array size is 1 or minor)
    if(mainArray.length <= 1)
        return mainArray;

    let middle = Math.ceil(mainArray.length / 2);   //Find middle point of array (ceil: rounds the number up to the largest)
    
    let leftHalf = mainArray.slice(0, middle);   //Slice mainArray from the index 0 to middle and save it inside a new array called leftHalf
    let rightHalf = mainArray.slice(middle, mainArray.length);   //Slice mainArray from the index middle to mainArray.length and save it inside a new array called rightHalf

    leftHalf = divideArray(leftHalf);   //Recursivelly call the mergeSortDivider() function and pass the left vector as parameter until the array size is 1
    rightHalf = divideArray(rightHalf);   //Recursivelly call the mergeSortDivider() function and pass the right vector as parameter until the array size is 1

    result = mergeArrays(leftHalf, rightHalf);
    return result;   //Call the merge() function to merge the arrays
}

//Merge in order two arrays
function mergeArrays(arrayLeft, arrayRight)
{
    var divBlocks = document.querySelectorAll(".divElement");   //Get all the elements in the document with class "divElement" 
    var tempDivBlocks = document.querySelectorAll(".tempDivElement");
    transitionSpeed = parseInt(document.getElementById("rngSpeed").value);

    let arraySorted = new Array();   //Create array with the size of the sum of the leftArray and rightArray
    let leftCount = rightCount = 0;   //Counters
    var sortedCount = 0;//
    var tempDivCounter = 0;
    
    // alert(arrayLeft.length + " " + arrayRight.length);
    
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

        //alert(arraySorted);

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
    
    //alert(arraySorted);

    while (i < arraySorted.length)   //Scan through the sorted array...
    {
        j = 0;

        while (j < arraySorted.length)   //...Scan through the bars...
        {
            //alert(arraySorted.length + " " + arraySorted[i] + " " + arraySorted[j]);

            if (Number(divBlocks[j].childNodes[0].innerHTML) == arraySorted[i])  //...Get the value of the corresponding divElement by comparing the arraySorted value with the label of the divElement
            {
                tempDivBlocks[tempDivCounter].style.background = "red";
                tempDivBlocks[tempDivCounter].style.transform = divBlocks[j].style.transform;
                
                tempDivCounter ++;
            }

            j ++;
        }

        i ++;
    }

    while (k < arraySorted.length)
    {
        divBlocks[k].style.background = tempDivBlocks[k].style.background;
        divBlocks[k].style.transform = tempDivBlocks[k].style.transform;
        
        k++
    }
    
    //sortedCount = 0;

    var ttt = new Array();

    for (var f = 0; f < arraySorted.length; f ++)
    {
        ttt[f] = divBlocks[f].childNodes[0].innerHTML;
    }
    //alert(ttt);
    //divBlocks = document.querySelectorAll(".divElement");

    return arraySorted;
}


























function swapDivsSelection(div1, divMin) 
{
    return new Promise((resolve) => 
    {
        //For exchanging styles of two divBlocks
        var tempD;

        //Swap between divs
        tempD = div1.style.transform;
        div1.style.transform = divMin.style.transform;
        divMin.style.transform = tempD;

        window.requestAnimationFrame(function() 
        {
            //Insert updated element after milliseconds waiting time
            setTimeout(() => 
            {
                var tempDiv = document.createElement("div");   //Temporary node
                div1.parentNode.insertBefore(tempDiv, div1);

                //Swapping
                divMin.parentNode.insertBefore(div1, divMin);   //Move div1 to right before divMin
                tempDiv.parentNode.insertBefore(divMin, tempDiv);   //Move divMin to right before where div1 used to be
                tempDiv.parentNode.removeChild(tempDiv);   //Remove temporary marker node
                
                resolve();
            }, transitionSpeed);
        });
    });
}