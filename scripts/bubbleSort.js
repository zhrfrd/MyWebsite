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
async function bubbleSort() 
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
                await swapDivsBubble(divBlocks[j], divBlocks[j + 1]);   //Await "stops" the normal execution flow to run the function (swap). await needs to return the Promise result
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
function swapDivsBubble(div1, div2) 
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