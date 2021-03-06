<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palidrome string</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <script type="text/javascript" src="../scripts/palindrome.js"></script> 
</head>
<body>
    <?php include '../assets/header.php' ?>   <!-- Header of the page -->
    <?php include '../assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <div id="palindrome">
                <h1>Check if a string is palindrome</h1>
                <p>Write a function to check if a string is palindrome</p>
                <label for="txtString">Insert a string: </label>
                <input type="text" id="txtString">
                <button id="bttCheckPalindrome" onclick="isPalindrome()">Check if the string is palindrome</button>
                <p id="pResult"></p>
            </div>
        </section>
    </main>
    <?php include '../assets/footer.php' ?>   <!-- Footer of the page -->

    <!-- Javascript -->
    <script>
        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("exercises").id = "active";
        }
    </script>
</body>
</html>