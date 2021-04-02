var myArray = new Array();
var containerBar = document.getElementById("containerBar");
var arrayLength;
var transitionSpeed;

//Function to generate the array of divBlocks
function populateArray() 
{
    let widthContainerBars = 0;
    document.getElementById("containerBar").innerHTML = '';

    arrayLength = parseInt(document.getElementById("rngSize").value);

    for (var i = 0; i < arrayLength; i++) 
    {
        var value = Math.ceil(Math.random() * 100);   //Generate a random number from 1 to 100 inclusive
        var arrayElementDiv = document.createElement("div");   //Create a div HTML element

        myArray[i] = value;   //Populate array
        arrayElementDiv.classList.add("divElement");   //Assign a class to the div HTML element
  
        //Create style to the div element
        arrayElementDiv.style.height = `${value * 3}px`;   //Set height of the div
        arrayElementDiv.style.transform = `translate(${i * 30}px)`;   //Set the position of the following div
  
        //Create the labels to show the value of the div
        var arrayElementDivLabel = document.createElement("label");
        arrayElementDivLabel.classList.add("divLabelStyle");
        arrayElementDivLabel.textContent = value;

        arrayElementDiv.appendChild(arrayElementDivLabel);   
        containerBar.appendChild(arrayElementDiv);
        document.getElementById("containerBar").appendChild(arrayElementDiv);

        widthContainerBars += 30;
    }

    document.getElementById("containerAllBars").style.width = widthContainerBars + "px";   //Update width of the containerAllBars
}

//Asynchronous BubbleSort function (Accepts await expressions)
async function selectionSort() 
{
    var divBlocks = document.querySelectorAll(".divElement");   //Get all the elements in the document with class "divElement" and 
    var tempArr;

    transitionSpeed = parseInt(document.getElementById("rngSpeed").value);
  
    //Scan through the array
    for (var i = 0; i < arrayLength; i ++)
    {
        for (var j = 0; j < arrayLength - i - 1; j ++)   
        {
            //Highlight the two divBlocks that are compared 
            divBlocks[j].style.backgroundColor = "red";
            divBlocks[j + 1].style.backgroundColor = "red";
  
            var value1 = myArray[j];       //Get the value of the block label, save it as a number ad assign it to the variable
            var value2 = myArray[j + 1];   //
  
            //Compare the value of the two div blocks
            if (value1 > value2) 
            {
                await swap(divBlocks[j], divBlocks[j + 1]);   //Await "stops" the normal execution flow to run the function (swap). await needs to return the Promise result
                divBlocks = document.querySelectorAll(".divElement");   //Update divBlocks after swapping
            }

            //Swap between array elements
            if (myArray[j] > myArray[j + 1])
            {
                tempArr = myArray[j];
                myArray[j] = myArray[j + 1]
                myArray[j + 1] = tempArr;
            }
  
            //Changing the color to the previous one
            divBlocks[j].style.backgroundColor = "purple";
            divBlocks[j + 1].style.backgroundColor = "purple";
        }

        //Change the color of the last element to green decrementally 
        divBlocks[arrayLength - i - 1].style.backgroundColor = "green";
    }

    alert(myArray);
}

//Promise to swap the two elements
function swap(div1, div2) 
{
    return new Promise((resolve) => 
    {
        //For exchanging styles of two divBlocks
        var tempDiv;

        //Swap between divs
        tempDiv = div1.style.transform;
        div1.style.transform = div2.style.transform;
        div2.style.transform = tempDiv;

        window.requestAnimationFrame(function() 
        {
            //Insert updated element after milliseconds waiting time
            setTimeout(() => 
            {
                containerBar.insertBefore(div2, div1);
                resolve();
            }, transitionSpeed);
        });
    });
}

/*var myArray = new Array();
var arrayLength;
var bar;   // = new Array();

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
    var temp;
    var t = 0;
    var tempBar = document.createElement("div");
    tempBar.classList.add("divBar");

//------------------------------------

    var count1 = 0;
    var count2 = count1 + 1;
    var min;

    for(var count1 = 0; count1 < myArray.length; count1 ++) 
    {
        //Find the smallest element in the array
        var min = count1;

        for(var count2 = count1 + 1; count2 < myArray.length; count2 ++)
        {
            if(myArray[count2] < myArray[min]) 
                min = count2;   //Once found the smallest element set it as "min"
        }

        if (min != count1) 
        {
            //Swap the elements
            temp = myArray[count1]; 
            myArray[count1] = myArray[min];
            myArray[min] = temp;   
            
            document.getElementsByClassName("divBar")[min].before(document.getElementsByClassName("divBar")[count1]);
            document.getElementsByClassName("divBar")[count1].before(document.getElementsByClassName("divBar")[min]);
        }
    }
}

function calculateSelectionSortRecursive()
{
    let count1 = 0;
    let count2 = 1;
    let arraySorted = selectionSortRecursive(count1, count2);

    alert(arraySorted);
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
}*/