function isPalindrome()
{
    var myString = document.getElementById("txtString").value;
    var stringLength = myString.length;
    var count1 = 0;

    for (var count2 = stringLength - 1; count2 > 0; count2 --)
    {
        if (myString[count1] != myString[count2])
        {
            document.getElementById("pResult").textContent = "The string is NOT palindrome";
            return false;
        }

        count1 ++;
    }

    document.getElementById("pResult").textContent = "The string is palindrome";
    return true;
}