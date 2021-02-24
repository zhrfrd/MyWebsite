var zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, tentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, firsthalf, secondhalf, rowone, rowtwo, rowthree, firsttwelve, secondtwelve, thirdtwelve, even, odd, red, black;
var win = 0;
var pocket;
var pending;

//Start a new game
function start()
{
    clearTable();
    document.getElementById("pResult").textContent = 0;
    pocket = prompt("Insert amount of money you want to start with!");
    document.getElementById("pPocket").textContent = pocket;
    document.getElementById("bttStart").disabled = true;
    document.getElementById("bttSpin").disabled = false;
    document.getElementById("bttRestart").disabled = false;
}

//Spin the weel and do the calculation
function spin()
{
    //Variables
    pendig = 0;
    win = 0;

    zero = parseInt(document.getElementById("zero").value);
    one = parseInt(document.getElementById("one").value);
    two = parseInt(document.getElementById("two").value);
    three = parseInt(document.getElementById("three").value);
    four = parseInt(document.getElementById("four").value);
    five = parseInt(document.getElementById("five").value);
    six = parseInt(document.getElementById("six").value);
    seven = parseInt(document.getElementById("seven").value);
    eight = parseInt(document.getElementById("eight").value);
    nine = parseInt(document.getElementById("nine").value);
    ten = parseInt(document.getElementById("ten").value);
    eleven = parseInt(document.getElementById("eleven").value);
    twelve = parseInt(document.getElementById("twelve").value);
    thirteen = parseInt(document.getElementById("thirteen").value);
    fourteen = parseInt(document.getElementById("fourteen").value);
    fifteen = parseInt(document.getElementById("fifteen").value);
    sixteen = parseInt(document.getElementById("sixteen").value);
    seventeen = parseInt(document.getElementById("seventeen").value);
    eighteen = parseInt(document.getElementById("eighteen").value);
    nineteen = parseInt(document.getElementById("nineteen").value);
    twenty = parseInt(document.getElementById("twenty").value);
    twentyone = parseInt(document.getElementById("twentyone").value);
    twentytwo = parseInt(document.getElementById("twentytwo").value);
    twentythree = parseInt(document.getElementById("twentythree").value);
    twentyfour = parseInt(document.getElementById("twentyfour").value);
    twentyfive = parseInt(document.getElementById("twentyfive").value);
    twentysix = parseInt(document.getElementById("twentysix").value);
    twentyseven = parseInt(document.getElementById("twentyseven").value);
    twentyeight = parseInt(document.getElementById("twentyeight").value);
    twentynine = parseInt(document.getElementById("twentynine").value);
    thirty = parseInt(document.getElementById("thirty").value);
    thirtyone = parseInt(document.getElementById("thirtyone").value);
    thirtytwo = parseInt(document.getElementById("thirtytwo").value);
    thirtythree = parseInt(document.getElementById("thirtythree").value);
    thirtyfour = parseInt(document.getElementById("thirtyfour").value);
    thirtyfive = parseInt(document.getElementById("thirtyfive").value);
    thirtysix = parseInt(document.getElementById("thirtysix").value);
    firsthalf = parseInt(document.getElementById("firsthalf").value);
    secondhalf = parseInt(document.getElementById("secondhalf").value);
    rowone = parseInt(document.getElementById("rowone").value);
    rowtwo = parseInt(document.getElementById("rowtwo").value);
    rowthree = parseInt(document.getElementById("rowthree").value);
    firsttwelve = parseInt(document.getElementById("firsttwelve").value);
    secondtwelve = parseInt(document.getElementById("secondtwelve").value);
    thirdtwelve = parseInt(document.getElementById("thirdtwelve").value);
    even = parseInt(document.getElementById("even").value);
    odd = parseInt(document.getElementById("odd").value);
    red = parseInt(document.getElementById("red").value);
    black = parseInt(document.getElementById("black").value);

    //Total money betted
    pending = zero + one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyone + twentytwo + twentythree + twentyfour + twentyfive + twentysix + twentyseven + twentyeight + twentynine + thirty + thirtyone + thirtytwo + thirtythree + thirtyfour + thirtyfive + thirtysix + firsthalf + secondhalf + rowone + rowtwo + rowthree + firsttwelve + secondtwelve + thirdtwelve + even + odd + black + red;
    pocket -= pending;   //Update pocket

    document.getElementById("pPocket").textContent = pocket;
    document.getElementById("bttSpin").disabled = false;

    var result = Math.floor(Math.random() * 37);   //Generate a random number from 0 to 36
    document.getElementById("pResult").textContent = result;   //Print the result on the page

    checkTable(result);   //Check the table for any wins

    pocket += win;   //Update pocket
    document.getElementById("pPocket").textContent = pocket;
}

