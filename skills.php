<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skills</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <script type="text/javascript" src="../scripts/dropdownMenu.js"></script> 
</head>
<body>

    <!-- HEADER -->

    <?php include 'assets/header.php' ?>

    <!-- NAVIGATION BAR -->

    <?php include 'assets/navigation.php' ?>

    <!-- MAIN CONTENT -->

    <main id="main">
        <div id="cotentList">
        </div>
        <div id="contentInfo">
        </div>
    </main>

    <!-- FOOTER -->

    <?php include 'assets/footer.php' ?>

    <!-- Javascript -->
    <script>

        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("skills").id = "active";
            document.getElementById("searchBarText").textContent = "Skills";
        }
    </script>
</body>
</html>