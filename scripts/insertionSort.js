
var transitionSpeed;

async function insertionSort()
{
    var divBlocks = document.querySelectorAll(".divElement");   //Get all the elements in the document with class "divElement" 
    var arrKey, j;

    transitionSpeed = parseInt(document.getElementById("rngSpeed").value);

    for (var i = 1; i < arrayLength; i++)
    {
        arrKey = myArray[i];
        j = i - 1;

        divBlocks[i].style.backgroundColor = "red";
        divBlocks[j].style.backgroundColor = "red";

        //Add delay and re-change color
        await new Promise((resolve) =>
            setTimeout(() =>
            {
                divBlocks[i].style.backgroundColor = "purple";
                divBlocks[j].style.backgroundColor = "purple";
                resolve();
            }, transitionSpeed)
        );

        while ((j >= 0) && (myArray[j] > arrKey))
        {
            await swapDivsInsertion(divBlocks[j], divBlocks[j + 1]);
            divBlocks[j].style.backgroundColor = "green";
            divBlocks[j + 1].style.backgroundColor = "red";
            
            divBlocks = document.querySelectorAll(".divElement");

            myArray[j + 1] = myArray[j];
            j --;
        }

        divBlocks[j + 1].style.backgroundColor = "green";
        myArray[j + 1] = arrKey; 
    }

    alert(myArray);
}

//Promise to swap the two elements
function swapDivsInsertion(divMin, div1)
{
    return new Promise ((resolve) =>
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