function checkTable(result)
{
    if ((result == 0) && (zero > 0))
        win += (zero * 36);

    if ((result == one) && (one > 0))
        win += (one * 36);

    if ((result == two) && (two > 0))
        win += (two * 36);

    if ((result == three) && (three > 0))
        win += (three * 36);
    
    if ((result == four) && (four > 0))
        win += (four * 36);
    
    if ((result == five) && (five > 0))
        win += (five * 36);

    if ((result == six) && (six > 0))
        win += (six * 36);

    if ((result == seven) && (seven > 0))
        win += (seven * 36);

    if ((result == eight) && (eight > 0))
        win += (eight * 36);

    if ((result == nine) && (nine > 0))
        win += (nine * 36);

    if ((result == ten) && (ten > 0))
        win += (ten * 36);

    if ((result == eleven) && (eleven > 0))
        win += (eleven * 36);
    
    if ((result == twelve) && (twelve > 0))
        win += (twelve * 36);
    
    if ((result == thirteen) && (thirteen > 0))
        win += (thirteen * 36);

    if ((result == fourteen) && (fourteen > 0))
        win += (fourteen * 36);

    if ((result == fifteen) && (fifteen > 0))
        win += (fifteen * 36);

    if ((result == sixteen) && (sixteen > 0))
        win += (sixteen * 36);

    if ((result == seventeen) && (seventeen > 0))
        win += (seventeen * 36);

    if ((result == eighteen) && (eighteen > 0))
        win += (eighteen * 36);

    if ((result == nineteen) && (nineteen > 0))
        win += (nineteen * 36);
    
    if ((result == twenty) && (twenty > 0))
        win += (twenty * 36);
    
    if ((result == twentyone) && (twentyone > 0))
        win += (twentyone * 36);

    if ((result == twentytwo) && (twentytwo > 0))
        win += (twentytwo * 36);

    if ((result == twentythree) && (twentythree > 0))
        win += (twentythree * 36);

    if ((result == twentyfour) && (twentyfour > 0))
        win += (twentyfour * 36);

    if ((result == twentyfive) && (twentyfive > 0))
        win += (twentyfive * 36);

    if ((result == twentysix) && (twentysix > 0))
        win += (twentysix * 36);

    if ((result == twentyseven) && (twentyseven > 0))
        win += (twentyseven * 36);
    
    if ((result == twentyeight) && (twentyeight > 0))
        win += (twentyeight * 36);
    
    if ((result == twentynine) && (twentynine > 0))
        win += (twentynine * 36);

    if ((result == thirty) && (thirty > 0))
        win += (thirty * 36);

    if ((result == thirtyone) && (thirtyone > 0))
        win += (thirtyone * 36);

    if ((result == thirtytwo) && (thirtytwo > 0))
        win += (thirtytwo * 36);

    if ((result == thirtythree) && (thirtythree > 0))
        win += (thirtythree * 36);

    if ((result == thirtyfour) && (thirtyfour > 0))
        win += (thirtyfour * 36);

    if ((result == thirtyfive) && (thirtyfive > 0))
        win += (thirtyfive * 36);

    if ((result == thirtysix) && (thirtysix > 0))
        win += (thirtysix * 36);

    //Evens & odds red & blacks firsthalf & secondhalf
    if ((even > 0) && ((result % 2) == 0))
        win += (even * 2);

    if ((odd > 0) && ((result % 2) != 0))
        win += (odd * 2);

    if ((red > 0) && ((result == 2) || (result == 4) || (result == 6) || (result == 8) || (result == 10) || (result == 11) || (result == 13) || (result == 15) || (result == 17) || (result == 19) || (result == 20) || (result == 22) || (result == 24) || (result == 26) || (result == 28) || (result == 29) || (result == 31) || (result == 33) || (result == 35)))
        win += (red * 2);

    if ((black > 0) && ((result == 3) || (result == 5) || (result == 7) || (result == 9) || (result == 12) || (result == 14) || (result == 16) || (result == 18) || (result == 21) || (result == 23) || (result == 25) || (result == 27) || (result == 30) || (result == 32) || (result == 34) || (result == 36)))
        win += (black * 2);

    if ((firsthalf > 0) && ((1 <= result) && (result <= 18)))
        win += (firsthalf * 2);

    if ((secondhalf > 0) && ((19 <= result) && (result <= 36)))
        win += (secondhalf * 2);

    //Row1 Row2 Row3 First12 Second12 Third12
    if ((rowone > 0) && ((result % 3) == 0))
        win += (rowone * 3);

    if ((rowtwo > 0) && ((result == 2) || (result == 5) || (result == 8) || (result == 11) || (result == 14) || (result == 17) || (result == 20) || (result == 23) || (result == 26) || (result == 29) || (result == 32) || (result == 35)))
        win += (rowtwo * 3);

    if ((rowthree > 0) && ((result == 1) || (result == 4) || (result == 7) || (result == 10) || (result == 13) || (result == 16) || (result == 19) || (result == 22) || (result == 25) || (result == 28) || (result == 31) || (result == 34)))
        win += (rowthree * 3)

    if ((firsttwelve > 0) && ((1 <= result) && (result <= 12)))
        win += (firsttwelve * 3);

    if ((secondtwelve > 0) && ((13 <= result) && (result <= 24)))
        win += (secondtwelve * 3);

    if ((thirdtwelve > 0) && ((25 <= result) && (result <= 36)))
        win += (thirdtwelve * 3);

    return win;
}

