<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorting algorithms visualization </title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <link rel="stylesheet" href="../stylesheets/sortingAlgorithms.css">
    <script type="text/javascript" src="../scripts/selectionSort.js"></script> 
    <script type="text/javascript" src="../scripts/bubbleSort.js"></script> 
</head>
<body>
    <?php include '../assets/header.php' ?>   <!-- Header of the page -->
    <?php include '../assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="mainSorting">
        <div class="menuSorting">
            <div class="menuSortingButton"><input type="text" id="txtLength"></div>
            <div class="menuSortingButton"><input type="text" id="txtSpeed"></div>
            <div class="menuSortingButton" onclick="populateArray()">Populate array</div>
            <div class="menuSortingButton" onclick="selectionSort()">Selection sort</div>
            <div class="menuSortingButton" onclick="bubbleSort()">Bubble sort</div>
            <div class="menuSortingButton" onclick="">Insertion sort</div>
            <div class="menuSortingButton" onclick="">Merge sort</div>
            <div class="menuSortingButton" onclick="">Quick sort</div>
        </div>
        <div id="containerBars"></div>
    </main>
    <?php include '../assets/footer.php' ?>   <!-- Footer of the page -->

    <!-- Javascript -->
    <script src="../scripts/script.js"></script>
    <script>
        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("projects").id = "active";
            document.getElementById("searchBarText").textContent = "Projects";
        }
    </script>
</body>
</html>