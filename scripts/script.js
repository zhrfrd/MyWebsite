var container = document.getElementById("arrayContainer");
  
//Function to generate the array of blocks
function generatearray() 
{
    for (var i = 0; i < 20; i++) 
    {
        //Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);
  
        //Creating element div
        var arrayElement = document.createElement("div");
  
        // Adding class 'block' to div
        arrayElement.classList.add("divElement");
  
        //Adding style to div
        arrayElement.style.height = `${value * 3}px`;
        arrayElement.style.transform = `translate(${i * 30}px)`;
  
        //Creating label element for displaying 
        //size of particular block
        var arrayElementLabel = document.createElement("label");
        arrayElementLabel.classList.add("divElementStyle");
        arrayElementLabel.innerText = value;
  
        //Appending created elements to index.html 
        arrayElement.appendChild(arrayElementLabel);
        container.appendChild(arrayElement);
    }
}
  
//Promise to swap the two element of the array
function swap(el1, el2) 
{
    return new Promise((resolve) => 
    {
        //For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() 
        {
            //For waiting for .25 sec
            setTimeout(() => 
            {
                container.insertBefore(el2, el1);
                resolve();
            }, 500);
        });
    });
}
  
//Asynchronous BubbleSort function (Accepts await expressions)
async function BubbleSort() 
{
    var blocks = document.querySelectorAll(".divElement");   //Get all the elements in the document with class "divElement" and 
  
    //Scan through the array
    for (var i = 0; i < blocks.length; i ++) 
    {
        for (var j = 0; j < blocks.length - i - 1; j ++)
        {
            //Highlight the two blocks that are compared 
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
  
            var value1 = Number(blocks[j].childNodes[0].textContent);       //Get the value of the block label, save it as a number ad assign it to the variable
            var value2 = Number(blocks[j + 1].childNodes[0].textContent);   //
  
            // To compare value of two blocks
            if (value1 > value2) 
            {
                await swap(blocks[j], blocks[j + 1]);   //Await "stops" the normal execution flow to run the function (swap). await needs to return the Promise result
                blocks = document.querySelectorAll(".divElement");
            }
  
            //Changing the color to the previous one
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
}
  
//Calling generatearray function
generatearray();
  
//Calling BubbleSort function
BubbleSort();