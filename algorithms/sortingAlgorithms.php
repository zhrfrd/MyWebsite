<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorting algorithms visualization </title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <link rel="stylesheet" href="../stylesheets/sortingAlgorithms.css">
</head>
<body>
    <?php include '../assets/header.php' ?>   <!-- Header of the page -->
    <?php include '../assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="mainSorting">
        <div class="menuSorting">
            <div class="menuSortingInput"><label for="rngSize">Array size</label><input type="range" id="rngSize" min="1" max="50" value="25"><span id="spnSize"></span></div>
            <div class="menuSortingInput"><label for="rngSpeed">Sorting speed</label><input type="range" id="rngSpeed" min="25" max="1000" value="500"><span id="spnSpeed"></span></div>
            <div class="menuSortingButton" onclick="selectionSort()">Selection sort</div>
            <div class="menuSortingButton" onclick="bubbleSort()">Bubble sort</div>
            <div class="menuSortingButton" onclick="insertionSort()">Insertion sort</div>
            <div class="menuSortingButton" onclick="">Merge sort</div>
            <div class="menuSortingButton" onclick="">Quick sort</div>
        </div>
        <div id="containerAllBars">
            <div id="containerBar"></div>
        </div>
    </main>
    <?php include '../assets/footer.php' ?>   <!-- Footer of the page -->

    <!-- Javascript -->
    <script type="text/javascript" src="../scripts/selectionSort.js"></script> 
    <script type="text/javascript" src="../scripts/bubbleSort.js"></script>
    <script type="text/javascript" src="../scripts/insertionSort.js"></script>
    <!--<script src="../scripts/script.js"></script>-->
    <script>
        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS
        populateArray();

        function changeNavActiveId() 
        {
            document.getElementById("projects").id = "active";
            document.getElementById("searchBarText").textContent = "Projects";
        }

        //Size
        var rngSize = document.getElementById("rngSize");
        var spnSizeOutput = document.getElementById("spnSize");

        //Speed
        var rngSpeed = document.getElementById("rngSpeed");
        var spnSpeedOutput = document.getElementById("spnSpeed");

        spnSizeOutput.innerHTML = rngSize.value;
        spnSpeedOutput.innerHTML = rngSpeed.value + " ms";

        //Update in realtime the size of the array with the movement of the range tag
        rngSize.oninput = function()
        {
            spnSizeOutput.innerHTML = this.value;
            populateArray();
        }

        //Set sorting speed
        rngSpeed.oninput = function()
        {
            spnSpeedOutput.innerHTML = this.value + " ms";
        }
    </script>
</body>
</html>