var myArray = new Array();
var containerBar = document.getElementById("containerBar");
var arrayLength;

function populateArray()
{
    let widthContainerBars = 0;
    document.getElementById("containerBar").innerHTML = '';

    arrayLength = parseInt(document.getElementById("rngSize").value);

    for (var i = 0; i < arrayLength; i++) 
    {
        var value = Math.ceil(Math.random() * 100);   //Generate a random number from 1 to 100 inclusive
        var arrayElementDiv = document.createElement("div");   //Create a div HTML element
        var tempArrayElementDiv = document.createElement("div");   //Create temporary div Element (For Mergesort...)

        myArray[i] = value;   //Populate array
        arrayElementDiv.classList.add("divElement");   //Assign a class to the div HTML element
        tempArrayElementDiv.classList.add("tempDivElement");   //Assign a class to the temporary div HTML element (For Mergesort...)
  
        //Create style to the div element
        arrayElementDiv.style.height = `${value * 3}px`;   //Set height of the div
        arrayElementDiv.style.transform = `translate(${i * 30}px)`;   //Set the position of the following div

        //Create style to the div element
        //tempArrayElementDiv.style.height = `${value * 3}px`;   //Set height of the div
        tempArrayElementDiv.style.transform = `translate(${i * 30}px)`;   //Set the position of the following div
  
        //Create the labels to show the value of the div
        var arrayElementDivLabel = document.createElement("label");
        arrayElementDivLabel.classList.add("divLabelStyle");
        arrayElementDivLabel.textContent = value;

        arrayElementDiv.appendChild(arrayElementDivLabel);   
        containerBar.appendChild(arrayElementDiv);
        document.getElementById("containerBar").appendChild(arrayElementDiv);
        //Add Temporary elements to the container (For Mergesort)
        containerBar.appendChild(tempArrayElementDiv);
        document.getElementById("containerBar").appendChild(tempArrayElementDiv);

        widthContainerBars += 30;
    }

    document.getElementById("containerAllBars").style.width = widthContainerBars + "px";   //Update width of the containerAllBars
}