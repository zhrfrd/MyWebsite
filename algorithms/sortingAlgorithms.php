<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorting algorithms visualization </title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <script type="text/javascript" src="../scripts/binarySearch.js"></script> 
</head>
<body>
    <?php include '../assets/header.php' ?>   <!-- Header of the page -->
    <?php include '../assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <div id="Sorting algorithms">
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