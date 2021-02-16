<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact me</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
</head>
<body>
    <?php include 'assets/header.php' ?>   <!-- Header of the page -->
    <?php include 'assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <!--<nav>
        <div id="sideNavigationContent" style="width:20%">
            <a href="#" class="w3-bar-item w3-button">Link 1</a>
            <a href="#" class="w3-bar-item w3-button">Link 2</a>
            <a href="#" class="w3-bar-item w3-button">Link 3</a>
        </div>
    </nav>-->
    <main id="main">
        <section class="section">
            <p>Contact me</p>
        </section>
    </main>
    <?php include 'assets/footer.php' ?>   <!-- Footer of the page -->

    <!-- Javascript -->
    <script>

        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("contactMe").id = "active";
        }

    </script>
</body>
</html>