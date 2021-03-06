<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <script type="text/javascript" src="../scripts/factorial.js"></script> 
</head>
<body>
    <?php include '../assets/header.php' ?>   <!-- Header of the page -->
    <?php include '../assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <div id="factorial">
                <h1>Factorial</h1>
                <p>Calculate factorial number</p>
                <label for="txtNumber">Insert a positive integer number: </label>
                <input type="text" size="5" id="txtNumber">
                <button id="bttCalculate" onclick="calculateFactorial()">Calculate factorial</button> or 
                <button id="bttCalculate" onclick="calculateFactorialRecursive()">Calculate factorial recursively</button>
                <br>
                <label for="txtResult">Result: </label>
                <input type="text" size="5" id="txtResult">
            </div>
        </section>
    </main>
    <?php include '../assets/footer.php' ?>   <!-- Footer of the page -->

    <!-- Javascript -->
    <script>
        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("algorithms").id = "active";
        }
    </script>
</body>
</html>