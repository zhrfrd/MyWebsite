<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact me</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <script type="text/javascript" src="../scripts/dropdownMenu.js"></script> 
</head>
<body>
    <!-- SKIP LINK (Accessibility) -->
    <a href="#main" class="skipLink">Skip to main content</a>
    
    <!-- HEADER -->
    <?php include 'assets/header.php' ?>

    <!-- NAVIGATION BAR -->
    <?php include 'assets/navigation.php' ?>

    <!-- MAIN CONTENT -->
    <main id="main">
    </main>

    <!-- FOOTER -->
    <?php include 'assets/footer.php' ?>

    <!-- Javascript -->
    <script>

        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("searchBarText").textContent = "Contact me";
        }
    </script>
</body>
</html>