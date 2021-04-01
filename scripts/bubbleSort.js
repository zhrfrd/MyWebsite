var myArray = new Array();
var arrLength;


function populate()
{
    var container = document.getElementById("containerBars");
    alert("populate");
    for (var i = 0; i < 20; i++) 
    {
        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);
  
        // Creating element div
        var array_ele = document.createElement("div");
  
        // Adding class 'block' to div
        array_ele.classList.add("divBar");
  
        // Adding style to div
        array_ele.style.height = `${value * 3}px`;   //Set height to div in relationship to the random value generated
        array_ele.style.transform = `translate(${i * 30}px)`;    //Set the following arrayElement next to the revious one
  
        // Appending created elements to index.html 
        container.appendChild(array_ele);
    }
}

// Promise to swap two blocks
function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}
  
// Asynchronous BubbleSort function
async function BubbleSort() {
    alert("bub");
    var blocks = document.querySelectorAll(".divBar");
  
    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
  
            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );
  
            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1]
                        .childNodes[0].innerHTML);
  
            // To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".divBar");
            }
  
            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        blocks[blocks.length - i - 1]
                .style.backgroundColor = "#13CE66";
    }
}

function calculateBubbleSortRecursive()
{
    let count1 = 0;
    let count2 = 1;
    let arrLength = parseInt(document.getElementById("txtLength").value);
    let arraySorted = bubbleSortRecursive(count1, count2, arrLength);

    document.getElementById("txtSortedArray").value = arraySorted;
}

function bubbleSortRecursive(count1, count2, arrLength)
{
    let temp;

    //Case base
    if (myArray.length == 1)
        return myArray;

    else if ((myArray.length > 1) && (count1 > myArray.length))
    {
        if ((myArray[count1] < myArray[count2]) && (count2 < myArray.length))
        {
            //alert(count1 + " " + count2);
            count2 ++;
            count1 ++;
            myArray = selectionSortRecursive(count1, count2); 
        }

        else if ((myArray[count1] > myArray[count2]) && (count2 < myArray.length))
        {
            //Swapping elements
            temp = myArray[count1];
            myArray[count1] = myArray[count2];
            myArray[count2] = temp;
            count2 ++;
            count1 ++;
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