//Restart the game
function restart()
{
    var choice = confirm("Do you really want to restart the game?!?");   //Dialog box (Yes or No)

    if (choice == true)
        start();

    else
        ;
}

//Clear table
function clearTable()
{
    document.getElementById("zero").value = 0;
    document.getElementById("one").value = 0;
    document.getElementById("two").value = 0;
    document.getElementById("three").value = 0;
    document.getElementById("four").value = 0;
    document.getElementById("five").value = 0;
    document.getElementById("six").value = 0;
    document.getElementById("seven").value = 0;
    document.getElementById("eight").value = 0;
    document.getElementById("nine").value = 0;
    document.getElementById("ten").value = 0;
    document.getElementById("eleven").value = 0;
    document.getElementById("twelve").value = 0;
    document.getElementById("thirteen").value = 0;
    document.getElementById("fourteen").value = 0;
    document.getElementById("fifteen").value = 0;
    document.getElementById("sixteen").value = 0;
    document.getElementById("seventeen").value = 0;
    document.getElementById("eighteen").value = 0;
    document.getElementById("nineteen").value = 0;
    document.getElementById("twenty").value = 0;
    document.getElementById("twentyone").value = 0;
    document.getElementById("twentytwo").value = 0;
    document.getElementById("twentythree").value = 0;
    document.getElementById("twentyfour").value = 0;
    document.getElementById("twentyfive").value = 0;
    document.getElementById("twentysix").value = 0;
    document.getElementById("twentyseven").value = 0;
    document.getElementById("twentyeight").value = 0;
    document.getElementById("twentynine").value = 0;
    document.getElementById("thirty").value = 0;
    document.getElementById("thirtyone").value = 0;
    document.getElementById("thirtytwo").value = 0;
    document.getElementById("thirtythree").value = 0;
    document.getElementById("thirtyfour").value = 0;
    document.getElementById("thirtyfive").value = 0;
    document.getElementById("thirtysix").value = 0;
    document.getElementById("firsthalf").value = 0;
    document.getElementById("secondhalf").value = 0;
    document.getElementById("rowone").value = 0;
    document.getElementById("rowtwo").value = 0;
    document.getElementById("rowthree").value = 0;
    document.getElementById("firsttwelve").value = 0;
    document.getElementById("secondtwelve").value = 0;
    document.getElementById("thirdtwelve").value = 0;
    document.getElementById("even").value = 0;
    document.getElementById("odd").value = 0;
    document.getElementById("red").value = 0;
    document.getElementById("black").value = 0;
}