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

    for (let i = 0; i < arrayLength; i++) 
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
    var min;

    transitionSpeed = parseInt(document.getElementById("rngSpeed").value);

    for (var i = 0; i < arrayLength; i ++)
    {
        min = i;

        for (var j = i + 1; j < arrayLength; j ++)
        {
            divBlocks[min].style.backgroundColor = "red";
            divBlocks[j].style.backgroundColor = "red";

            //Add delay ang re-change color
            await new Promise((resolve) =>
                setTimeout(() =>
                {
                    divBlocks[j].style.backgroundColor = "purple";
                    resolve();
                }, transitionSpeed)
            );

            if (myArray[j] < myArray[min])
            {
                divBlocks[min].style.backgroundColor = "purple";
                min = j;
                divBlocks[min].style.backgroundColor = "red";
            }
        }

        if(min != i)
        {
            await swapDivs(divBlocks[i], divBlocks[min]);
            divBlocks[min].style.backgroundColor = "green";
            divBlocks = document.querySelectorAll(".divElement");

            //Swap arry elements
            tempArr = myArray[i];
            myArray[i] = myArray[min];
            myArray[min] = tempArr;
        }

        else
            divBlocks[min].style.backgroundColor = "green";
    }

    alert(myArray);
}

//Promise to swap the two elements
function swapDivs(div1, divMin) 
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