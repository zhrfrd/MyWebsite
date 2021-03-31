<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercises</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <script type="text/javascript" src="../scripts/dropdownMenu.js"></script> 
</head>
<body>
    <?php include 'assets/header.php' ?>   <!-- Header of the page -->
    <?php include 'assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <div id="myExercises">
                <h1>Exercises</h1>
                <p>In this section I post all the exercises that I do.</p>
                <ol>
                    <li><a href="../exercises/palindrome.php">Find if a string is palindrome</a>.</li>
                </ol>
            </div>
        </section>
    </main>
    <?php include 'assets/footer.php' ?>   <!-- Footer of the page -->

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