var res;

function calculateFactorial()
{
    var num = parseInt(document.getElementById("txtNumber").value);
    res = 1;

    for (var count = num; count > 0; count --)
    {
        res *= count;
    }

    document.getElementById("txtResult").value = res;
}

//Function called once, when the HTMLbuton is clicked
function calculateFactorialRecursive()
{
    var num = parseInt(document.getElementById("txtNumber").value);
    count = num;
    res = 1;

    document.getElementById("txtResult").value = factorialRecursive(count);
}

//Recurive function
function factorialRecursive(count)
{
    if (count > 1)
    {
        res *= count --;
        res = factorialRecursive(count);
    }

    return res;
}