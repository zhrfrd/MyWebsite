var myArray = new Array();
var arrayLength;
var bar;// = new Array();

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

//-------------------------------------------------


    /*setInterval(function(){
    for(var count1 = 0; count1 < myArray.length; count1 ++) 
    {
        //Find the smallest element in the array
        let min = count1;

        for(let count2 = count1 + 1; count2 < myArray.length; count2 ++)
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
    }}, 1000);*/

    //document.getElementById("containerBars").appendChild(document.getElementsByClassName("divBar"));
    //document.getElementById("txtSortedArray").value = myArray;
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
}